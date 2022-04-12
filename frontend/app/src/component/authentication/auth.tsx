import React from 'react'
//components
import Modal from "../../ui/modal/modal"
//components
import LoginComp from "./login/login"

import {
  AuthMain,
  AuthMainSignup,
  AuthMainLogin,
  AuthLginText,
} from './authStyledComp';

function auth() {
    return (
      <>
        <AuthMain>
          <AuthMainSignup>
            <Modal></Modal>
          </AuthMainSignup>
          <AuthMainLogin>
            <AuthLginText>Login</AuthLginText>
            <LoginComp></LoginComp>
          </AuthMainLogin>
        </AuthMain>
      </>
    );
}

export default auth
