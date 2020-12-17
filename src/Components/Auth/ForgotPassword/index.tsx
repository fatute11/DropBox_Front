import React from 'react';
import API from '../../../Api/Api'
import { Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';

interface S{ email: string }

export default class ForgotPassword extends React.PureComponent<{}, S>{

    state: Readonly<S> = { email: "" };

    handleSubmit = () => {        
        API.post('/forgot-password', this.state).then(res => {
            console.log(res);
        })
    }

    handleEmailChange= (e) => {
        const userEmail = e.target.value;
        this.setState({ email: userEmail})
    }

    render() {
        const { email } = this.state;

        return(
            <Grid>
                <form>
                    <FormControl>
                        <InputLabel htmlFor="forgot-password">Email address</InputLabel>
                        <Input id="forgot-password" aria-describedby="forgot-password" value={email} onChange={e => this.handleEmailChange(e)}/>
                        <FormHelperText id="forgot-password">Enter your Email to reset your password.</FormHelperText>
                    </FormControl>
                    <Button variant="contained" color="primary" size="medium" onClick={e => this.handleSubmit()}>Reset Password</Button>
                </form>
            </Grid>
        )
    }
}