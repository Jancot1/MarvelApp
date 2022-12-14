import { Link, Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Google } from '@mui/icons-material';
import { AuthLayout } from "../";
import { useForm } from "../../hooks";
import { checkingAuth } from '../../store/slices/thunks';

const formData = {
  email: '',
  password: ''
}

// const onGoogleSignIn = () => {
//   dispatch(startGoogleSignIn());
// }

export const LoginPage = () => {

  const {email, password, onInputChange} = useForm(formData);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuth());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField
              label="Correo" 
              type="email" 
              placeholder="correo@google.com"
              fullWidth
              name= "email"
              value={email}
              onChange= {onInputChange}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt:2 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña"
              fullWidth
              name= "password"
              value={password}
              onChange= {onInputChange}
            />
          </Grid>

          {/* <Grid 
          container
          display={!!errorMessage ? '' : 'none' }
          sx={{mt:1}}
          >
            <Grid
              item
              xs={12}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid> */}

          <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                // disabled={isAuthenticating}
                type="submit" 
                variant="contained"
                fullWidth
                >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                // disabled={isAuthenticating}
                variant="contained"
                fullWidth
                // onClick={onGoogleSignIn}
                >
                <Google />
                  <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container diirecction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
