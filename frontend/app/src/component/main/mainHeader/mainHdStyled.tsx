import styled from "styled-components"
import MainBg from '../../../assets/main/mainHeader.png';


const MainHeader = styled.div`
  width: 100%;
  height: 250px;
  background: url(${MainBg});
  background-size: cover;
  background-repeat: no-repeat;

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



export {

  MainHeader,

  MainHeadWrapper,
  MainBdy,
  MainBdyHeader,
  
};