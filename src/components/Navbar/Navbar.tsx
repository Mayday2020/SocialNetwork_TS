import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from '@mui/icons-material/Mail';
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NumbersIcon from '@mui/icons-material/Numbers';

let iconFunction = (index: number) => {
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

type NavbarType = {}

const Navbar: React.FC<NavbarType> = (props) => {
    return (
        <Box sx={{ overflow: 'auto' }}>
                <List>
                    {['Profile', 'Messages', 'News', 'Music'].map((elementText, index) => (
                        <a href={'/' + elementText.toLowerCase()}>
                            <ListItem button key={elementText}>
                                <ListItemIcon>
                                    { iconFunction(index) }
                                </ListItemIcon>
                                <ListItemText primary={elementText} />
                            </ListItem>
                        </a>
                    ))}
                </List>
            <Divider />
            <List>
                {['Settings'].map((elementText) => (
                    <ListItem button key={elementText}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={elementText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Navbar