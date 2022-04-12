import React from 'react'
//components
import AuthComponent from "../../component/authentication/auth"
import MbAuth from "./mobileauthentication/mbauth"
import {
  AuthPage,
  AuthCont,
  AuthContHeader,
  AuthHeaderText,
  AuthHeaderPara,
} from './styledComponent';


const authentication:React.FC = ()=> {
    return (
      <>
        <AuthPage>
         
          <AuthCont>
            <br></br>
            <AuthContHeader>
              <AuthHeaderText>
                <b> Challenge</b>
              </AuthHeaderText>
              <AuthHeaderPara> steve & kevin project work</AuthHeaderPara>
            </AuthContHeader>
            <br></br>
            <AuthComponent></AuthComponent>
          </AuthCont>
        </AuthPage>
        <MbAuth></MbAuth>
      </>
    );
}

export default authentication
