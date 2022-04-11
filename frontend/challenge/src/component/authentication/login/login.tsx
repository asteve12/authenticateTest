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
import {Link} from "react-router-dom"
//styles
import style from "./login.module.css"

export default function BasicTextFields() {
     const [values, setValues] = React.useState({showPassword: false});

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
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete='off'
    >
      <br></br>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        sx={{ width: '100%' }}
      />
      <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          //value={values.password}
          //onChange={handleChange('password')}
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

      <section className={style.loginBottom}>
        <div>
          <a href="#">Forgot password?</a>
        </div>
        <div>
          <Button variant='text'>Login</Button>
        </div>
      </section>
    </Box>
  );
}
