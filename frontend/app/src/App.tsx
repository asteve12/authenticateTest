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
import {Navigate} from "react-router-dom"
import { Circles } from 'react-loader-spinner';


function App() {
  const dispatchLoginUser = useDispatch();
  //@ts-ignore
  const loginUser = useSelector((state) => state.login);
  //@ts-ignore
  const authUser = useSelector((state) => state.authenticate);
  console.log('nhfhfhfh', authUser);
  console.log('oooo', loginUser);
  
   let userId = localStorage.getItem('userId');

   if (userId && !authUser.username && !authUser.logUserOut) {
     dispatchLoginUser(authenticateUser(userId));
   } 

  if (authUser.loading) {
  
    return <Circles ariaLabel='loading-indicator' />; 
   

  }



  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication />}></Route>
          <Route path='/login' element={<MbLogin />}></Route>
          <Route
            path='/signup'
            element={
              loginUser.username || authUser.username ? (
                <MbSignup />
              ) : (
                <Navigate to='/' replace={true}></Navigate>
              )
            }
          ></Route>
          <Route
            path='/main'
            element={
              loginUser.username || authUser.username ? (
                <MainPage />
              ) : (
                <Navigate to='/' replace={true}></Navigate>
              )
            }
          ></Route>
          <Route
            path='/profile'
            element={
              loginUser.username || authUser.username ? (
                <Profile />
              ) : (
                <Navigate to='/' replace={true}></Navigate>
              )
            }
          ></Route>
          <Route
            path='/chats'
            element={
              loginUser.username || authUser.username ? (
                <Chats />
              ) : (
                <Navigate to='/' replace={true}></Navigate>
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
