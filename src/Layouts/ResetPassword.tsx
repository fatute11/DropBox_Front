import React from 'react';
import ResetPasswordForm from '../Components/Auth/ResetPassword'
import { Grid } from '@material-ui/core';

export default class ResetPassword extends React.PureComponent{
    render() {
        return (
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center">
                <ResetPasswordForm />
            </Grid> 
        )
    }
}