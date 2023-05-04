import { Grid } from '@mui/material';
import React, { useMemo, useState } from 'react';

import ResponsiveAppBar from '../../components/AppBar';
import MyCard from '../../components/Card';
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

interface WelcomeProps {
	modo: 'login' | 'cadastro';
}

const Welcome: React.FC<WelcomeProps> = ({ modo }) => {
	const [listaContatos, setListaContatos] = useState<Contato[]>(dataMock);

	const formMemo = useMemo(() => {
		switch (modo) {
			case 'login':
				return <></>; // textfield login
			case 'cadastro':
				return <></>; // textfield cadastro
		}
	}, [modo]);
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

				{formMemo}
			</Grid>
		</>
	);
};

export default Welcome;
