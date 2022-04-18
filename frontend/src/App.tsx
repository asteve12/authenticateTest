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
import { authenticateUser } from './redux/authenticate';
import {useDispatch,useSelector} from "react-redux"

import { Circles } from 'react-loader-spinner';
import Verify from "./pages/verifyPage/verify"
;

import ResetPass from "./pages/resetPassword/passwordReset"
import ResetLink from "./pages/resetPassword/resquestReset/requestRest"



function App() {
  const dispatchLoginUser = useDispatch();
  
  //@ts-ignore
  const loginUser = useSelector((state) => state.login);
  //@ts-ignore
  const authUser = useSelector((state) => state.authenticate);
  console.log('nhfhfhfh', authUser);
  console.log('oooo', loginUser);

   useEffect(() => {
     let userId = localStorage.getItem('userToken');

     console.log('tokenite', userId);
     if (userId) dispatchLoginUser(authenticateUser(userId));
   }, [dispatchLoginUser]);
  
  

  if (authUser.loading) {
  
    return <Circles ariaLabel='loading-indicator' />; 
   

  }


if (loginUser.username !== "") {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Authentication />}></Route>
            <Route path='/login' element={<MbLogin />}></Route>
            <Route
              path='/signup'
              element={
                loginUser.username !== '' || authUser.username !== '' ? <MbSignup />: null
              }
            ></Route>
            <Route
              path='/main'
              element={
                loginUser.username || authUser.username !== '' ? (
                  <MainPage />
                ) : (
                  <div>
                  
                    helloe
                  </div>
                )
              }
            ></Route>
            <Route
              path='/profile'
              element={
                loginUser.username !== '' || authUser.username !== '' ? <Profile />: null
              }
            ></Route>
            <Route
              path='/chats'
              element={
                loginUser.username !== '' || authUser.username !== '' ? (
                  <Chats />
                ) : null
              }
            ></Route>
            <Route path='/auth/:id' element={<Verify></Verify>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )

}
else if (authUser.username !== "") {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication />}></Route>
          <Route path='/login' element={<MbLogin />}></Route>
          <Route
            path='/signup'
            element={
              loginUser.username !== '' || authUser.username !== '' ? (
                <MbSignup />
              ) : null
            }
          ></Route>
          <Route
            path='main'
            element={
              loginUser.username || authUser.username !== '' ? (
                <MainPage />
              ) : (
                <div>
                  {/* <Navigate to='/' replace={true}></Navigate> */}
                  helloe
                </div>
              )
            }
          ></Route>
          <Route
            path='/profile'
            element={
              loginUser.username !== '' || authUser.username !== '' ? (
                <Profile />
              ) :null
            }
          ></Route>
          <Route
            path='/chats'
            element={
              loginUser.username !== '' || authUser.username !== '' ? (
                <Chats />
              ) : null
            }
          ></Route>
          <Route path='/auth/:id' element={<Verify></Verify>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

else{
 console.log('autme', authUser);
 console.log('autme1', loginUser.username);
   return (
     <div className='App'>
       <BrowserRouter>
         <Routes>
           {/* <Route path='*' element={<Navigate to=''></Navigate>}></Route> */}
           <Route path='/' element={<Authentication />}></Route>
           <Route path='/login' element={<MbLogin />}></Route>
           <Route
             path='/signup'
             element={
                <MbSignup />
              
             }
           ></Route>

           <Route
             path='/requestResetLink'
             element={<ResetLink></ResetLink>}
           ></Route>
           <Route path='/auth/:id' element={<Verify></Verify>}></Route>
           <Route
             path='/auth/passwordReset/:id/:userId'
             element={<ResetPass></ResetPass>}
           ></Route>
         </Routes>
       </BrowserRouter>
     </div>
   );
}




}

export default App;
