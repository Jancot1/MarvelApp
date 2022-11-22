import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const baseTheme = createTheme({
    palette: {
        primary: {
            main: '#c62828'
        },
        secondary: {
            main: '#212121'
        },
        error: {
            main: red.A200
        }
    }
})