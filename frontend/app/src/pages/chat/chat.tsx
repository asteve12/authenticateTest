import React from 'react'
//components/
import ChatComp from "../../component/chats/chatCont/chatCont"
import ActiveUser from "../../component/chats/activeUser/activeUser"
import {
  ChatPage,
  ProfCardWrapper,
  ProfChatBxWrapper,
  ChatDetail,
  ChatCompWrapper
} from './chatStyledCom';
import ProfileCard from "../../component/main/mainHeader/profileCard/profileCard"
import  MessageBox from "./messageBox/messageBox"
function chat() {
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
            <ChatComp></ChatComp>
            <ChatComp></ChatComp>
            <ChatComp></ChatComp>
            <ChatComp></ChatComp>
            <ChatComp></ChatComp>
            <ChatComp></ChatComp>
          </ChatCompWrapper>

         
        </ChatDetail>
      </ChatPage>
    );
}

export default chat
