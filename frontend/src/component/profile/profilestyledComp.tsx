import styled from "styled-components"


const ProfileCom = styled.section`
  width: 100%;
  height: 100%;
  margin: 0px;
  @media (max-width: 920px) {
    width: 100%;
    padding-bottom: 200px;
  }
  @media (min-width: 920px) {
    
      width: 100%;
  
  }
`;

const ProfileDetailPage = styled.section`
  width: 100%;
  height: 90%;
  margin-top: 5px;
  @media (max-width: 400px) {
     margin: 0px;
      height: auto;
      padding-top: 20px;

  }
`;
const ProfileBgCont = styled.section`
  height: 300px;
  position: relative;
  @media (max-width: 400px) {
   
      display: flex;
      align-items: center;
      justify-content: center;
      height: 150px;
    
  }
`;

const BgImg = styled.div`
  height: 200px;
  background: #c7c9d9;
  @media (max-width: 400px) {
    display: none;
 
  }
`;

const BgPics = styled.img`
  background: #f2f3f8;
  width: 209px;
  height: 209px;
  border-radius: 209px;
  border: 5.2585px solid #eeeeee;
  position: absolute;
  bottom: 0px;
  left: 50px;
  @media (max-width: 400px) {
     width: 159px;
      height: 159px;
      border-radius: 159px;
      margin: 0px;
      top: 0px;
      left: auto;
    
  }
`;

const ProfileNameCont = styled.div`
  padding-left: 70px;
  @media(max-width:400px){
    padding: 0px;
    text-align: center;
  };
  h3 {
    margin: 0px;
    font-family: 'Gilroy';
    font-style: normal;
    font-size: 24px;
    color: #444f60;
  }
  p {
    margin: 5px;
    color: #999999;
    font-family: 'Gilroy';

    font-weight: 400;
    font-size: 12px;
  }
`;

const LinkCont = styled.div`
  height: auto;
  width: 200px;
  margin-left: 70px;

  margin-top: 20px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 3px;

  @media (max-width: 400px) {
    margin-left: 0px;
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
  }
  a {
    width: 100%;
    height: 50px;
    text-decoration: none;
    color: #444f60;
    font-family: 'Gilroy-Medium';
    font-size: 17px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    padding-left: 10px;
    display: flex;
    justify-content: center;

    @media (max-width: 400px) {
      width: 150px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
    }
  }
`;

const LogoutBtn = styled.button`
  width: 100%;
  height: 50px;
  text-decoration: none;
  color: #ef4358;
  font-family: 'Gilroy-Medium';
  font-size: 17px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 10px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 400px) {
  
      width: 100px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    
  }
`;

export {
  ProfileCom,
  ProfileDetailPage,
  ProfileBgCont,
  BgImg,
  BgPics,
  ProfileNameCont,
  LinkCont,
  LogoutBtn,
};