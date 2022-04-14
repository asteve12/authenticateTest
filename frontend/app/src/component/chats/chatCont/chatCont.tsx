import React from 'react'
import { ChaCont, ChatWrapper } from './chatContStyled';
import {Link} from "react-router-dom"

function chatCont() {
    return (
      <ChaCont>
        <Link to='/'>impact_code</Link>
        <ChatWrapper>
          jjlllllnflknlfknlfknlfknlj jjlllllnflknlfknlfknlfknlj
          jjlllllnflknlfknlfknlfknlj jjlllllnflknlfknlfknlfknlj
          jjlllllnflknlfknlfknlfknlj
        </ChatWrapper>
      </ChaCont>
    );
}

export default chatCont
