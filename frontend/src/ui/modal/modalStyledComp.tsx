import styled from "styled-components"
import Button from '@mui/material/Button';


const ModalWrapper = styled.div`
   width:100%;
   height:auto;
   justify-content:center
   

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

const CreateUserBtn = styled(Button)`
  width: 100%;
  height: 50px;
  text-align: right !important;
  text-decoration: none;
  color: grey !important;
  font-family: 'Gilroy-Medium';
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-start !important;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 10px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 100px !important;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export { ModalWrapper, ModalSignupBtn, CreateUserBtn };