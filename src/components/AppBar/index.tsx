import { Adb, Menu as MenuIcon } from '@mui/icons-material';
import {
	AppBar,
	Avatar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = [
	{ label: 'Products', url: '/products' },
	{ label: 'Pricing', url: '/pricing' },
	{ label: 'Blog', url: '/blog' },
];
const settings = [
	{ label: 'Profile', url: '/profile' },
	{ label: 'Account', url: '/account' },
	{ label: 'Dashboard', url: '/dashboard' },
	{ label: 'Logout', url: '/singin' },
];

const ResponsiveAppBar: React.FC = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const navigate = useNavigate();

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" color="primary">
			<Container maxWidth="xl" component="header">
				<Toolbar disableGutters>
					{/* DAQUI PRA BAIXO É O LAYOUT NAS TELAS XS ATÉ SM */}
					<Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6" // gera o estilo
						component="a" // e gera o componente na DOM
						noWrap
						href="#"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.label}
									onClick={() => navigate(page.url)}
								>
									<Typography textAlign="center">
										{page.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					{/* DAQUI PRA BAIXO É O LAYOUT NAS TELAS MD PRA CIMA */}
					<Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page) => (
							<MenuItem
								key={page.label}
								onClick={() => navigate(page.url)}
							>
								<Typography textAlign="center">
									{page.label}
								</Typography>
							</MenuItem>
						))}
					</Box>

					{/* DAQUI PRA BAIXO É O LAYOUT do menu do avatar */}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Abrir Configurações">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									alt={'joao@teste.com'.toUpperCase()} // usuario Logado - [J]oao@teste.com
									src="/assets/images/img.jpg"
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem
									key={setting.label}
									onClick={() => {
										handleCloseUserMenu();
										navigate(setting.url);
									}}
								>
									<Typography textAlign="center">
										{setting.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default ResponsiveAppBar;
