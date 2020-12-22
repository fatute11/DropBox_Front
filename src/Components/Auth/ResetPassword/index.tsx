import React from 'react';
import API from '../../../Api/Api'
import { Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';

interface S{ 
    password: string, 
    passwordAgain: string, 
    isTokenValid: boolean, 
    userId: string  
}

export default class ResetPassword extends React.PureComponent<{}, S>{

    state: Readonly<S> = { 
        password: "", 
        passwordAgain: "", 
        isTokenValid: false, 
        userId: "" 
    };

    componentDidMount = async () => {
        const arrPath = window.location.pathname.split("/")
        const token = arrPath[arrPath.length - 1]

        const data = await API
        .get('/api/user/password-token', {params: {passwordToken: token}})
        .then(response => {return response.data})
        if(!data.error) {
            this.setState({ isTokenValid:true, userId: data._id })
        }
    }
    
    handleSubmit = () => { 

        const response = this.passwordValidation(this.state.password, this.state.passwordAgain)   
        console.log(response)
        if (response.error) {

        } 
        API.post('/reset-password', {password: response, id: this.state.userId}).then(res => {console.log(res);})
    }

    handlePasswordChange = (e) => {
        console.log(e.target)
        this.setState({ [e.target.name]: e.target.value } as S)
    }

    passwordValidation = (password, passwordAgain) => {
        if(password != passwordAgain) {
            return {
                error:'not same password', 
                message: 'Les mots de passe ne sont pas identiques !'
            }
        }
        return password
    }

    render() {
        const { password, passwordAgain, isTokenValid } = this.state;

        if (isTokenValid) {
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
        } else {
            return(
                <Grid>
                    <h1>Token invalide</h1>
                </Grid>
            )
        }
    }
}