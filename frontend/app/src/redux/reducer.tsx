import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import forwardSignUp from "../axios/axios"

const signUpUser = createAsyncThunk("signup",async(userDetail:any)=>{
  const user = forwardSignUp.post('/api/user', userDetail)
  .then((response)=>{
    
       return {
         status: true,
         errorMsg: response,
       };
  })
  .catch((error)=>{
    
      return {
        status: false,
        errorMsg: error,
      };


  })

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
    errorMsg:""
  },

  reducers: {

  },
  extraReducers: {
    //@ts-ignore
    [signUpUser.pending]: (state, payload) => {
        state.loading = true
        state.errorMsg =""
    },
    //@ts-ignore
    [signUpUser.fulfilled]: (state, detail) => {
       console.log('fullfilled', detail);
       const { payload } = detail;
       if(payload.status){
         state.loading = false
       }
       else if(!payload.status){
          state.loading = false;
          state.errorMsg = 'An error occurred try again';

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