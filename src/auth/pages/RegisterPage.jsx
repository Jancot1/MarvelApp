import { useState } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../";
import { useForm } from '../../hooks';

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [ (value) => value.includes ('@'), 'El correo necesita un @'],
  password: [ (value) => value.length >= 6 , 'El password debe ser superior a 6 caracteres'],
  displayName: [ (value) => value.length > 1, 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid 
  } = useForm(formData, formValidations);

  return (
    <AuthLayout title="Register">
      <form className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label="Nombre completo" 
              type="text" 
              placeholder="Tu nombre"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!! displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="correo@google.coom"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!! emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!! passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
            {/* <Grid 
              item 
              xs={12}
              display={!!errorMessage ? '' : 'none' }
              >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid> */}
            <Grid item xs={12}>
              <Button
                // disabled={isCheckingAuthentication}
                type="submit"
                variant="contained" 
                fullWidth
                >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container diirecction='row' justifyContent='end'>
            <Typography sx= {{mr:1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
