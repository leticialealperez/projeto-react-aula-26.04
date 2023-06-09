import { Delete, Edit, Favorite, FavoriteBorder } from '@mui/icons-material';
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { atualizar } from '../../store/modules/Contacts/contatosSlice';
import { Contato, Contexto } from '../../types';
import Modal from '../Modal';

interface MyCardProps {
	contato: Contato;
}

const MyCard: React.FC<MyCardProps> = ({ contato }) => {
	const [open, setOpen] = useState(false);
	const [contexto, setContexto] = useState<Contexto>('create');

	const dispatch = useAppDispatch();

	const handleFavorite = () => {
		dispatch(
			atualizar({
				id: contato.email,
				changes: { favorito: !contato.favorito },
			}),
		);
	};

	const handleClick = (context: Contexto) => {
		setContexto(context);
		setOpen(true);
	};

	return (
		<>
			<Card>
				<CardHeader title={contato.nome} subheader={contato.criadoEm} />
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Email - {contato.email}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Telefone - {contato.telefone}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton
						aria-label="toggle favorite"
						onClick={handleFavorite}
					>
						{contato.favorito ? (
							<Favorite color="error" />
						) : (
							<FavoriteBorder />
						)}
					</IconButton>
					<IconButton
						aria-label="delete data"
						onClick={() => handleClick('delete')}
					>
						<Delete />
					</IconButton>
					<IconButton
						aria-label="update data"
						onClick={() => handleClick('update')}
					>
						<Edit />
					</IconButton>
				</CardActions>
			</Card>

			<Modal
				aberto={open}
				contexto={contexto}
				fecharModal={() => setOpen(false)}
				contato={contato}
			/>
		</>
	);
};

export default MyCard;
