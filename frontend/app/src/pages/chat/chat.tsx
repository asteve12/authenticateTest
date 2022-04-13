import React from 'react'
//components/
import ChatComp from "../../component/chats/chatCont/chatCont"
import ActiveUser from "../../component/chats/activeUser/activeUser"

function chat() {
    return (
      <div>
        <ChatComp></ChatComp>
        <ActiveUser></ActiveUser>
    </div>
    );
}

export default chat
