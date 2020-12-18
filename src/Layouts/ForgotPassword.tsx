import React from 'react';
import PasswordForm from '../Components/Auth/ForgotPassword'
import { Grid } from '@material-ui/core';

export default class ResetPassword extends React.PureComponent{
    render() {
        return (
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center">
                <PasswordForm />
            </Grid> 
        )
    }
}