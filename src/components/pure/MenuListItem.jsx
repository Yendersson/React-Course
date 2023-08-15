import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {Home, Settings} from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home></Home>)
        case 'TASKS':
            return (<Home></Home>)
        case 'SETTINGS':
            return (<Settings></Settings>)
        default:
            return(<Home></Home>)
    }
}

const MenuListItem = ({list}) => {

    const history = useNavigate();

    const navigateTo = (path) => {
        history(path);
    }
    return(
        <List>
            {list.map(({text, path, icon}, index) => 
                (
                    <ListItem key={index} button onClick={() => navigateTo(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}>
                        </ListItemText>
                    </ListItem>
                )
            )}
        </List>
    )
}

export default MenuListItem;