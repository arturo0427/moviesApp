import { NavLink } from 'react-router-dom';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

export const NavListDrawer = ({ navegationLinks, setOpen }) => {
    return (
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
    )
}
