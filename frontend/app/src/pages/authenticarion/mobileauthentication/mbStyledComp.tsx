import styled from "styled-components"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const MbAuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 700px) {
    background-color: rgb(145, 162, 168);

}
  @media (min-width: 700px) {
   
      display: none;
 
  }
`;

const MbauthTopImgWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
`;


const MbauthTopImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MbauthContent = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MbauthDetails = styled.div`
`;
const Header = styled.header`
`

const HeaderText = styled.div`
  text-align: center;
  margin: 0px;
  color: white;
`;

const HeaderPara = styled.div`
  text-align: center;
  margin: 0px;
  margin-bottom: 15px;
  color: white;
`;

const MbauthLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LoginButton = styled(Button)`
  width: 45%;
  background: none !important;
  border-radius: 15px;
`;

const MbAuthSignUpBtn = styled(Button)`
  width: 45%;
  background: none !important;

  border-radius: 15px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;



export {
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
};