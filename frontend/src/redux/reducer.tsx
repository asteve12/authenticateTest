import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import forwardSignUp from "../axios/axios"

const signUpUser = createAsyncThunk("signup",async(userDetail:any)=>{

  const {email,username,password,role} = userDetail;
    // console.log("hfjfjf",userDetail)

  const formData = new FormData();


formData.append('email', email);
formData.append('username', username);
formData.append('password', password);
formData.append('role', role);
formData.append('file', userDetail.file);

 let data = formData;




  const user = forwardSignUp.post('/api/user', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((response) => {
      return {
        status: true,
        errorMsg: response,
      };
    })
    .catch((error) => {
      return {
        status: false,
        errorMsg: error.response,
      };
    });

  return user;
    // console.log('dispatchadduser', userDetail);

})





const signUp = createSlice({
  name: 'signUp',
  initialState: {
    name: '',
    email: '',
    username: '',
    contacts: '',
    file: '',
    password: '',
    loading: false,
    errorMsg:"",
    signupStatus:""
  },

  reducers: {

  },
  extraReducers: {
    //@ts-ignore
    [signUpUser.pending]: (state,) => {
    
        state.loading = true
          console.log('status quo', state);
        state.errorMsg =""
    },
    //@ts-ignore
    [signUpUser.fulfilled]: (state, detail) => {
       console.log('fullfilled', detail);
       const { payload } = detail;
       if(payload.status){
         state.loading = false
         state.signupStatus = "success"
       }
       else if(!payload.status){
          state.loading = false;
          if (payload.errorMsg.data){
      state.errorMsg = payload.errorMsg.data;
          }
          else{
            state.errorMsg = "An error occurred,try again"
          }

       }
},
    //@ts-ignore
    [signUpUser.rejected]: (state, payload) => {
      state.loading = false
    },
  },
});


export default signUp.reducer
export { signUpUser };