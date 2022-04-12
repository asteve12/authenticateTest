import styled from 'styled-components';
import Bgimg from "../../assets/authenticationPage/authenticationBg.png"

const AuthPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Bgimg});
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  box-sizing: border-box;
  @media (max-width: 700px) {
  
      display: none;

  }
  @media (min-width: 700px) {
   
      display: flex;
 
  }
`;


const AuthCont = styled.section`
  height: 70vh;
  background-color: white;
  padding: 10px;
  min-width: 45%;
`; 

const AuthContHeader = styled.header`
  text-align: center;

`;

const AuthHeaderText = styled.h1`
  margin: 0px;
  font-size: 30px;
  color: #b92b27;
  font-weight: bold;
`;

const AuthHeaderPara = styled.p`
  font-size: 15px;
  color: #636466;
  font-weight: bold;
  margin: 0px;
`;



export { AuthPage, AuthCont, AuthContHeader, AuthHeaderText, AuthHeaderPara };

