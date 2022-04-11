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
import {errorInterface} from "./modalcontent/modalcontent"


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  height:300
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setRegCount(1)
      setShowSubmitBtn(false);
  }
  const [showSubmitBtn,setShowSubmitBtn] = useState(false)
  const [regStage,setRegStage] = useState("Email")
  const [regCount,setRegCount] =  useState(1)

  

  const modalContentHandler = (): void => {
    setRegCount((prevStage) => prevStage+1);
    if (regCount === 2) {
      setRegStage('confirmEmail');
    } else if (regCount === 3) {
      setRegStage('yourdetails');
         setShowSubmitBtn(true);
    } else if (regCount === 4) {
      setRegStage('password');
   
    }



  };

  const approveNext = (errorObj: errorInterface) => {
    console.log('my error', errorObj);
  };

  

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
          {regCount === 2 ? (
            <div className={modalStyle.modalConfirmWrapper}>
              <h3>Confirm your email</h3>
              <p>Please enter the code we sent to ope11@gmail.com</p>
            </div>
          ) : null}
          <ModalContent
            stage={regCount}
            approveNext={approveNext}
          ></ModalContent>
          {regCount === 2 ? (
            <section className={modalStyle.modalResendLnk}>
              <a href='#'>
                Didn't receive an email or something went wrong? Resend code
              </a>
            </section>
          ) : null}
          {showSubmitBtn === false ? (
            <Button
              className={modalStyle.modalNextBtn}
              sx={{
                m: 1,
                color: '#808080',
              }}
              variant='text'
              onClick={modalContentHandler}
            >
              NEXT
            </Button>
          ) : (
            <Button
              className={modalStyle.modalSubmitBtn}
              onClick={handleClose}
              variant='text'
            >
              Submit
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
}
