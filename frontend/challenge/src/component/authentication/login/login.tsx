import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import {Link,Navigate} from "react-router-dom"
import {useFormik} from "formik"
import  {loginUpUser} from "../../../redux/loginreducer"
import {useSelector,useDispatch} from "react-redux"
import { ThreeCircles } from 'react-loader-spinner';
//styles
import style from "./login.module.css"
interface errorInterface{
  email?:string,
  password?:string

}
interface valueInterface{
    email:string,
  password:string

}

export default function BasicTextFields() {
     const [values, setValues] = React.useState({showPassword: false});
     const dispatchlogUserIn = useDispatch()
     //@ts-ignore
     const login = useSelector(state=> state.login)

    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword
      });
    };

     const handleMouseDownPassword = (
       event: React.MouseEvent<HTMLButtonElement>
     ) => {
       event.preventDefault();
     };

     const validate = (value:valueInterface)=>{
       const errors: errorInterface = {};
        if (!value.email) {
         errors.email = 'required';
       }
       else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
    ) {
      errors.email = 'Invalid email address';
    }

      if (!value.password) {
        errors.password = 'required';
      }
       
    
    return errors;

     }

      const formObj = useFormik({
        initialValues:{
          email:"",
          password:"" },
          validate,
          onSubmit:(value)=>{
            dispatchlogUserIn(loginUpUser(value));
          

          }
        
      })


  return (
    <>
      {login.isVerified ? (
        <Navigate to='/main' replace={true}></Navigate>
      ) : null}
      <form onSubmit={formObj.handleSubmit}>
        <br></br>
        <TextField
          id='email'
          label='Email'
          variant='outlined'
          sx={{ width: '100%' }}
          onChange={formObj.handleChange}
          value={formObj.values.email}
          onBlur={formObj.handleBlur}
        />
        {formObj.errors.email && formObj.touched.email ? (
          <div className={style.errorMsg}>{formObj.errors.email}</div>
        ) : null}
        <FormControl
          sx={{ marginTop: 3, marginBottom: 3, width: '100%' }}
          variant='outlined'
        >
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='password'
            type={values.showPassword ? 'text' : 'password'}
            onChange={formObj.handleChange}
            value={formObj.values.password}
            onBlur={formObj.handleBlur}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>
        {formObj.errors.password && formObj.touched.password ? (
          <div className={style.errorMsg}>{formObj.errors.password}</div>
        ) : null}
        {login.errorMsg ? (
          <div className={style.errorMsg}>{login.errorMsg}</div>
        ) : null}

        <section className={style.loginBottom}>
          <div>
            <a href='#'>Forgot password?</a>
          </div>
          <div>
            {login.loading ? (
              <ThreeCircles
                color='blue'
                height={55}
                width={55}
                ariaLabel='three-circles-rotating'
              />
            ) : (
              <Button
                variant='text'
                type='submit'
                disabled={
                  formObj.values.password !== '' &&
                  formObj.values.email !== '' &&
                  formObj.errors.email !== 'Invalid email address'
                    ? false
                    : true
                }
              >
                Login
              </Button>
            )}
          </div>
        </section>
      </form>
    </>
  );
}
