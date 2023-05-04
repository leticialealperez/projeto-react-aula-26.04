import { deepPurple, grey, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: pink[300],
			light: deepPurple[300],
		},
		secondary: {
			main: pink[300],
			light: pink[300],
		},
	},
});

const themeDark = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: deepPurple[500],
			dark: deepPurple[500],
		},
		secondary: {
			main: pink[500],
			dark: pink[500],
		},
		background: {
			paper: grey[800],
		},
	},
});

export { themeLight, themeDark };
