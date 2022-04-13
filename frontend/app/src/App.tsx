import React from 'react';
import './App.css';
//components
import Authentication from "./pages/authenticarion/authentication"
import MbLogin from "./pages/mbLogin/mbLogin" 
import MbSignup from "./pages/mbSignup/Mbsignup"
import MainPage from "./pages/main/main"
import Profile from "./pages/profile/profile"
import Chats from "./pages/chat/chat"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication />}></Route>
          <Route path='/login' element={<MbLogin />}></Route>
          <Route path='/signup' element={<MbSignup />}></Route>
          <Route path='/main' element={<MainPage />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/chats' element={<Chats />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
