import { NavBar } from '../components';
import { Box, Toolbar } from '@mui/material';


export const RootLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: 'column', height: '100vh' }}>
            <NavBar />
            <Box
                component='main'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    p: 2,
                    mt: { xs: 7, sm: 8 }
                }}
            >
                {children}
            </Box>
        </Box >
    )
}
