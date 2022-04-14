import { Satellite } from '@mui/icons-material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import forwardLogin from '../axios/axios';

const loginUpUser = createAsyncThunk('login', async (userDetail: any) => {
  const user = forwardLogin
    .get('/api/user', userDetail)
    .then((response) => {
      return {
        status: true,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        status: false,
        errorMsg: error,
      };
    });

  return user;
  // console.log('dispatchadduser', userDetail);
});

const login = createSlice({
  name: 'signUp',
  initialState: {
    name: '',
    email: '',
    username: '',
    contacts: '',
    file: '',
    password: '',
    loading: false,
    errorMsg: '',
    role:"",
    isVerified:false,
    profilePics:"",
    id:""
  },

  reducers: {
    clearState:(state)=>{
       return {
         name: '',
         email: '',
         username: '',
         contacts: '',
         file: '',
         password: '',
         loading: false,
         errorMsg: '',
         role: '',
         isVerified: false,
         profilePics: '',
         id: '',
       };
    }
  },
  extraReducers: {
    //@ts-ignore
    [loginUpUser.pending]: (state, payload) => {
      state.loading = true;
      state.errorMsg = '';
    },
    //@ts-ignore
    [loginUpUser.fulfilled]: (state, detail) => {
      console.log('fullfilled', detail);
      const { payload } = detail;
      if (payload.status) {
        state.loading = false;
     
        const { email, password } = detail.meta.arg;
        const users = payload.data;
        for(let eachUser of users){
          console.log('eachUser.email', eachUser.email, email);
          if(eachUser.email === email){
        
            if (eachUser.password !== password) {
              state.errorMsg = ""
              state.errorMsg ="incorrect password";
              break;
            }
            else{
                 localStorage.setItem('userId', eachUser._id);
                
              state.email = eachUser.email;
              state.password = eachUser.password;
              state.username = eachUser.username;
              state.role = eachUser.role;
              state.isVerified = true;
              state.profilePics = eachUser.profileUrl;
              state.id = eachUser._id
                break;

            }
          }
          else{
             state.errorMsg = 'user does not exist';

          }
        }

      } else if (!payload.status) {
        state.loading = false;
        state.errorMsg = 'An error occurred try again';
      }
    },
    //@ts-ignore
    [loginUpUser.rejected]: (state, payload) => {
      state.loading = false;
    },
  },
});

export default login.reducer;
const clearLoginState = login.actions.clearState
export { loginUpUser, clearLoginState };
