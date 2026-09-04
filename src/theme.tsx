import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: 'rgba(244, 243, 236, 0.5)' },
        background: { default: 'rgba(0, 0, 0, 0.25)', paper: '#2e303a' },
        text: { primary: '#f3f4f6', secondary: '#ffffff' },
    },
    typography: {
        fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
        subtitle1: { fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiCard: {
            styleOverrides: {
                root: { border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(15,23,42,0.08)' },
            },
        },
    },
})