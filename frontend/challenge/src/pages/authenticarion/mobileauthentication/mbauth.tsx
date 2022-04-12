import React from 'react'
import Button from '@mui/material/Button';
//styles
import style from "./mbauth.module.css"
//images
import topBgImg from "../../../assets/authenticationPage/responsive/mobiletop.png"
import {Link} from "react-router-dom"


function mbauth() {
    return (
      <div className={style.MbAuthWrapper}>
        <section className={style.mbauthTopImgWrapper}>
          <img className={style.mbauthTopImg} src={topBgImg} alt='' />
        </section>

        <main className={style.mbauthContent}>
          <div className={style.mbauthDetails}>
            <header>
              <h2>Challenge</h2>
              <p>steve & kevin's project work</p>
            </header>
            <section className={style.mbauthLinkWrapper}>
              <Link to='/login'>
                <Button className={style.mbAuthLogin} variant='contained'>
                  Login
                </Button>
              </Link>
              <Link to='/signup'>
                <Button className={style.mbAuthSignUp} variant='contained'>
                  Signup
                </Button>
              </Link>
            </section>
          </div>
        </main>
      </div>
    );
}

export default mbauth
