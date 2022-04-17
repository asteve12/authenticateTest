import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//components
import ModalContent from "./modalcontent/modalcontent"
//interface 

import { ModalWrapper, ModalSignupBtn } from './modalStyledComp';
import { CreateUserBtn } from './modalStyledComp';
import {useSelector} from "react-redux"



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  height:350
};

export default function BasicModal(props:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //@ts-ignore
  const LoginUser = useSelector((state) => state.login);
  //@ts-ignore
  const signupUser = useSelector((state) => state.signup);
  //@ts-ignore
  const authUser = useSelector((state) => state.authenticate);

  return (
    <ModalWrapper>
      {LoginUser.role === 'admin' ||
      signupUser.role === 'admin' ||
      authUser.role === 'admin' ? (
        <CreateUserBtn onClick={handleOpen}> createUser</CreateUserBtn>
      ) : null}
      {props.type  !== "profile" ? <ModalSignupBtn onClick={handleOpen}>Sign up</ModalSignupBtn>:null}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <ModalContent></ModalContent>
        </Box>
      </Modal>
    </ModalWrapper>
  );
}
