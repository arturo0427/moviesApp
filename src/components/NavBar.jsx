import { AppBar, Box, Button, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from "@mui/icons-material";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navegationLinks = [{ title: 'Home', path: '/' }, { title: 'Search', path: '/search' }];

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
                <Box sx={{ width: 250 }}>
                    <nav>
                        <List>
                            {navegationLinks.map((item) => (
                                <ListItem
                                    disablePadding
                                    key={item.title}
                                >
                                    <ListItemButton
                                        component={NavLink}
                                        to={item.path}
                                        onClick={() => setOpen(false)}
                                    >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText>{item.title}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                </Box>

            </Drawer>
        </>
    )
}
