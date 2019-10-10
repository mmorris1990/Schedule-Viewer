/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav/Nav";
const moment = require("moment");

class MainView extends Component {
    state = {
        todayJobs: [],
        tomorrowJobs: [],
        tasks: []
    };

    componentDidMount() {
        this.loadJobs();
        this.loadTasks();
        this.pageRedirect();
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

    pageRedirect = () => {
        const timer = setTimeout(() => {
            window.location = "http://localhost:3000/weekSchedule";
        }, 8000);
        return () => clearTimeout(timer);
    };

    render() {
        return (
            <div style={{width:"100%" , height: "100vh"}}>
                <Nav />
                <Container style={{height: "inherit"}}>
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
                                                <h4>SO# {jobs.salesOrder}
                                                    {" " + jobs.company}</h4><br></br>
                                                <h5>{" Due: " + jobs.dateDue}
                                                    {" --- " + jobs.dateNotes}
                                                    {" " + jobs.shipping}</h5>
                                            </ListItem>
                                        })}
                                    </List>
                                ) : (
                                        <h4>No Jobs Due Today!</h4>
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
                                                <h4>SO# {jobs.salesOrder}
                                                    {" " + jobs.company}</h4><br></br>
                                                <h5>{" Due: " + jobs.dateDue}
                                                    {" --- " + jobs.dateNotes}
                                                    {" " + jobs.shipping}</h5>
                                            </ListItem>
                                        })}
                                    </List>
                                ) : (
                                        <h3>No Jobs Due Tomorrow!</h3>
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
                                                <h5> {"  Due: " + tasks.dueDate}</h5>
                                            </ListItem>
                                        })}
                                    </List>
                                ) : (
                                        <h3>No Department Tasks</h3>
                                    )}
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default MainView;