import { Add } from '@mui/icons-material';
import { Fab, Grid } from '@mui/material';
import React, { useState } from 'react';

import ResponsiveAppBar from '../../components/AppBar';
import MyCard from '../../components/Card';
import Modal from '../../components/Modal';
import { Contato } from '../../types';

const dataMock: Contato[] = [
	{
		nome: 'João',
		email: 'joao@teste.com',
		favorito: false,
		telefone: '51999999',
		criadoEm: new Date().toLocaleDateString('pt-Br', { dateStyle: 'long' }),
	},
	{
		nome: 'Maria',
		email: 'maria@teste.com',
		favorito: true,
		telefone: '5199999977',
		criadoEm: new Date().toLocaleDateString('pt-Br', { dateStyle: 'long' }),
	},
	{
		nome: 'Joana',
		email: 'joana@teste.com',
		favorito: true,
		telefone: '51999999666',
		criadoEm: new Date().toLocaleDateString('pt-Br', { dateStyle: 'long' }),
	},
];

const Welcome: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [listaContatos, setListaContatos] = useState<Contato[]>(dataMock);

	return (
		<>
			<ResponsiveAppBar />
			<Grid container spacing={2} marginY={2}>
				{listaContatos.map((item) => (
					<Grid key={item.email} item xs={12} sm={6} md={4}>
						<MyCard
							contato={item}
							funcaoModificadoraDoEstadoLocal={setListaContatos}
						/>
					</Grid>
				))}
			</Grid>

			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: 'fixed', right: '30px', bottom: '30px' }}
				onClick={() => setOpen(true)}
			>
				<Add />
			</Fab>

			<Modal
				aberto={open}
				contexto="create"
				fecharModal={() => setOpen(false)}
				funcaoModificadora={setListaContatos}
			/>
		</>
	);
};

export default Welcome;
