import React,{useEffect}from 'react'
//components/
import ChatComp from "../../component/chats/chatCont/chatCont"
import ActiveUser from "../../component/chats/activeUser/activeUser"
import {
  ChatPage,
  ProfCardWrapper,
  ProfChatBxWrapper,
  ChatDetail,
  ChatCompWrapper,
  LoaderWrapper,
} from './chatStyledCom';
import ProfileCard from "../../component/main/mainHeader/profileCard/profileCard"
import  MessageBox from "./messageBox/messageBox"
import {useSelector,useDispatch} from "react-redux"

import { Bars } from 'react-loader-spinner';

function Chat() {
//@ts-ignore
  const obtainUserMessage = useSelector((state) => state.sendMessage);
  const dispatchGetMsg = useDispatch()
  console.log('obtain', obtainUserMessage);
  // useEffect(()=>{
  //   dispatchGetMsg(sendChats({type:"getMsg"}));

  // },[])
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [obtainUserMessage]);
 

     return (
       <ChatPage>
         <ProfCardWrapper>
           <ProfileCard></ProfileCard>
           <ProfChatBxWrapper>
             <MessageBox></MessageBox>
           </ProfChatBxWrapper>
         </ProfCardWrapper>
         <ChatDetail>
           <ChatCompWrapper>
             {obtainUserMessage.message.map((eachMsg: any) => {
               if (!eachMsg.message) {
                 return;
               }
               else{
                 return (
                   <ChatComp
                     message={eachMsg.message}
                     username={eachMsg.from.username}
                   ></ChatComp>
                 );
                 
               }
               
             })}
           </ChatCompWrapper>
         </ChatDetail>
       </ChatPage>
     );





   
}

export default Chat
