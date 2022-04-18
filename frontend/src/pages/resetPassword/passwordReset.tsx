import React,{useState} from 'react'
import {useFormik} from "formik"
import {
  InputPassWrap,
  Password,
  ConfirmPassword,
  ErrorMsg,
} from './passStyledCom';
import Button from '@mui/material/Button';
import ForwrdPassReset from "../../axios/axios"
import {useParams, useNavigate} from "react-router-dom"
import { FallingLines } from 'react-loader-spinner';

interface Resetpassword {
  password: string;
  confirmPassword:string
}


interface confrmpassword {
  password?: string;
  confirmPassword?: string;
}




const validate = (values: Resetpassword) => {
   
  const error: confrmpassword = {};
  if(!values.password){
       error.password = 'required';
  }

   if (!values.confirmPassword) {
     error.confirmPassword = 'required';
   }

   if (values.password !== values.confirmPassword) {
         error.confirmPassword = 'password word not mathcing the one above';

   }
   return error;
 
 
};



function PasswordReset() {
     const { id, userId } = useParams();
    const formObj = useFormik({
      initialValues: {
        password: '',
        confirmPassword: '',
      },
      validate ,
    onSubmit: (values) => {
        handlePasswordReset(values);
    },
    });

    const changeRoute = useNavigate();

    const [loading,setLoading] = useState(false)
    const [resetRes,setResetRes] = useState("")
    const [reserError,setResetError] = useState("")


    const handlePasswordReset = (values: Resetpassword) => {
        setLoading(true)
        const userToken = localStorage.getItem('userToken');
        // const userId = localStorage.getItem('userId');
      ForwrdPassReset.post(
        '/api/auth/resetPassword',
        {
          token: id,
          userId: userId,
          password: values.password,
        },
        {
          headers: {
            //@ts-ignore
            'x-auth-token': userToken,
          },
        }
      )
        .then((response) => {
          console.log('mjj', response);
          setResetRes(response.data);
            setLoading(false);
        })
        .catch((error) => {
          console.log('my passreset', error.response);
            setLoading(false);
            setResetError(error.response.data);
        });


    };

    return (
      <>
        {resetRes ? (
          <p>
            {resetRes} <button onClick={() => changeRoute('/')}>Login</button>
          </p>
        ) : (
          <form onSubmit={formObj.handleSubmit}>
            <InputPassWrap>
              <div>
                <label htmlFor='password'>password</label>
              </div>

              <Password
                id='password'
                onChange={formObj.handleChange}
                value={formObj.values.password}
                onBlur={formObj.handleBlur}
                type='password'
              ></Password>
              {formObj.errors.password && formObj.touched.password ? (
                <ErrorMsg>{formObj.errors.password}</ErrorMsg>
              ) : null}
              <br></br>
              <div>
                <label htmlFor='confirmPassword'>confirmPassword</label>
              </div>

              <ConfirmPassword
                id='confirmPassword'
                onChange={formObj.handleChange}
                value={formObj.values.confirmPassword}
                onBlur={formObj.handleBlur}
                type='password'
              ></ConfirmPassword>
              {formObj.errors.confirmPassword &&
              formObj.touched.confirmPassword ? (
                <ErrorMsg>{formObj.errors.confirmPassword}</ErrorMsg>
              ) : null}
              <p>{reserError}</p>
              <br></br>
              {!loading ? (
                <Button variant='contained' type='submit'>
                  submit
                </Button>
              ) : (
                <FallingLines width='110' color='#c8553d' />
              )}
            </InputPassWrap>
          </form>
        )}
      </>
    );
}

export default PasswordReset
