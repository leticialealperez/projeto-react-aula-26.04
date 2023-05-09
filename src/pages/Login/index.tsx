import { ArrowForwardIos } from '@mui/icons-material';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUser } from '../../store/modules/User/userSlice';

const Login: React.FC = () => {
	// PRECISO LER OS DADOS DO ESTADO GLOBAL? useAppSelector
	const user = useAppSelector((globalState) => globalState.user);

	// PRECISO MODIFICAR OS DADOS DO ESTADO GLOBAL? useAppDispatch
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (user.isLogged) {
			navigate('/contacts');
		}
	}, [user, navigate]);

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		// alert(ev.currentTarget.email.value);
		if (!ev.currentTarget.email.value.includes('.com')) {
			alert('Digite um e-mail válido!');
			return;
		}

		dispatch(setUser({ email: ev.currentTarget.email.value }));

		setTimeout(() => {
			navigate('/contacts');
		}, 2000);
	};
	return (
		<Container
			component="main"
			sx={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box component="section">
				<Typography component="h1" variant="h3">
					Bem-vindo. Faça login!
				</Typography>
				<Box component="form" marginY={4} onSubmit={handleSubmit}>
					<TextField
						id="email"
						name="email"
						type="email"
						required
						sx={{ display: 'block' }}
						fullWidth
						placeholder="E-mail"
					/>
					<Button
						sx={{ marginTop: 2, height: '56px' }}
						variant="contained"
						size="large"
						type="submit"
						startIcon={<ArrowForwardIos />}
						fullWidth
					>
						Acessar
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default Login;
