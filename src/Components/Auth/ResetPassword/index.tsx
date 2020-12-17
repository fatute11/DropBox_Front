import React from 'react';
import API from '../../../Api/Api'
import { Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';

interface S{ password: string, passwordAgain: string  }

export default class ResetPassword extends React.PureComponent<{}, S>{

    state: Readonly<S> = { password: "", passwordAgain: "" };

    componentDidMount = async () => {
        const arrPath = window.location.pathname.split("/")
        const token = arrPath[arrPath.length - 1]

        const data = await API.get('/api/user/password-token', {params: {passwordToken: token}}).then(response => {return response.data})
        console.log(data)
    }
    
    handleSubmit = () => { 
        console.log(this.state)       
        // API.post('/reset-password', this.state).then(res => {
        //     console.log(res);
        // })
    }

    handlePasswordChange= (e) => {
        console.log(e.target)
        this.setState({ [e.target.name]: e.target.value } as S)
    }

    render() {
        const { password, passwordAgain } = this.state;

        return(
            <Grid>
                <form>
                    <FormControl>
                        <InputLabel htmlFor="new-password">mot de passe</InputLabel>
                        <Input id="new-password" aria-describedby="new-password" name="password" value={password} onChange={e => this.handlePasswordChange(e)}/>
                        <FormHelperText id="new-password">Entrez votre nouveau mot de passe</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="new-password-again">Répetez le mot de passe</InputLabel>
                        <Input id="new-password-again" aria-describedby="new-password-again" name="passwordAgain" value={passwordAgain} onChange={e => this.handlePasswordChange(e)}/>
                        <FormHelperText id="new-password-again">Répetez votre nouveau mot de passe</FormHelperText>
                    </FormControl>
                    <Button variant="contained" color="primary" size="medium" onClick={e => this.handleSubmit()}>Changer le mot  de passe</Button>
                </form>
            </Grid>
        )
    }
}