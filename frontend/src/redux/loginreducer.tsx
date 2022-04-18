import { Satellite } from '@mui/icons-material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import forwardLogin from '../axios/axios';

const loginUpUser = createAsyncThunk('login', async (userDetail: any) => {
  if (userDetail.type === "makeLoginPersistent"){
      let users = forwardLogin.get('/api/user').then((reply) => {
        return { status: true, user: reply.data };
      });
      return users;
    

  } console.log('userlogin', userDetail);
  const user = forwardLogin
    .post('/api/auth', userDetail)
    .then((response) => {
      // return {
      //   status: true,
      //   data: response.data,
      // };
         localStorage.setItem('userToken', response.data);
         console.log('mytoken', response.data);
         
    }).then((response)=>{
     let users = forwardLogin.get("/api/user").then((reply)=>{
       return{status:true, user:reply.data}

      })
      return users;


    })
    .catch((error) => {
      return {
        status: false,
        errorMsg: error.response,
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
    loading: true,
    errorMsg: '',
    role:"",
    isVerified:false,
    profilePics:"",
    id:""
  },

  reducers: {
    clearState:(state)=>{
      localStorage.clear()
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
   
      const { payload ,meta} = detail;
      if (meta.arg.type === 'makeLoginPersistent') {
        console.log('loginmeta', detail);
        
      const userId = localStorage.getItem('userId');
         console.log('fullfilled', userId);
         if (!userId){
           state.loading = false;
           return;
         }

           for (let eachUser of payload.user) {
             if (eachUser._id === userId) {
               state.username = eachUser.username;
               state.name = eachUser.name;
               state.email = eachUser.email;
               state.profilePics = eachUser.profileUrl;

               break;
             }
             state.loading = false;
           }
return state;


      }
      if (payload.status) {
        state.loading = false;
     
        const { email, password } = detail.meta.arg;
        const users = payload.user;
        for(let eachUser of users){
          console.log('eachUser.email', eachUser.email, email);
          if(eachUser.email === email){
        
           
            
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
          else{
             state.errorMsg = 'user does not exist';

          }
        }

      } else if (!payload.status) {
          state.loading = false;
         
        if(payload.errorMsg){
  state.errorMsg = payload.errorMsg.data;
        }
        else{
    state.errorMsg = "sorry an error occured try again";
        }
      

      
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
