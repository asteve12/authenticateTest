import styled from "styled-components"
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';


const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;
`;

const ModalNextBtn = styled(Button)`
  &:hover {
    background-color: rgba(0, 0, 0, 0.03) !important;
  }
`;

const ModalSubmitBtn = styled(Button)`
  background-color: #2e69ff !important;
  color: white !important;
  margin-left: 10px !important;
`;

const ModalLabel = styled(InputLabel)`
  background-color: white;
`;

const ConfirmText = styled.p`
font-size:12px;
color:grey;
`
const VerificationTxt = styled.div`
color:grey;
font-size:12px
`


export { ErrorMsg, ModalNextBtn, 
  ModalSubmitBtn, ModalLabel, ConfirmText };