import React from 'react'
import {
  MainHeader,
  MainHeadWrapper,
  MainBdy,
  MainBdyHeader,
} from './mainHdStyled';
import {Link} from "react-router-dom"
import ProfileCard from "./profileCard/profileCard"



function MnHeader() {

    return (
      <MainHeadWrapper>
        <MainHeader>
          <ProfileCard></ProfileCard>
        </MainHeader>
        <MainBdy>
          <MainBdyHeader>
            Write an Essay On Why Teacher is Better Than Doctor
          </MainBdyHeader>
        </MainBdy>
      </MainHeadWrapper>
    );
}

export default MnHeader;
