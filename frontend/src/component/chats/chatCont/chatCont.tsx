import React from 'react'
import { ChaCont, ChatWrapper } from './chatContStyled';
import {Link} from "react-router-dom"
interface chatInterface{
  message:string,
  username:string
}

const ChatCnt:React.FC<chatInterface>= (props)=> {
    return (
      <ChaCont>
        <Link to='/'>{props.username}</Link>
        <ChatWrapper>{props.message}</ChatWrapper>
      </ChaCont>
    );
}

export default ChatCnt
