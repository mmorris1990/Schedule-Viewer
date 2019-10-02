/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
const moment = require("moment");

class Views extends Component {
    state = {
        todayJobs: [],
        tomorrowJobs: [],
        tasks: []
    };

    componentDidMount() {
        this.loadJobs();
        this.loadTasks();
    };

    loadJobs = () => {
        API.getJobs(moment().format("M-D"))
            .then(res =>
                this.setState({ todayJobs: res.data }))
            .catch(err =>
                console.log(err));
        API.getJobs(moment().add(1, "days").format("M-D"))
            .then(res =>
                this.setState({ tomorrowJobs: res.data }))
            .catch(err =>
                console.log(err));
    };

    loadTasks = () => {
        API.getTasks("/1")
            .then(res =>
                this.setState({ tasks: res.data }))
            .catch(err =>
                console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-9">
                        <Row>
                            <Jumbotron>
                                <h1>Jobs Due Today</h1>
                            </Jumbotron>
                            {this.state.todayJobs.length ? (
                                <List>
                                    {this.state.todayJobs.map(jobs => {
                                        return <ListItem>
                                            <h3>SO# {jobs.salesOrder}
                                                {" " + jobs.company}</h3><br></br>
                                            <h4>{" Due: " + jobs.dateDue}
                                                {" --- " + jobs.dateNotes}
                                                {" " + jobs.shipping}</h4>
                                        </ListItem>
                                    })}
                                </List>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Row>

                        <Row>
                            <Jumbotron>
                                <h1> Jobs Due Tomorrow </h1>
                            </Jumbotron>
                            {this.state.tomorrowJobs.length ? (
                                <List>
                                    {this.state.tomorrowJobs.map(jobs => {
                                        return <ListItem>
                                            <h3>SO# {jobs.salesOrder}
                                                {" " + jobs.company}</h3><br></br>
                                            <h4>{" Due: " + jobs.dateDue}
                                                {" --- " + jobs.dateNotes}
                                                {" " + jobs.shipping}</h4>
                                        </ListItem>
                                    })}
                                </List>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Row>

                    </Col>

                    <Col size="md-3">
                        <Row>
                            <Jumbotron>
                                <h1>Tasks</h1>
                            </Jumbotron>
                            {this.state.tasks.length ? (
                                <List>
                                    {this.state.tasks.map(tasks => {
                                        return <ListItem>
                                            <h2 className="taskName">{tasks.name}</h2>
                                            <h3 className="taskDescription">{"  " + tasks.description}</h3> <br></br>
                                            {"  Due: " + tasks.dueDate}
                                        </ListItem>
                                    })}
                                </List>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Row>

                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Views;