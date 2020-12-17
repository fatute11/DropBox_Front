import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Layouts/ForgotPassword"
import ResetPassword from "./Layouts/ResetPassword"

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/forgot-password/" component={ForgotPassword}></Route>
                    <Route exact path="/reset-password/:token/" component={ResetPassword}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
