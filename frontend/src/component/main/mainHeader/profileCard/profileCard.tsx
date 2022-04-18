import React from 'react'
import {
  ProfileCard,
  ProfilePics,
  ProfileName,
  IconsWrapper,
  HomeIcons,
  ChatIcons,
  NavBtn,
  MbMenuWrapper,
} from './profileCardStyled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MbMenu from "./mbMenu/mbMenu"




function ProfCard() {
  //@ts-ignore
  const loginUser = useSelector((state) => state.login);
  //@ts-ignore
  const userDetail = useSelector((state) => state.authenticate);
  //@ts-ignore
  const signupUser = useSelector((state) => state.signup);
  return (
    <ProfileCard>
      <Link to='/profile'>
        {loginUser.profilePics ? (
          <ProfilePics src={loginUser.profilePics}></ProfilePics>
        ) : (
          <ProfilePics src={userDetail.profilePics}></ProfilePics>
        )}

        {signupUser.profilePics ? (
          <ProfilePics src={signupUser.profilePics}></ProfilePics>
        ) : null}
      </Link>

      <IconsWrapper>
        {/* <BsFillChatRightFill></BsFillChatRightFill>
        <AiFillHome></AiFillHome> */}
        <NavBtn
          to='/main'
          style={({ isActive }) => {
            return {
              color: isActive ? '#5976d2' : '',
            };
          }}
        >
          <ChatIcons></ChatIcons>
        </NavBtn>
        <NavBtn
          to='/chats'
          style={({ isActive }) => {
            return {
              color: isActive ? '#5976d2' : '',
            };
          }}
        >
          <HomeIcons></HomeIcons>
        </NavBtn>
      </IconsWrapper>
      <MbMenuWrapper>

        <MbMenu></MbMenu>
      </MbMenuWrapper>

      {loginUser.username ? (
        <ProfileName>{loginUser.username}</ProfileName>
      ) : (
        <ProfileName>{userDetail.username}</ProfileName>
      )}
      {signupUser.username ? (
        <ProfileName>{signupUser.username}</ProfileName>
      ) : null}
    </ProfileCard>
  );
}

export default ProfCard;
