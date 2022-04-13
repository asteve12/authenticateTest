import styled from "styled-components"
import MainBg from '../../../assets/main/mainHeader.png';


const MainHeader = styled.div`
  width: 100%;
  height: 250px;
  background: url(${MainBg});
  background-size: cover;
  background-repeat: no-repeat;

`;

const ProfileName = styled.div`
align-self: center;

`

const ProfileCard = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  a{
    text-decoration:none
  }
  display:flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top:10px
`;

const MainHeadWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
`;

const MainBdy = styled.div`
display:flex;
justify-content: center;

`
const MainBdyHeader = styled.h2`
   @media(max-width:600px) {
    font-size: 17px;

  };
  @media (max-width: 400px) {
    font-size: 10px;
    margin-top:20px
  } ;
`;

const ProfilePics = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 200px;
  background-color: white;
  border: solid 3px #2c5881;
`;

export {
  ProfilePics,
  MainHeader,
  ProfileCard,
  MainHeadWrapper,
  MainBdy,
  MainBdyHeader,
  ProfileName,
};