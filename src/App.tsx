import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Layouts/ForgotPassword"
import ResetPassword from "./Layouts/ResetPassword"
import FileList from "./Layouts/UserFiles/index"
import UploadFiles from "./Components/UploadFolder"

function App() {
    return (
        <div>
            <Router>
                <Switch>
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
