/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import API from "../utils/API";
import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
const moment = require("moment");

class Login extends Component {
    state = {

    }

    render() {
        return (
            <Container>
                <div className="container">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1><span className="fa fa-sign-in"></span> Login</h1>

                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="user" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="pass" />
                            </div>
                            <div className="form-group">
                                <label>Remember Me</label>
                                <input type="checkbox" className="form-control" name="remember" value="yes" />
                            </div>

                            <button type="submit" className="btn btn-warning btn-lg">Login</button>
                        </form>
                        <p>Need an account? <NavLink to="/signup"> Signup </NavLink></p>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Login;