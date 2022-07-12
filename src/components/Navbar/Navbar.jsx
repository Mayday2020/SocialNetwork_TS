import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NumbersIcon from '@mui/icons-material/Numbers';

let func = (index) => {
    switch (index){
        case 0: {
            return <AccountBoxIcon />
        }
        case 1: {
            return <MailIcon />
        }
        case 2: {
            return <NewspaperIcon />
        }
        case 3: {
            return <LibraryMusicIcon />
        }
        default: {
            return <NumbersIcon />
        }
    }
}

export function Navbar() {
    return (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {['Profile', 'Messages', 'News', 'Music'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            { func(index) }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Settings'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}