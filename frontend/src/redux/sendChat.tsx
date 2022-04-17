import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import ForwadAddMsg from "../axios/axios"


const sendChats = createAsyncThunk("sendChat",async(message:any)=>{
    let userToken = localStorage.getItem("userToken")
    if (message.type === "getMsg"){
        const AllMsg = ForwadAddMsg.get('/api/chat', {
          headers: {
            //@ts-ignore
            'x-auth-token': userToken,
          },
        })
        .then((response)=>{
            console.log('allMsg', response);
            return {status:true,msg:response}

        }).catch((error)=>{
             return { status: false, errorMsg: error.response };
        })

    }
      const messageReply = ForwadAddMsg.post(
        '/api/chat',
        {
          message: message.message,
          room: 'Friends Room',
        },
        {
          headers: {
            //@ts-ignore
            'x-auth-token': userToken,
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            const chatRoomMsg = ForwadAddMsg.get('/api/chat', {
              headers: {
                //@ts-ignore
                'x-auth-token': userToken,
              },
            })
              .then((allRoomMessage) => {
                console.log('my resddp', allRoomMessage);
                return { status: true, msg: allRoomMessage };
              })
              .catch((error) => {
                console.log('myMsgReq', error.response);
                return { status: false, errorMsg: error.response };
              });

            return chatRoomMsg;
          }
        })
        .catch((error) => {
          console.log('my sendChat Error', error.response);
        });

    return messageReply;


})

const SendChat = createSlice({
  name: 'chats',
  initialState: {
    message: {},
    errorMsg:"",
  },
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [sendChats.pending]: (state) => {},
    //@ts-ignore
    [sendChats.fulfilled]: (state, userMsg) => {
        const { payload } = userMsg;
        const { status, msg } = payload;
        if(status){
            state.message = msg;

        }
        else{

        }
        console.log('my msg payload', payload);
        
    },
  },
  //@ts-ignore
  [sendChats.rejected]: (state) => {},
});


export default SendChat.reducer;

export { sendChats };