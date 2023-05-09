import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contacts from '../../pages/Contacts';
import Login from '../../pages/Login';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
