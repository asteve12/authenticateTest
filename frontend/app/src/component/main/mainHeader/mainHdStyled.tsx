import styled from "styled-components"
import MainBg from '../../../assets/main/mainHeader.png';


const MainHeader = styled.div`
  width: 100%;
  height: 250px;
  background: url(${MainBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export { MainHeader };