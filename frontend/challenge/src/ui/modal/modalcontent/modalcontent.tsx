import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik"
//styles 
import modalStyle from "./modalcontent.module.css"
 export interface errorInterface {
  name?: string;
  email?: string;
  confirm?: string;
  username?: string;
  contact?: string;
  profilePics?: string;
  password?: string;
}
interface modalCont {
  stage: number;
  approveNext: (errorObj: errorInterface) => void;
}

interface validateForm {
  name: string;
  email: string;
  confirm: string;
  username: string;
  contact: string;
  profilePics: string;
  password: string;
}


export default function BasicTextFields(props: modalCont) {

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
     if (!values.confirm) {
       errors.confirm = 'required';
     }
     if (!values.username) {
       errors.username = 'required';
     }
     if (!values.contact) {
       errors.contact = 'required';
     }
     if (!values.profilePics) {
       errors.profilePics = 'required';
     }
     if (!values.password) {
       errors.password = 'required';
     }

    return errors;
  };


  const formObj = useFormik({
    initialValues: {
      name: '',
      email: '',
      confirm: '',
      username: '',
      contact: '',
      profilePics: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {},
  });
  if (props.stage === 1) {
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
          <div className={modalStyle.errorMsg}>{formObj.errors.name}</div>
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
          <div className={modalStyle.errorMsg}>{formObj.errors.email}</div>
        ) : null}
      </Box>
    );
  } else if (props.stage === 2) {
    props.approveNext(formObj.errors);
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
          id='confirm'
          label='confirm code'
          variant='outlined'
          onChange={formObj.handleChange}
          value={formObj.values.confirm}
          onBlur={formObj.handleBlur}
        />
        {formObj.errors.confirm && formObj.touched.confirm ? (
          <div className={modalStyle.errorMsg} >{formObj.errors.confirm}</div>
        ) : null}
      </Box>
    );
  } else if (props.stage === 3) {
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
          <div className={modalStyle.errorMsg}  >{formObj.errors.username}</div>
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
          <div className={modalStyle.errorMsg}>{formObj.errors.contact}</div>
        ) : null}
        <TextField
          id='profilePics'
          onChange={formObj.handleChange}
          value={formObj.values.profilePics}
          sx={{ width: '100%' }}
          type='file'
          onBlur={formObj.handleBlur}
        />
        {formObj.errors.profilePics && formObj.touched.profilePics ? (
          <div className={modalStyle.errorMsg}>
            {formObj.errors.profilePics}
          </div>
        ) : null}
      </Box>
    );
  } else if (props.stage === 4) {
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
          id='password'
          label='password'
          variant='outlined'
        />
        {formObj.errors.password && formObj.touched.password ? (
          <div className={modalStyle.errorMsg}>{formObj.errors.password}</div>
        ) : null}
      </Box>
    );
  }

  return <></>;
}

// export {errorInterface}

