import React from 'react'
import {
  MainHeader,
  ProfileCard,
  MainHeadWrapper,
  MainBdy,
  MainBdyHeader,
  ProfilePics,
  ProfileName,
} from './mainHdStyled';
import {Link} from "react-router-dom"

function mainHeader() {
    return (
      <MainHeadWrapper>
        <MainHeader>
          <ProfileCard>
            <Link to='/profile'>
              <ProfilePics></ProfilePics>
            </Link>
            <ProfileName>Akinfolarin stephen</ProfileName>
          </ProfileCard>
        </MainHeader>
        <MainBdy>
          <MainBdyHeader>
            Write an Essay On Why Teacher is Better Than Doctor
          </MainBdyHeader>
        </MainBdy>
      </MainHeadWrapper>
    );
}

export default mainHeader
