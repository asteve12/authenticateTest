import React,{useState} from 'react'
import { RestWrapper, EmailField, ErrorMsg } from './resetStyl';
import {useFormik} from "formik"
import Button from '@mui/material/Button';
import ForwardRestReq from "../../../axios/axios"
import {FallingLines} from "react-loader-spinner"


interface errorInterface{
  email?:string,
}
interface emailInterface {
  email: string;
}
const validate = (value: emailInterface) => {
  const errors: errorInterface = {};
  if (!value.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;

};


function RequestRestLink() {
    const [linkSentSucc,setLinkSentSucc] = useState("")
    const [loading,setLoading] = useState(false)




    const handleResetLink = (values: emailInterface) => {
        setLoading(true)
      const resetResponse = ForwardRestReq.post('/api/auth/requestReset', {
        email: values.email,
      }).then((response)=>{
          console.log('my-res', response);
            if (response.status === 200) {
              setLinkSentSucc(response.data);
               setLoading(false);
            }
      }).catch((error)=>{
          console.log('sent request LInk', error)
             setLinkSentSucc(error.response.data);
               setLoading(false);
          
      })
    

    };


    const formObj = useFormik({
        initialValues:{
             email:"",
        },
        validate,
    onSubmit:(values)=>{
        handleResetLink(values);
    }

    })


    
    return (
      <>
        {linkSentSucc ? (
          <p>{linkSentSucc}</p>
        ) : (
          <form onSubmit={formObj.handleSubmit}>
            <RestWrapper>
              <div>
                <EmailField
                  id='email'
                  onChange={formObj.handleChange}
                  value={formObj.values.email}
                  onBlur={formObj.handleBlur}
                  type='email'
                ></EmailField>
                {formObj.errors.email && formObj.touched.email ? (
                  <ErrorMsg>{formObj.errors.email}</ErrorMsg>
                ) : null}
                {!loading ? (
                  <Button variant='contained' type='submit'>
                    getResetLink
                  </Button>
                ) : (
                  <FallingLines width='110' color='#c8553d' />
                )}
              </div>
            </RestWrapper>
          </form>
        )}
      </>
    );
    
}

export default RequestRestLink;
