import React from 'react'


//images
import topBgImg from "../../../assets/authenticationPage/responsive/mobiletop.png"
import {Link} from "react-router-dom"
import {
  MbAuthWrapper,
  MbauthTopImgWrapper,
  MbauthTopImg,
  MbauthContent,
  MbauthDetails,
  Header,
  HeaderText,
  HeaderPara,
  MbauthLinkWrapper,
  LoginButton,
  MbAuthSignUpBtn,
  NavLink,
} from './mbStyledComp';


function mbauth() {
    return (
      <MbAuthWrapper>
        <MbauthTopImgWrapper>
          <MbauthTopImg src={topBgImg} alt='' />
        </MbauthTopImgWrapper>

        <MbauthContent>
          <MbauthDetails>
            <Header>
              <HeaderText>Challenge</HeaderText>
              <HeaderPara>steve & kevin's project work</HeaderPara>
            </Header>
            <MbauthLinkWrapper>
              <NavLink to='/login'>
                <LoginButton variant='contained'>Login</LoginButton>
              </NavLink>
              <NavLink to='/signup'>
                <MbAuthSignUpBtn variant='contained'>Signup</MbAuthSignUpBtn>
              </NavLink>
            </MbauthLinkWrapper>
          </MbauthDetails>
        </MbauthContent>
      </MbAuthWrapper>
    );
}

export default mbauth
