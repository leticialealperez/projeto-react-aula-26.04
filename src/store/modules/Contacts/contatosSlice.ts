//  quando for uma lista de dados, usamos o recurso ADAPTER
// ADAPTER ELE JÁ CONTEM AS LÓGICAS DE BUSC DE UMA LISTA DE DADOS
// 1 - QUE NUNCA VAI HAVER DOIS REGISTROS COM O MESMO ID
// 2 - QUE A ATUALIZAÇÃO DE UM REGISTRO DEVE SER COM BASE NO ID INFORMADO
// 3 - QUE EXCLUIR UM REGISTRO DEVE SER COM BASE NO ID INFORMADO
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../..';
import { Contato } from '../../../types';

const adapterContato = createEntityAdapter<Contato>({
	selectId: (item) => item.email,
});

export const {
	selectAll: selectAllContacts,
	selectById: selectContactByEmail,
} = adapterContato.getSelectors((state: RootState) => state.contacts);

export const contatosSlice = createSlice({
	name: 'contatos',
	initialState: adapterContato.getInitialState(),
	reducers: {
		adicionar: adapterContato.addOne,
		atualizar: adapterContato.updateOne,
		deletar: adapterContato.removeOne,
	},
});

export const { adicionar, atualizar, deletar } = contatosSlice.actions;

export default contatosSlice.reducer;

/*
    ESTRUTURA DE UM ADAPTER
    
{
    ids: ['maria@teste', 'joao@teste.com'],
    entities: {
        maria@teste: { },
        joao@teste.com: { },
    }
}

*/
