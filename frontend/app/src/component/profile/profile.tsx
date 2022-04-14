import React, { useState } from 'react';

//styles
import style from './profile.module.css';
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux"
import {
  ProfileCom,
  ProfileDetailPage,
  ProfileBgCont,
  BgImg,
  BgPics,
  ProfileNameCont,
  LinkCont,
  LogoutBtn,
} from './profilestyledComp';
import {useDispatch} from "react-redux"
import {clearState} from "../../redux/authenticate"
import {clearLoginState} from "../../redux/loginreducer"


const ProfileComp: React.FC = (props) => {

  const dispatchLogout = useDispatch();
  //@ts-ignore
  const signupUser = useSelector((state) => state.signup);
  //@ts-ignore
  const LoginUser = useSelector((state) => state.login);
  //@ts-ignore
  const authUser = useSelector((state) => state.authenticate);

  return (
    <>
      <ProfileCom>
        <ProfileDetailPage>
          <ProfileBgCont>
            <BgImg></BgImg>
            {LoginUser.profilePics ? (
              <BgPics src={LoginUser.profilePics}></BgPics>
            ) : null}
            {signupUser.profilePics ? (
              <BgPics src={signupUser.profilePics}></BgPics>
            ) : null}
            {authUser.profilePics ? (
              <BgPics src={authUser.profilePics}></BgPics>
            ) : null}
          </ProfileBgCont>
          <br></br>
          <br></br>
          <ProfileNameCont>
            {signupUser.username ? <h3>{LoginUser.username}</h3> : null}
            {signupUser.email ? <p>{signupUser.email}</p> : null}
            {LoginUser.username ? <h3>{LoginUser.username}</h3> : null}
            {LoginUser.email ? <p>{LoginUser.email}</p> : null}
            {authUser.username ? <h3>{authUser.username}</h3> : null}
            {authUser.email ? <p>{authUser.email}</p> : null}
          </ProfileNameCont>
          <LinkCont>
            <NavLink to=''>Notification</NavLink>
            <NavLink to=''>Payment</NavLink>
            <NavLink to=''>Legal</NavLink>
            <NavLink to=''>Speak with us</NavLink>
            <LogoutBtn
              onClick={() => {
            
                dispatchLogout(clearState());
               dispatchLogout(clearLoginState())
              }}
            >
              Log Out
            </LogoutBtn>
          </LinkCont>
        </ProfileDetailPage>
      </ProfileCom>
    </>
  );
};

export default ProfileComp;
