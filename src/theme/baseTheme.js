import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const baseTheme = createTheme({
    palette: {
        primary: {
            main: '#c0392b'
        },
        secondary: {
            main: '#ecf0f1'
        },
        error: {
            main: red.A200
        }
    }
})