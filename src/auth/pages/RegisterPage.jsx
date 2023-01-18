import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store';

const formData = {
	email: '',
	password: '',
	displayName: '',
};

const formValidations = {
	email: [ (value) => value.includes ('@'), 'El correo necesita un @'],
	password: [ (value) => value.length >= 8 , 'El password debe ser superior a 8 caracteres'],
	displayName: [ (value) => value.length > 1, 'El nombre es obligatorio'],
};


export const RegisterPage = () => {

	const [formSubmitted, setFormSubmitted] = useState(false);

	const {status, errorMessage} = useSelector(state => state.auth);
	const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

	const dispatch = useDispatch();

	const {
		formState, displayName, email, password, onInputChange,
		isFormValid, displayNameValid, emailValid, passwordValid 
	} = useForm(formData, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();
		setFormSubmitted(true);

		if (!isFormValid) return;

		dispatch(startCreatingUserWithEmailPassword(formState));
	};

	return (
		<AuthLayout title="Register">
			<form className='animate__animated animate__fadeIn animate__faster' onSubmit={onSubmit}>
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
							placeholder="correo@google.com"
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
						<Grid 
							item 
							xs={12}
							display={errorMessage ? '' : 'none' }
						>
							<Alert severity='error'>El correo ingresado no es valido</Alert>
						</Grid>
						<Grid item xs={12}>
							<Button
								disabled={isCheckingAuthentication}
								type="submit"
								variant="contained" 
								fullWidth
							>
                Create Account
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
	);
};
