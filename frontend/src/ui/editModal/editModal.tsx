import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { InputText, SubmitBtn } from './editModalStyledComp';
import {useFormik} from "formik"
import {useSelector,useDispatch} from "react-redux"
import {updateBlogAsync} from "../../redux/updateBlog"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatchUpdateText = useDispatch()

 const formResetHandler = () => {
   formObj.resetForm();
 };


  const formObj = useFormik({
    initialValues:{
      text:""
    },
    onSubmit:(values)=>{
      dispatchUpdateText(updateBlogAsync(values));
      formResetHandler()

    }
  })

 


  return (
    <div>
      <Button onClick={handleOpen}>Contribute</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <form onSubmit={formObj.handleSubmit}>
          <Box sx={style}>
            <InputText
              id='text'
              onChange={formObj.handleChange}
              value={formObj.values.text}
            ></InputText>
            <SubmitBtn 
            //onClick={handleClose} 
            type='submit'>
              Add
            </SubmitBtn>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
