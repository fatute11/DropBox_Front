import React from 'react';
import FileList from '../../Components/FileList'
import { Grid } from '@material-ui/core';

export default class ResetPassword extends React.PureComponent{
    render() {
        return (
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center">
                <FileList.Display />
            </Grid> 
        )
    }
}