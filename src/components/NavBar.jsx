import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { MenuOutlined } from "@mui/icons-material";
import { NavListDrawer } from './';
import {
    AppBar,
    Box,
    Button,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
} from '@mui/material';


const navegationLinks = [
    { title: 'Home', path: '/', icon: `AccessAlarm` },
    { title: 'Search', path: '/search', icon: 'AccessAlarm' },
    { title: 'Add Movie', path: '/add', icon: 'AccessAlarm' },
];

export const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar
                position='fixed'
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => setOpen(true)}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuOutlined />
                    </IconButton>

                    <Grid
                        container
                        alignItems="center"
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Movies App
                        </Typography>

                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            {navegationLinks.map((item) => (
                                <Button
                                    color="inherit"
                                    key={item.title}
                                    component={NavLink}
                                    to={item.path}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor='left'
                onClose={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavListDrawer navegationLinks={navegationLinks} setOpen={setOpen} />

            </Drawer>

        </>
    )
}
