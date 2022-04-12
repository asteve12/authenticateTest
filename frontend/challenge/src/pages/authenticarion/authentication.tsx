import React from 'react'
//styles
import style from "./authentication.module.css"
//components
import AuthComponent from "../../component/authentication/auth"
import MbAuth from "./mobileauthentication/mbauth"

const authentication:React.FC = ()=> {
    return (
      <>
        <div className={style.authPage}>
          {/* <section className={style.mbImgWrapper}>
          <img className={style.mbImg} src={mbImg} alt='' />
        </section> */}
          <section className={style.authCont}>
            <br></br>
            <header>
              <h1>
                <b> Challenge</b>
              </h1>
              <p> steve & kevin project work</p>
            </header>
            <br></br>
            <AuthComponent></AuthComponent>
          </section>
        </div>
        <MbAuth></MbAuth>
      </>
    );
}

export default authentication
