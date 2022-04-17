import React from 'react'
//compoent;
import MbSignup from "../../ui/modal/modalcontent/modalcontent"
import { MbSignupWrapper, CloseBtn } from './mbStyledComp';
import {NavLink} from "react-router-dom"



function Mbsignup() {
    return (
      <MbSignupWrapper>
        <NavLink to="/">
          <CloseBtn>Close</CloseBtn>
        </NavLink>

        <MbSignup></MbSignup>
      </MbSignupWrapper>
    );
}

export default Mbsignup
