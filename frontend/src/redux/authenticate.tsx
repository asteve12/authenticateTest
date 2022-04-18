import {createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import forwardAuth from "../axios/axios"

 

const authenticateUser = createAsyncThunk('authenticate',async(userId:any)=>{
    
    if(!userId){

    }
    else{
      
       let userId = localStorage.getItem('userId');
       console.log('dispatchAuth', userId);
       const user = forwardAuth.get("/api/user").then((response)=>{
      
           const currentUser = response.data
           let loginUser:any 
           for(let eachUser of currentUser){
          
               if ( eachUser._id === userId) {
                   
                   loginUser = eachUser;
                 break;
             
               }
           }
           return loginUser;

       })
      
       return user;
    }

})

const Authenticate = createSlice({
  name: 'authenticate',
  initialState: {
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
    logUserOut:false
  },
  reducers: {

    clearState:(state:any)=>{

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
        logUserOut: true,
      };

    }
  },
  extraReducers: {
    //@ts-ignore
    [authenticateUser.pending]: (state) => {
      state.loading = true;
    },
    //@ts-ignore
    [authenticateUser.fulfilled]: (state, userDetail) => {
      const { payload } = userDetail;
      console.log('agdgdgd', payload);
      
      if (payload) {
          state.email = payload.email;
          state.username = payload.username;
          state.profilePics = payload.profileUrl;
          state.role = payload.role
            console.log('authenticate', state.username);
      }
      state.loading = false;
    
    },
    //@ts-ignore
    [authenticateUser.rejected]: (state, payload) => {
      state.loading = false;
    },
  },
}); 

export default Authenticate.reducer

const clearState  = Authenticate.actions.clearState

export { authenticateUser, clearState };