import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

class Header extends Component {
    render() {
        return (
            <header className="header text-center">
                <h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">Anthony's Blog</a></h1>

                <nav className="navbar navbar-expand-lg navbar-dark">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navigation" className="collapse navbar-collapse flex-column">
                        <div className="profile-section pt-3 pt-lg-0">
                            <img className="profile-image mb-3 rounded-circle mx-auto" src={window.location.origin + '/src/images/profile.png'}
                                 alt="image" />

                            <div className="bio mb-3">Hi, my name is Anthony Doe. Briefly introduce yourself here.
                                You can also provide a link to the about page.<br /><a href="about.html">Find out more
                                    about me</a></div>

                            <ul className="social-list list-inline py-3 mx-auto">
                                <li className="list-inline-item">
                                    <a href="#"><LinkedInIcon /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><GitHubIcon /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><TwitterIcon /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><InstagramIcon /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><TelegramIcon /></a>
                                </li>
                            </ul>

                            <hr />
                        </div>

                        <ul className="navbar-nav flex-column text-left">
                            <NavLink exact className="nav-item" activeClassName="active" to="/">
                                <a className="nav-link" ><i className="fas fa-home fa-fw mr-2"></i>Home</a>
                            </NavLink>
                            <NavLink className="nav-item" activeClassName="active" to="/BlogList">
                                <a className="nav-link"><i
                                    className="fas fa-bookmark fa-fw mr-2"></i>Blog List</a>
                            </NavLink>
                            <NavLink className="nav-item" activeClassName="active" to="/About">
                                <a className="nav-link"><i className="fas fa-user fa-fw mr-2"></i>About Me</a>
                            </NavLink>
                        </ul>

                        <div className="my-2 my-md-3">
                            <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get
                                in Touch</a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
