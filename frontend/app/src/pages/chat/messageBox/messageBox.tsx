import React from 'react'
import { MsgBxCont, MsgInput, SendBtn } from './messageStyled';



function messageBox() {
    return (
        <MsgBxCont>
            <MsgInput></MsgInput>
            <SendBtn>send</SendBtn>
         </MsgBxCont>
    )
}

export default messageBox
