import React from 'react'
//components
import Login from "../../component/authentication/login/login"
import { MbLoginWrapper, MbWrapper, CloseBtn } from './mbStyledComp';
import {NavLink} from "react-router-dom"


function mbLogin() {
    return (
      <MbWrapper>
        <MbLoginWrapper>
            <NavLink to="/">
                 <CloseBtn>
                close
            </CloseBtn>
            </NavLink>
           
          <Login></Login>
        </MbLoginWrapper>
      </MbWrapper>
    );
}

export default mbLogin
