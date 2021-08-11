import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function SideBar() {
    const classes = useStyles();



    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <h1>Operation</h1>
            }
            className={classes.root}
        >
            <ListItem button>
                
                <ListItemText primary="Blance Account" />
            </ListItem>
            <ListItem button>
                
                <ListItemText primary="Wrist Band" />
            </ListItem>
            <ListItem button>
                
                <ListItemText primary="Night Club" />
            </ListItem>
        </List>
    );
}
