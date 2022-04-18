import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import ForwadAddMsg from "../axios/axios"


const sendChats = createAsyncThunk("sendChat",async(message:any)=>{
    let userToken = localStorage.getItem("userToken")
    if (message.type === "getMsg"){
        const AllMsg = ForwadAddMsg.get('/api/chat/625bd28b89fdcde21f3ba1b4', {
          headers: {
            //@ts-ignore
            'x-auth-token': userToken,
          },
        })
          .then((response) => {
            console.log('allMsg', response);
            return { status: true, msg: response };
          })
          .catch((error) => {
            return { status: false, errorMsg: error.response };
          });

          return AllMsg;

    }
      const messageReply = ForwadAddMsg.post(
        '/api/chat',
        {
          message: message.message,
          room: '625bd28b89fdcde21f3ba1b4',
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
            const chatRoomMsg = ForwadAddMsg.get(
              '/api/chat/625bd28b89fdcde21f3ba1b4',
              {
                headers: {
                  //@ts-ignore
                  'x-auth-token': userToken,
                },
              }
            )
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
    message: [],
    errorMsg:"",
  },
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [sendChats.pending]: (state) => {},
    //@ts-ignore
    [sendChats.fulfilled]: (state, userMsg) => {
    
        const { payload,meta } = userMsg;
           console.log('first love', userMsg)
        if(meta.arg.type === "getMsg"){
            console.log('first love', userMsg);
          state.message = payload.msg.data
        }

        const { status, msg } = payload;
        if(status){
            state.message = msg.data;

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