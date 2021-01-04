import React from 'react';
import styles, { Styles } from './styles';
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import DescriptionIcon from '@material-ui/icons/Description';
import DeleteIcon from '@material-ui/icons/Delete';

import logo from '../../dropbox-logo.png'

interface P {}
interface S { allFiles: boolean }

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default class FileMenu extends React.PureComponent<P & WithStyles<Styles>, S>{

    public state: Readonly<S> = {allFiles: false};
    public static Display = withStyles(styles as any)(FileMenu) as React.ComponentType<P>

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.menuRoot}>
               <List component="nav" aria-label="main mailbox folders">
                   <img src={logo} alt="logo" className={classes.img}/>
                    <ListItemLink href="#simple-list">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Acceuil" />
                    </ListItemLink> 
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItemLink href="#simple-list">
                        <ListItemIcon>
                            <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tous les fichiers"/>
                    </ListItemLink>
                    <ListItemLink href="#simple-list">
                        <ListItemIcon>
                            <FolderSharedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Partagés" />
                    </ListItemLink>
                </List>
                <Divider />
                <List component="nav" aria-label="third mailbox folders">
                    <ListItemLink href="#simple-list">
                        <ListItemIcon>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fichiers supprimés" />
                    </ListItemLink>
                </List>
            </div>
        )
    }
}