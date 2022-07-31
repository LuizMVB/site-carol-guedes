import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
    palette: {
        primary: {
            contrastText: 'white',
            main: '#6251DA',
        },
        secondary: {
            main: '#F1FFD9',
        },
        error: {
            main: '#ef476f',
        },
        warning: { 
            main: '#fbad50'
        },
        success: {
            main: '#06d6a0'
        },
    },
});

export default mainTheme;