import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik"
import {useDispatch,useSelector} from "react-redux"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThreeCircles } from 'react-loader-spinner';

//actions
import {signUpUser} from "../../../redux/reducer"
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
   role?: string;
 }
export interface validateForm {
  name: string;
  email: string;
  confirm: string;
  username: string;
  contact: string;
  profilePics: string;
  password: string;
  role: string;
}
const role = ['admin', 'user','moderator'];









export default function BasicTextFields() {
  const [showNextForm,setShowNextForm] = useState({firstForm:true,secondForm:false,thirdForm:false,fourthForm:false})
  //@ts-ignore
  const signup = useSelector(state => state.signup)
  //@ts-ignore
  const dispatchSignup = useDispatch()

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
     else if (values.confirm.length > 6){
       errors.confirm =
         'Your confirmation code should be 6 digits without spaces.';

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
      if (!values.role) {
        errors.role = 'required';
      }


    return errors;
  };


  const formObj = useFormik({
    initialValues: {
      name: '',
      email: '',
      confirm:"",
      username: '',
      contact: '',
      profilePics: '',
      password: '',
      role:""
    },
    validate,
    onSubmit: (values) => {
      alert("")
      dispatchSignup(signUpUser(values));

      console.log("my values",values)
    },
  });
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
        {/* <div>
          <FormControl>
            <InputLabel id='demo-multiple-name-label'>role</InputLabel>
            <Select
              labelId='demo-multiple-name-label'
              id='role'
              name='role'
              onChange={formObj.handleChange}
              onBlur={formObj.handleBlur}
              value={formObj.values.role}
              input={<OutlinedInput label='role' />}
              MenuProps={MenuProps}
              sx={{
                '& legend': {
                  border: 0,
                  outline: 0,
                  display: 'none',
                },
              }}
            >
              {role.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {formObj.errors.role && formObj.touched.role ? (
            <div className={modalStyle.errorMsg}>{formObj.errors.role}</div>
          ) : null}
        </div> */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel
              id='demo-simple-select-label'
              className={modalStyle.modalLabel}
            >
              role
            </InputLabel>
            <Select
              labelId='role'
              name='role'
              onChange={formObj.handleChange}
              onBlur={formObj.handleBlur}
              value={formObj.values.role}
            >
              <MenuItem value='admin'>admin</MenuItem>
              <MenuItem value='user'>user</MenuItem>
              <MenuItem value='moderator'>moderator</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {formObj.errors.role && formObj.touched.role ? (
          <div className={modalStyle.errorMsg}>{formObj.errors.role}</div>
        ) : null}

        <Button
          className={modalStyle.modalNextBtn}
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
              fourthForm: false,
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
        </Button>
      </Box>
    );
  } else if (showNextForm.secondForm) {
    
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
          <div className={modalStyle.errorMsg}>{formObj.errors.confirm}</div>
        ) : null}

        <Button
          className={modalStyle.modalNextBtn}
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
              fourthForm: false,
            })
          }
          disabled={
            formObj.values.confirm !== '' && formObj.values.confirm.length === 6
              ? false
              : true
          }
        >
          NEXT
        </Button>
      </Box>
    );
  } else if (showNextForm.thirdForm) {
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
          <div className={modalStyle.errorMsg}>{formObj.errors.username}</div>
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

        <Button
          className={modalStyle.modalNextBtn}
          sx={{
            m: 1,
            color: '#808080',
          }}
          variant='text'
          onClick={() =>
            setShowNextForm({
              firstForm: false,
              secondForm: false,
              thirdForm: false,
              fourthForm: true,
            })
          }
          disabled={
            formObj.values.username !== '' &&
            formObj.values.profilePics !== '' &&
            formObj.values.contact
              ? false
              : true
          }
        >
          NEXT
        </Button>
      </Box>
    );
  } else if (showNextForm.fourthForm) {
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
            <div className={modalStyle.errorMsg}>{formObj.errors.password}</div>
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
          <Button
            className={modalStyle.modalSubmitBtn}
            variant='text'
            type='submit'
            disabled={formObj.values.password !== '' ? false : true}
          >
            Submit
          </Button>
        )}
        {signup.errorMsg ? (
          <div className={modalStyle.errorMsg}>{signup.errorMsg}</div>
        ) : null}
      </form>
    );
  }

  return <></>;
}

// export {errorInterface}

