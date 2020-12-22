import React, { Component } from "react";
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./Components/login.component";
import Register from "./Components/register.component";
import Home from "./Components/home.component";
import Profile from "./Components/profile.component";
import BoardUser from "./Components/board-user.component";
import BoardModerator from "./Components/board-moderator.component";
import BoardAdmin from "./Components/board-admin.Component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            DROPBOX
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Acceuil
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Se connecter
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  S'enregistrer
                </Link>
              </li>
            </div>
          )}
        </nav>
        <BrowserRouter>
        <div className="container mt-3">
          <Switch>
            <Route exact path='[/, /home]' component={Home} isAuthed={true}/>
            <Route exact path='/login' component={Login} isAuthed={true}/>
            <Route exact path='/register' component={Register} isAuthed={true} />
            <Route exact path='/profile' component={Profile} isAuthed={true} />
            <Route path='/user' component={BoardUser} isAuthed={true} />
            <Route path='/mod' component={BoardModerator} isAuthed={true} />
            <Route path='/admin' component={BoardAdmin} isAuthed={true} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;