import React,{useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {Bars} from "react-loader-spinner"
import {LoaderWrapper} from "./verifyComp"
import {verifyTk} from "../../redux/verifyEmail"
import { NavLink, useNavigate } from 'react-router-dom';


function Verify() {
    const dispatchVerifyTk = useDispatch();
    //@ts-ignore
    const verifyInfo = useSelector((state) => state.verifyToken);
     const { id } = useParams();
     const routes = useNavigate();
    console.log(id,"my token");

    useEffect(()=>{
        dispatchVerifyTk(verifyTk(id));

    },[])

    const resetToken = ()=>{
        const resetDetail = {
            type:"reset",
            token:id
        }
         dispatchVerifyTk(verifyTk(resetDetail));

    }


    if (verifyInfo.loading) {
      return (
        <LoaderWrapper>
          <Bars
            height='100'
            width='100'
            color='grey'
            ariaLabel='loading-indicator'
          />
        </LoaderWrapper>
      );
    } if (verifyInfo.success) {

        return (
          <div>
            <p>email verification successfull</p>
            <button onClick={() => routes('/')}>Login</button>
            
          </div>
        );
    }
    if (verifyInfo.errorMsg === 'We were unable to find a valid token. Your token my have expired.')
    {
        return (
          <div>
            <p>{verifyInfo.errorMsg}</p>
            <button onClick={resetToken}>resend token</button>
          </div>
        );
    }
      return (
        <div>
          <p> {verifyInfo.errorMsg}</p>

          <button onClick={() => routes('/')}>Login</button>
        </div>
      );
}

export default Verify
