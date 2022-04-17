import styled from "styled-components"
import Button from '@mui/material/Button';

const MsgBxCont = styled.form`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  padding-bottom: 20px;
  background-color: #dae0e6;
  padding-top: 20px;
`;

const MsgInput = styled.input`
width:70%;
/* margin-bottom:20px; */
height:50px;
border-radius: 20px;
outline:none;
border: none;
box-sizing:border-box;
padding:10px

`

const SendBtn = styled(Button)`
  align-self: center;
`;

export { MsgBxCont, MsgInput, SendBtn };