import styled from "styled-components"
import Button from '@mui/material/Button';


const MbLoginWrapper = styled.div`
width:80%;
  a{
    text-decoration:none;
  };

`

const MbWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
`;

const CloseBtn = styled(Button)`
margin-top:10px;

`;


export { MbLoginWrapper, MbWrapper, CloseBtn };