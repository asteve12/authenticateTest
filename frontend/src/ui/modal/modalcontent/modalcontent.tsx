import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {useFormik} from "formik"
import {useDispatch,useSelector} from "react-redux"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThreeCircles } from 'react-loader-spinner';
import {Link} from "react-router-dom"

//actions
import {signUpUser} from "../../../redux/reducer"

import {
  ErrorMsg,
  ModalNextBtn,
  ModalSubmitBtn,
  ModalLabel,
  ConfirmText,
} from './mdcontStyled';

 export interface errorInterface {
   name?: string;
   email?: string;
 
   username?: string;
   contact?: string;
   password?: string;
   role?: string;
 }
export interface validateForm {
  name: string;
  email: string;
  username: string;
  contact: string;
  password: string;
  role: string;
}
const role = ['admin', 'user','moderator'];









export default function BasicTextFields() {
  const [showNextForm, setShowNextForm] = useState({
    firstForm: true,
    secondForm: false,
    thirdForm: false,
  });
  //@ts-ignore
  const signup = useSelector((state) => state.signup);
  //@ts-ignore
  const authUser = useSelector((state) => state.authenticate);
  //@ts-ignore
  const loginUser = useSelector((state) => state.login);
  //@ts-ignore
  const dispatchSignup = useDispatch();

  const validate = (values: validateForm) => {
    const errors: errorInterface = {};
    if (!values.name) {
      errors.name = 'required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.username) {
      errors.username = 'required';
    }
    if (!values.contact) {
      errors.contact = 'required';
    }

    if (!values.password) {
      errors.password = 'required';
    }
    if (!values.role) {
      errors.role = 'required';
    }

    return errors;
  };

  const formObj = useFormik({
    initialValues: {
      name: '',
      email: '',

      username: '',
      contact: '',
      password: '',
      role: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('djdjjdj', values);

      dispatchSignup(signUpUser(values));
    },
  });
  if (signup.signupStatus === 'success') {
    return (
      <div>
        <p>Authentication link has been sent verify that the email is your</p>
      </div>
    );
  }
  if (showNextForm.firstForm) {
    return (
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '100' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          sx={{ width: '100%' }}
          id='name'
          label='Name'
          variant='outlined'
          onChange={formObj.handleChange}
          value={formObj.values.name}
          onBlur={formObj.handleBlur}
        />
        {formObj.errors.name && formObj.touched.name ? (
          <ErrorMsg>{formObj.errors.name}</ErrorMsg>
        ) : null}
        <TextField
          sx={{ width: '100%' }}
          id='email'
          label='email'
          variant='outlined'
          onChange={formObj.handleChange}
          value={formObj.values.email}
          onBlur={formObj.handleBlur}
        />
        {formObj.errors.email && formObj.touched.email ? (
          <ErrorMsg>{formObj.errors.email}</ErrorMsg>
        ) : null}

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <ModalLabel id='demo-simple-select-label'>role</ModalLabel>
            <Select
              labelId='role'
              name='role'
              onChange={formObj.handleChange}
              onBlur={formObj.handleBlur}
              value={formObj.values.role}
            >
              {authUser.role === 'admin' ||
              loginUser.role === 'admin' ? null : (
                <MenuItem value='admin'>admin</MenuItem>
              )}
             
              {authUser.role === 'admin' || loginUser.role === 'admin' ? (
                <MenuItem value='moderator'>moderator</MenuItem>
              ) : null}
              {authUser.role === 'admin' || loginUser.role === 'admin' ? (
                <MenuItem value='user'>user</MenuItem>
              ) : null}
            </Select>
          </FormControl>
        </Box>
        {formObj.errors.role && formObj.touched.role ? (
          <ErrorMsg>{formObj.errors.role}</ErrorMsg>
        ) : null}

        <ModalNextBtn
          sx={{
            m: 1,
            color: '#808080',
          }}
          variant='text'
          onClick={() =>
            setShowNextForm({
              firstForm: false,
              secondForm: true,
              thirdForm: false,
            })
          }
          disabled={
            formObj.values.name !== '' &&
            formObj.values.email !== '' &&
            formObj.errors.email !== 'Invalid email address'
              ? false
              : true
          }
        >
          NEXT
        </ModalNextBtn>
      </Box>
    );
  }
  // else if (showNextForm.secondForm) {

  //   return (
  //     <Box
  //       component='form'
  //       sx={{
  //         '& > :not(style)': { m: 1, width: '100' },
  //       }}
  //       noValidate
  //       autoComplete='off'
  //     >
  //       <ConfirmText>enter the six digits code sent to your email</ConfirmText>
  //       <TextField
  //         sx={{ width: '100%' }}
  //         id='confirm'
  //         label='confirm code'
  //         variant='outlined'
  //         onChange={formObj.handleChange}
  //         value={formObj.values.confirm}
  //         onBlur={formObj.handleBlur}
  //       />
  //       {formObj.errors.confirm && formObj.touched.confirm ? (
  //         <ErrorMsg>{formObj.errors.confirm}</ErrorMsg>
  //       ) : null}

  //       <ModalNextBtn
  //         sx={{
  //           m: 1,
  //           color: '#808080',
  //         }}
  //         variant='text'
  //         onClick={() =>
  //           setShowNextForm({
  //             firstForm: false,
  //             secondForm: false,
  //             thirdForm: true,
  //             fourthForm: false,
  //           })
  //         }
  //         disabled={
  //           formObj.values.confirm !== '' && formObj.values.confirm.length === 6
  //             ? false
  //             : true
  //         }
  //       >
  //         NEXT
  //       </ModalNextBtn>
  //     </Box>
  //   );
  // }
  else if (showNextForm.secondForm) {
    return (
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '100' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          sx={{ width: '100%' }}
          id='username'
          label='username'
          variant='outlined'
          onChange={formObj.handleChange}
          value={formObj.values.username}
          onBlur={formObj.handleBlur}
        />
        {formObj.errors.username && formObj.touched.username ? (
          <ErrorMsg>{formObj.errors.username}</ErrorMsg>
        ) : null}
        <TextField
          sx={{ width: '100%' }}
          id='contact'
          label='contacts'
          variant='outlined'
          onChange={formObj.handleChange}
          value={formObj.values.contact}
          onBlur={formObj.handleBlur}
        />
        {formObj.errors.contact && formObj.touched.contact ? (
          <ErrorMsg>{formObj.errors.contact}</ErrorMsg>
        ) : null}
        <div>
          <input
            id='file'
            onChange={(event) => {
              //@ts-ignore
              formObj.setFieldValue('file', event.currentTarget.files[0]);
            }}
            type='file'
          />
        </div>

        <ModalNextBtn
          sx={{
            m: 1,
            color: '#808080',
          }}
          variant='text'
          onClick={() =>
            setShowNextForm({
              firstForm: false,
              secondForm: false,
              thirdForm: true,
            })
          }
          disabled={
            formObj.values.username !== '' && formObj.values.contact
              ? false
              : true
          }
        >
          NEXT
        </ModalNextBtn>
      </Box>
    );
  } else if (showNextForm.thirdForm) {
    return (
      <form onSubmit={formObj.handleSubmit}>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '100' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            sx={{ width: '100%' }}
            id='password'
            label='password'
            variant='outlined'
            value={formObj.values.password}
            onChange={formObj.handleChange}
            onBlur={formObj.handleBlur}
          />
          {formObj.errors.password && formObj.touched.password ? (
            <ErrorMsg>{formObj.errors.password}</ErrorMsg>
          ) : null}
        </Box>

        {signup.loading ? (
          <ThreeCircles
            color='blue'
            height={55}
            width={55}
            ariaLabel='three-circles-rotating'
          />
        ) : (
          <ModalSubmitBtn
            variant='text'
            type='submit'
            disabled={formObj.values.password !== '' ? false : true}
          >
            Submit
          </ModalSubmitBtn>
        )}
        {signup.errorMsg ? <ErrorMsg>{signup.errorMsg}</ErrorMsg> : null}
      </form>
    );
  }

  return <></>;
}

// export {errorInterface}

