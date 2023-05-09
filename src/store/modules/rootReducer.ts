import { combineReducers } from '@reduxjs/toolkit';

import contatosSlice from './Contacts/contatosSlice';
import userSlice from './User/userSlice';

const rootReducer = combineReducers({
	contacts: contatosSlice,
	user: userSlice,
});

export default rootReducer;
