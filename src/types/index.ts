export interface Contato {
	nome: string;
	email: string;
	telefone: string;
	favorito: boolean;
	criadoEm: string;
}

export type Contexto = 'update' | 'delete' | 'create';
