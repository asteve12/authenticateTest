import React from 'react'
import { MsgBxCont, MsgInput, SendBtn } from './messageStyled';
import {useFormik} from "formik"
import {useDispatch,useSelector} from "react-redux"
import { sendChats} from "../../../redux/sendChat"



function MessageBox() {
    const dispatchMsg = useDispatch()
    
   const handleReset = ()=>{
     formObj.resetForm()

   }

    const formObj = useFormik({
        initialValues:{
            message:""
        },
        onSubmit:(values)=>{
            dispatchMsg(sendChats(values));
            handleReset()

        }
    })

    return (
      <MsgBxCont onSubmit={formObj.handleSubmit}>
        <MsgInput
          id='message'
          onChange={formObj.handleChange}
          value={formObj.values.message}
        ></MsgInput>
        <SendBtn type='submit'>send</SendBtn>
      </MsgBxCont>
    );
}

export default MessageBox;
