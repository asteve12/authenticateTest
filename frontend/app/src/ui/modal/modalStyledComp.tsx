import styled from "styled-components"
import Button from '@mui/material/Button';

const ModalWrapper = styled.div`
   width:100%;
   height:auto;

`

const ModalSignupBtn = styled(Button)`
  width: 100% !important;
  color: grey !important;
  border: solid 2px grey !important;
  border-radius: 30px !important;
  &:hover {
    background: transparent !important;
    color: grey;
  }
`;

export { ModalWrapper, ModalSignupBtn };