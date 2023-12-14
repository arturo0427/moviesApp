import { ThemeProvider } from '@emotion/react';
import { purpleTheme } from './';
import { CssBaseline } from '@mui/material';

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
