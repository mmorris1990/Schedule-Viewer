/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav/Nav";
const moment = require("moment");

class ProjectView extends Component {
    state = {
        projects: [],
        tasks: []
    };

    componentDidMount() {
        this.loadProjects();
        this.loadTasks();
        this.pageRedirect();
    };

    loadProjects = () => {
        API.getProjects("/1")
            .then(res =>
                this.setState({ projects: res.data }))
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
        }, 8000);
        return () => clearTimeout(timer);
    };

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="md-6">
                            <Row>
                                <Jumbotron>
                                    <h1>Upcoming Projects</h1>
                                </Jumbotron>
                                {this.state.projects.length ? (
                                    <List>
                                        {this.state.projects.map(projects => {
                                            return <ListItem>
                                                <h4 className="projectName">{projects.name}</h4>
                                                <h5 className="projectDescription">{"  " + projects.description}</h5> <br></br>
                                                <h5> {"  Due: " + projects.dueDate} </h5>
                                            </ListItem>
                                        })}
                                    </List>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </Row>

                        </Col>

                        <Col size="md-6">
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

export default ProjectView;