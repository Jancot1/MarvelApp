import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const baseTheme = createTheme({
    palette: {
        primary: {
            main: '#212121'
        },
        secondary: {
            main: '#c62828'
        },
        error: {
            main: red.A200
        }
    }
})