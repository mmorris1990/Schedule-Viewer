/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import Jumbotron from "../Jumbotron";
const moment = require("moment");

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            signedUp: false,
            badPassword: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    signupUser = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ badPassword: true })
        }
        else {
            Axios.post("/registerUser", {
                username: this.state.username,
                password: this.state.password,
            }).then((data) => {
                console.log("signed up")
                this.setState({ signedUp: true })
            }).catch((err) => {
                console.log(err)
            })
        }
    };

    render() {
        return (
            <Container>
                <div className="col-sm-6 col-sm-offset-3">

                    <h1><span className="fa fa-sign-in"></span> Signup</h1>

                    <form>
                        Username: <input type="text" name="username" class="form-control" value={this.state.username} onChange={this.handleChange} /><br />
                        Password: <input type="password" name="password" class="form-control" value={this.state.password} onChange={this.handleChange} /><br />
                        Confirm Password: <input type="password" class="form-control" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} /><br />
                        <button type="submit" className="btn-success" onClick={this.signupUser}>Sign up</button>
                    </form>
                    <br />
                    <div class="alert alert-danger" role="alert" hidden={!this.state.badPassword}>
                        Passwords don't match!
                    </div>

                    <p>Already have an account? <NavLink to="/"> Login</NavLink></p>
                </div>
            </Container>
        )
    }
}

export default Signup;