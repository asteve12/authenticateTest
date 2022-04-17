import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import ForwdVerifyReq from "../axios/axios"

const verifyTk = createAsyncThunk("verifyTk",async(token:any)=>{
    
     if (token.type){
         const resetStatus = ForwdVerifyReq.post(`api//auth/reset/${token.token}`)
                             .then((response)=>{
                                 console.log("token reset",response)
                             })
                             .catch((error)=>{
                                 console.log('token reset error',error.response);
                             })
        

     }
       const resstatus = ForwdVerifyReq.get(`/api/auth/verify/${token}`)
         .then((response) => {
           console.log('my verify response', response);
           return {
             status: true,
             data: response,
           };
         })
         .catch((error) => {
           console.log('error occurred in verify token', error.response);
           return {
             status: false,
             errorMsg: error.response,
           };
         });

    return resstatus;

})

const VerifyEmail = createSlice({
  name: 'verifyToken',
  initialState: {
    success: false,
    expired: false,
    loading: true,
    errorMsg:""
  },
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [verifyTk.pending]: (state) => {
      state.loading = true;
    },
    //@ts-ignore
    [verifyTk.fulfilled]: (state, verifyDetail) => {
        const {payload} = verifyDetail;
        if(payload.status){
            state.loading = false;
            if (payload.data.status === 200) {
                state.success = true
            }
            

        }
        else{
            state.loading = false
            const {errorMsg} = payload
            if(errorMsg.status = 404){
                state.errorMsg = errorMsg.data;

            }
            
            

        }


    },
    //@ts-ignore
    [verifyTk.rejected]:(state,)=>{

    }

  },
});


export default VerifyEmail.reducer

export { verifyTk };