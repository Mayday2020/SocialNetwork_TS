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
import ContactsIcon from '@mui/icons-material/Contacts';
import {NavLink} from "react-router-dom";
import s from './navbar.module.css';

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
        case 4: {
            return <ContactsIcon />
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
                    {['Profile', 'Messages', 'News', 'Music', 'Users'].map((elementText, index) => (
                        <NavLink to={elementText.toLowerCase()}
                              className={s.link}
                              key={elementText}
                              style={(params: {isActive: boolean})=>{
                                  return {color: params.isActive ? 'blue' : 'grey'}
                              }}
                        >
                            <ListItem button key={elementText}>
                                <ListItemIcon>
                                    { iconFunction(index) }
                                </ListItemIcon>
                                <ListItemText primary={elementText} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            <Divider />
            <List>
                {['Settings'].map((elementText) => (
                    <NavLink to={elementText.toLowerCase()}
                             className={s.link}
                             style={(params: {isActive: boolean})=>{
                                 return {color: params.isActive ? 'red' : 'grey'}
                             }}
                    >
                        <ListItem button key={elementText}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={elementText} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Box>
    )
}

export default Navbar