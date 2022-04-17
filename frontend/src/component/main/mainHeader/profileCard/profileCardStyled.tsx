import styled from "styled-components"
import { BsFillChatRightFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';


const ProfileCard = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  a {
    text-decoration: none;
  }
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 10px;
`;
const ProfilePics = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 200px;
  background-color: white;
  border: solid 3px #787d81;
`;

const ProfileName = styled.div`
align-self: center;
@media(max-width:700px){
  display:none
}
`

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;

`;

const HomeIcons = styled(BsFillChatRightFill)`
  font-size: 20px;
  margin: 10%;
  color: #5976d2;
  @media(max-width:700px){
    margin:3%
  }
`;

const ChatIcons = styled(AiFillHome)`
  font-size: 22px;
  margin: 10%;
  color: #5976d2;
  @media (max-width: 700px) {
    margin: 3%;
  }
`;

const NavBtn = styled(NavLink)`
margin:100px;
text-decoration: none;

`






export {
  ProfileCard,
  ProfilePics,
  ProfileName,
  IconsWrapper,
  HomeIcons,
  ChatIcons,
  NavBtn,
};
