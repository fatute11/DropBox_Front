import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

import AuthService from "../../services/auth.service";

interface S {
    showModeratorBoard: boolean,
    showAdminBoard: boolean,
    currentUser: any,
}

interface P {}

export default class HeaderBar extends React.PureComponent<P, S> {

    public state: Readonly<S> = { 
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined, 
    }

    constructor(props: any) {
        super(props);
        this.logOut = this.logOut.bind(this);
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
        </div>
        );
    }
}