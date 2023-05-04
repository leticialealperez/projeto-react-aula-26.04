/* eslint-disable no-case-declarations */
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Contato, Contexto } from '../../types';

interface ModalProps {
	contexto: Contexto;
	aberto: boolean;
	fecharModal: () => void;
	funcaoModificadora: React.Dispatch<React.SetStateAction<Contato[]>>;
	contato?: Contato;
}

const Modal: React.FC<ModalProps> = ({
	aberto,
	contexto,
	fecharModal,
	funcaoModificadora,
	contato,
}) => {
	const [nome, setNome] = useState('');
	const [telefone, setTelefone] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		if (contexto === 'update' && contato) {
			setNome(contato.nome);
			setEmail(contato.email);
			setTelefone(contato.telefone);
		}
	}, [contexto, contato]);

	const handleSave = () => {
		switch (contexto) {
			case 'create':
				const novoContato: Contato = {
					nome,
					telefone,
					email,
					favorito: false,
					criadoEm: new Date().toLocaleDateString('pt-Br', {
						dateStyle: 'long',
					}),
				};
				funcaoModificadora((prev) => [...prev, novoContato]);
				break;

			case 'delete':
				funcaoModificadora((prev) => {
					if (contato) {
						return prev.filter(
							(item) => item.email !== contato.email,
						);
					}

					return prev;
				});

				break;

			case 'update':
				// atualiza um determinado item da lista
				funcaoModificadora((prev) => {
					return prev.map((item) => {
						if (contato && contato.email === item.email) {
							return {
								...item,
								nome,
								telefone,
								email,
							};
						}

						return item;
					});
				});
				break;
			default:
		}

		setNome('');
		setTelefone('');
		setEmail('');
		fecharModal();
	};

	return (
		<Dialog
			open={aberto}
			onClose={fecharModal}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{contexto === 'create' && 'Criar Contato'}
				{contexto === 'delete' && 'Deletar Contato'}
				{contexto === 'update' && 'Atualizar Contato'}
			</DialogTitle>
			<DialogContent>
				{contexto === 'delete' && (
					<DialogContentText id="alert-dialog-description">
						A exclusão é definitiva. Tem certeza que seja excluir o
						contato?
					</DialogContentText>
				)}
				{contexto !== 'delete' && (
					<Grid container spacing={2} marginTop={2}>
						<Grid item xs={12}>
							<TextField
								value={nome}
								onChange={(ev) => setNome(ev.target.value)}
								id="nome"
								name="nome"
								label="Nome Contato"
								fullWidth
								color="secondary"
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={telefone}
								onChange={(ev) => setTelefone(ev.target.value)}
								id="telefone"
								name="telefone"
								label="Telefone"
								fullWidth
								color="secondary"
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={email}
								onChange={(ev) => setEmail(ev.target.value)}
								id="email"
								name="email"
								label="E-mail"
								fullWidth
								color="secondary"
								required
							/>
						</Grid>
					</Grid>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={fecharModal} color="error" variant="outlined">
					Cancelar
				</Button>
				<Button
					autoFocus
					color="success"
					variant="contained"
					onClick={handleSave}
				>
					Salvar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Modal;
