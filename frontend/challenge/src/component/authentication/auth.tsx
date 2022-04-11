import React from 'react'
//components
import Modal from "../../ui/modal/modal"
//styles
import style from "./auth.module.css"
//components
import LoginComp from "./login/login"

function auth() {
    return (
      <main className={style.authMain}>
        <section className={style.authMainSignup}>
          <Modal></Modal>
        </section>
        <section className={style.authMainLogin}>
          <p className={style.authLginText}>
            Login
          </p>
          <LoginComp></LoginComp>

        </section>
      </main>
    );
}

export default auth
