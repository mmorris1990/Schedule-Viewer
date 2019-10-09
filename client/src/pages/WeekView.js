/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav/Nav";
const moment = require("moment");

class WeekView extends Component {
    state = {
        weekJobs: [],
        tasks: []
    };

    componentDidMount() {
        this.loadJobs();
        this.loadTasks();
        this.pageRedirect();
    };

    loadJobs = () => {
        API.getWeekJobs()
            .then(res =>
                this.setState({ weekJobs: res.data }))
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

    pageRedirect = () => {
        const timer = setTimeout(() => {
            window.location = "http://localhost:3000/schedule";
        }, 7000);
        return () => clearTimeout(timer);
    };

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="md-9">
                            <Row>
                                <Jumbotron>
                                    <h1>Jobs Due This Week</h1>
                                </Jumbotron>
                                {this.state.weekJobs.length ? (
                                    <List>
                                        {this.state.weekJobs.map(jobs => {
                                            return <ListItem>
                                                <h4>SO# {jobs.salesOrder}
                                                    {" " + jobs.company}</h4><br></br>
                                                <h5>{" Due: " + jobs.dateDue}
                                                    {" --- " + jobs.dateNotes}
                                                    {" " + jobs.shipping}</h5>
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
                                                <h4 className="taskName">{tasks.name}</h4>
                                                <h5 className="taskDescription">{"  " + tasks.description}</h5> <br></br>
                                                <h5> {"  Due: " + tasks.dueDate} </h5>
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
            </div>
        );
    }
};

export default WeekView;