/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
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
        Axios.post("/login", {
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
    render() {
        return (
            <Container>
                <Row style={{height: 200, marginBottom: 200}}>..</Row>
                <Row>
                    <Col size="lg-6"></Col>
                    <Col size="lg-4">
                        <h1><span className="fa fa-sign-in"></span> Login</h1>

                        <form>
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
                        <p>Need an account? <NavLink to="/signup"> Signup </NavLink></p>
                    </Col>
                    <Col size="lg-4"></Col>
                </Row>
            </Container >
        )
    }
}

export default Login;