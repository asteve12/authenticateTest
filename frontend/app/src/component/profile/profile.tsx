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



const ProfileComp: React.FC = (props) => {
  let [islogout, setLogout] = useState(false);
  //@ts-ignore
  const signupUser = useSelector((state) => state.signup);
  //@ts-ignore
  const LoginUser = useSelector((state) => state.login);

  return (
    <>
      <ProfileCom>
        <ProfileDetailPage>
          <ProfileBgCont>
            <BgImg></BgImg>
            <BgPics></BgPics>
          </ProfileBgCont>
          <br></br>
          <br></br>
          <ProfileNameCont>
            <h3>{LoginUser.username}</h3>
            <p>{LoginUser.email}</p>
          </ProfileNameCont>
          <LinkCont>
            <NavLink to=''>Notification</NavLink>
            <NavLink to=''>Payment</NavLink>
            <NavLink to=''>Legal</NavLink>
            <NavLink to=''>Speak with us</NavLink>
            <LogoutBtn>Log Out</LogoutBtn>
          </LinkCont>
        </ProfileDetailPage>
      </ProfileCom>
    </>
  );
};

export default ProfileComp;
