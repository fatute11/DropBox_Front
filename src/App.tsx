import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Layouts/ForgotPassword"
import ResetPassword from "./Layouts/ResetPassword"
import FileList from "./Layouts/UserFiles/index"
import UploadFiles from "./Components/UploadFolder"

import HeaderBar from "./Components/HeaderBar"

import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Home from "./Components/home.component";
import Profile from "./Components/profile.component";
import BoardUser from "./Components/board-user.component";
// import BoardModerator from "./Components/board-moderator.component";
// import BoardAdmin from "./Components/board-admin.omponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderBar />
                <Switch>
                    <Route exact path='[/, /home]' component={Home} isAuthed={true}/>
                    <Route exact path='/login' component={Login} isAuthed={true}/>
                    <Route exact path='/register' component={Register} isAuthed={true} />
                    <Route exact path='/profile' component={Profile} isAuthed={true} />
                    <Route path='/user' component={BoardUser} isAuthed={true} />
                    {/* <Route path='/mod' component={BoardModerator} isAuthed={true} />
                    <Route path='/admin' component={BoardAdmin} isAuthed={true} /> */}
                    <Route exact path="/forgot-password/" component={ForgotPassword}></Route>
                    <Route exact path="/reset-password/:token/" component={ResetPassword}></Route>
                    <Route exact path="/file-list" component={FileList}></Route>
                    <Route exact path="/upload-file" component={UploadFiles}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
