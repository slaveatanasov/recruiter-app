import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions'; 

export class Nav extends React.Component{
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const authLinks = (
            <nav>
                <ul>
                    <li><NavLink className="navlink" activeClassName="active" to="/search">Search</NavLink></li>
                    <li><NavLink className="navlink" activeClassName="active" to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink onClick={this.onLogoutClick.bind(this)} className="navlink" activeClassName="active" to="/">Log out</NavLink></li>
                </ul>
            </nav>
        );
        const guestLinks = (
            <nav>
                <ul>
                    <li><NavLink className="navlink" activeClassName="active" to="/login">Log in</NavLink></li>
                    <li><NavLink className="navlink" activeClassName="active" to="/register-user">Sign up</NavLink></li>
                </ul>
            </nav>
        );

        return (
            <div className="container-nav">
                <header className="header-nav">
                    <div id="app-name">
                    <Link className="navlink" to="/"><h1>Recruiter App</h1></Link>
                    </div>
                    {isAuthenticated ? authLinks : guestLinks}
                </header>
            </div>  
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

Nav = connect(mapStateToProps, { logoutUser })(Nav);