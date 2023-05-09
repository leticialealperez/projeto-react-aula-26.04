import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './modules/rootReducer';

const persistedReducer = persistReducer(
	{
		key: 'root',
		storage: localStorage,
	},
	rootReducer,
);

export const minhaStore = configureStore({
	reducer: persistedReducer,
});

export const meuPersistor = persistStore(minhaStore);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof minhaStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof minhaStore.dispatch;
