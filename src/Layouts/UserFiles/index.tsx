import React from 'react';
import FileList from '../../Components/FileList'
import UploadFiles from '../../Components/UploadFolder'
import FavorisFiles from '../../Components/FavorisFiles'
import { Grid } from '@material-ui/core';
import styles, { Styles } from './styles';
import { withStyles, WithStyles } from '@material-ui/core';
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
interface S { homepage: boolean, fileList: boolean, uploadFiles: boolean }

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default class UserFiles extends React.PureComponent<P & WithStyles<Styles>, S>{

    public state: Readonly<S> = {
        homepage: true,
        fileList: false,
        uploadFiles: false,
    };

    public static Display = withStyles(styles as any)(UserFiles) as React.ComponentType<P>

    render() {

        const { homepage, fileList, uploadFiles } = this.state;
        const { classes } = this.props;

        return (
            <Grid 
                container spacing={1}
                // direction="row"
                // justify="center"
                // alignItems="center"
                >
                    <Grid item xs={2}>
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
            </Grid>
                <Grid item xs={8}>
                    { homepage ?
                        <div>
                            <h2>Acceuil</h2>
                            <h3>Récents</h3>
                            <FileList.Display />
                            <h3>Favoris</h3>
                            <FavorisFiles.Display />
                        </div>
                    : uploadFiles ?
                        <UploadFiles.Display />
                    : fileList ?
                         <FileList.Display />
                    :
                        <p>Nothing to show</p>
                    }
                </Grid>
                <Grid item xs={2}>
                        {/* <FileMenu.Display /> */}
                </Grid>
            </Grid> 
        )
    }
}