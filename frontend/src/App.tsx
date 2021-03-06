import React,{useEffect} from 'react';
import './App.css';
//components
import Authentication from "./pages/authenticarion/authentication"
import MbLogin from "./pages/mbLogin/mbLogin" 
import MbSignup from "./pages/mbSignup/Mbsignup"
import MainPage from "./pages/main/main"
import Profile from "./pages/profile/profile"
import Chats from "./pages/chat/chat"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PasswordReset from "./pages/resetPassword/passwordReset"
import RequestReset from "./pages/resetPassword/resquestReset/requestRest"

import {useDispatch,useSelector} from "react-redux"
import  {Navigate} from "react-router-dom"

import { Circles } from 'react-loader-spinner';
import Verify from "./pages/verifyPage/verify"
;



import { loginUpUser } from './redux/loginreducer';

function App() {
  const dispatchLoginUser = useDispatch();
  
  //@ts-ignore
  const loginUser = useSelector((state) => state.login);
  


 

   useEffect(() => {
     let userId = localStorage.getItem('userToken');

     console.log('tokenite', userId);
     dispatchLoginUser(loginUpUser({ type:"makeLoginPersistent"}));
     
   }, [dispatchLoginUser]);
  
 

    


  if (loginUser.loading) {
    return <Circles ariaLabel='loading-indicator' />;
  }




   return (
     <div className='App'>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Authentication />}></Route>
           <Route path='/login' element={<MbLogin />}></Route>
           <Route path='/signup' element={<MbSignup />}></Route>
           <Route
             path='/main'
             element={
               loginUser.username !== '' ? (
                 <MainPage />
               ) : (
                 <Navigate to='/'></Navigate>
               )
             }
           ></Route>
           <Route
             path='/profile'
             element={loginUser.username !== '' ? <Profile /> : null}
           ></Route>
           <Route
             path='/chats'
             element={loginUser.username !== '' ? <Chats /> : null}
           ></Route>
           <Route path='/auth/:id' element={<Verify></Verify>}></Route>
           <Route
             path='/auth/passwordReset/:id/:userId'
             element={<PasswordReset></PasswordReset>}
           ></Route>
           <Route
             path='/requestResetLink'
             element={<RequestReset></RequestReset>}
           ></Route>
         </Routes>
       </BrowserRouter>
     </div>
   );








}

export default App;
