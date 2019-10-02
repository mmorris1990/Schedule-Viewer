import React, { Component } from "react";
import Axios from "axios";
import { Redirect, NavLink } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

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

    render() {
        return (
            <Container>

                <Row>
                    <Col size="md-3">

                    </Col>

                    <Col size="md-6">
                        <h1 style={{ textAlign: "center" }}>Finishing Bae's Super Special Schedule System</h1>
                        <form action="/login" method="post" >
                            <h2 className="signIn">Sign In</h2>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="username" className="form-control input_user" value={this.state.username} onChange={this.handleChange} placeholder="username" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" className="form-control input_pass" value={this.state.password} onChange={this.handleChange}
                                    placeholder="password" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" for="customControlInline">Remember me</label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="submit" name="button" className="btn login_btn">Login</button>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="submit" name="button" className="btn login_btn">Signup</button>
                            </div>
                        </form>
                    </Col>

                    <Col size="md-3">

                    </Col>
                </Row>
            </Container >
        )
    }
};

export default Login;
