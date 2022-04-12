import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//styles 
import modalStyle from "./modal.module.css"
//components
import ModalContent from "./modalcontent/modalcontent"
//interface 



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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  
  

 



  
return (
    <div className={modalStyle.modalWrapper}>
      <Button className={modalStyle.modalSignupBtn} onClick={handleOpen}>
        Sign up
      </Button>
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
    </div>
  );
}
