/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";

class Views extends Component {
    state = {
        jobs: [],
        tasks: []
    };

    componentDidMount() {
        this.loadJobs();
        this.loadTasks();
    };

    loadJobs = () => {
        API.getJobs()
            .then(res =>
                this.setState({ jobs: res.data }))
            .catch(err =>
                console.log(err));
    };

    loadTasks = () => {
        API.getTasks()
            .then(res =>
                this.setState({ tasks: res.data }))
            .catch(err =>
                console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        <Row>
                            <Jumbotron>
                                <h1>Jobs Due Today</h1>
                            </Jumbotron>
                            {this.state.jobs.length ? (
                                <List>
                                    {this.state.jobs.map(jobs => {
                                        <ListItem>
                                            {jobs}
                                        </ListItem>
                                    })}
                                </List>
                            ) : (
                                <h3> No Jobs Due Today </h3>
                            )}
                        </Row>
                        
                        <Row>
                            <Jumbotron>
                                <h1> Jobs Due Tomorrow </h1>
                            </Jumbotron>
                        </Row>

                    </Col>

                    <Col size="md-4">
                        <Row>
                            <Jumbotron>
                                <h1>Tasks</h1>
                            </Jumbotron>
                        </Row>

                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Views;