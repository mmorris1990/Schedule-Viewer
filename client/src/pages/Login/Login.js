/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Axios from "axios";
import { Redirect, NavLink } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import "./login.css"
const moment = require("moment");

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    loginUser = (event) => {
        console.log("loginButton");
        event.preventDefault();
        Axios.post("/loginUser", {
            username: this.state.username,
            password: this.state.password,
        }).then((data) => {
            // localStorage.setItem('JWT', res.data.token);
            this.setState({ loggedIn: true })
            console.log("logged in")
        }).catch((err) => {
            console.log(err)
        })
    }

    googleLogin = (event) => {
        event.preventDefault();
        Axios.get("/auth/google").then(res => {
            console.log(res)
        })
    }

    render() {
        if (!this.state.loggedIn) {
            return <Container>
                <Row className="header">
                    <h1 className="header">Finishing Bae's Super Special Schedule System</h1>
                </Row>
                <Row>
                    <Col size="lg-4"></Col>
                    <Col size="lg-4">

                        {/*<form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Remember Me</label>
                                <input type="checkbox" className="form-control" name="remember" value="yes" />
                            </div>

                            <button type="submit" className="btn-success" onClick={this.loginUser}>Login</button>
                        </form>
                        <p>Need an account? <NavLink to="/signup"> Signup </NavLink></p> */}
                        <div className="google-btn-container">
                            <a href="/auth/google">
                                <div className="google-btn">
                                    <div className="google-icon-wrapper">
                                        <img
                                            className="google-icon"
                                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                            alt="signin"
                                        />
                                    </div>
                                    <p className="btn-text">
                                        <b>Log in with Google</b>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col size="lg-4"></Col>
                </Row>
            </Container >
        }
        else {
            return <Redirect to={{ pathname: "/schedule", state: { loggedIn: true } }} />
        }
    }
}

export default Login;