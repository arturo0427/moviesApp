import { NavBar } from '../components';
import { Box } from '@mui/material';

const drawerWidth = 280;

export const RootLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex", height: '100vh' }}>
            <NavBar />
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}
