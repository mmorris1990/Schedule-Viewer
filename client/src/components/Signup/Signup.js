/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import API from "../../utils/API";
import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import Jumbotron from "../Jumbotron";
const moment = require("moment");

class Signup extends Component {
    state = {

    };

    render() {
        return (
            <Container>
                <div className="col-sm-6 col-sm-offset-3">

                    <h1><span className="fa fa-sign-in"></span> Signup</h1>

                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" name="username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" />
                        </div>

                        <button type="submit" className="btn btn-warning btn-lg">Signup</button>
                    </form>

                    <p>Already have an account? <NavLink to="/"> Login</NavLink></p>

                </div>
            </Container>
        )
    }
}

export default Signup;