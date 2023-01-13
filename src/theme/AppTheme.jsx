import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { baseTheme } from './';

export const AppTheme = ({children}) => {
	return (
		<ThemeProvider theme={baseTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
