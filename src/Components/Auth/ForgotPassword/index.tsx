import React from 'react';
import API from '../../../Api/Api'
import { Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';

interface S{ email: string, isSend: boolean, notFound: boolean }

export default class ForgotPassword extends React.PureComponent<{}, S>{

    state: Readonly<S> = { email: "", isSend: false, notFound: false };

    handleSubmit = async () => {        
        const data = await API.post('/forgot-password', this.state).then(res => {return res.data})
        console.log(data)
        if(data.error) {
            this.setState({notFound: true})
        }else{
            this.setState({isSend: true})
        }
    }

    handleEmailChange= (e:any) => {
        const userEmail = e.target.value;
        this.setState({ email: userEmail})
    }

    render() {
        const { email, isSend, notFound } = this.state;

        if(isSend) {
            return(
                <Grid>
                    <p>un email viens d'être envoyé a {email}</p>
                </Grid>
            )
        }else{
            return(
                <Grid>
                    <form>
                        <FormControl>
                            <InputLabel htmlFor="forgot-password">Email address</InputLabel>
                            <Input id="forgot-password" aria-describedby="forgot-password" value={email} onChange={e => this.handleEmailChange(e)}/>
                            <FormHelperText id="forgot-password">Enter your Email to reset your password.</FormHelperText>
                            {notFound &&
                                <p>Adresse mail non valide</p>
                            }
                        </FormControl>
                        <Button variant="contained" color="primary" size="medium" onClick={e => this.handleSubmit()}>Reset Password</Button>
                    </form>
                </Grid>
            )
        }
    }
}