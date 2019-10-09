import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav/Nav";
import DeleteBtn from "../components/DeleteBtn";

class Tasks extends Component {
    state = {
        tasks: [],
        projects: [],
        name: "",
        dueDate: "",
        type: "",
        description: ""
    }

    componentDidMount() {
        this.loadTasks()
        this.loadProjects()
    }

    loadTasks = () => {
        API.getTasks("/1")
            .then(res =>
                this.setState({ tasks: res.data }))
            .catch(err =>
                console.log(err));
    };

    loadProjects = () => {
        API.getProjects("/1")
            .then(res =>
                this.setState({ projects: res.data }))
            .catch(err =>
                console.log(err));
    };

    deleteTask = id => {
        API.deleteTask(id)
            .then(res => this.loadTasks(), this.loadProjects())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.dueDate) {
            API.newTask({
                name: this.state.name,
                dueDate: this.state.dueDate,
                description: this.state.description,
                type: this.state.type
            })
                .then(res => this.loadTasks(), this.loadProjects())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div style={{ width: "100%" }}>
                <Nav />
                <Container>
                    <Row>
                        {/* Projects Display */}
                        <Col size="md-6">
                            <Jumbotron>
                                <h1>Projects</h1>
                            </Jumbotron>
                            {this.state.projects.length ? (
                                <List>
                                    {this.state.projects.map(projects => {
                                        return <ListItem>
                                            <h4 className="taskName">{projects.name}</h4>
                                            <h5 className="taskDescription">{"  " + projects.description}</h5> <br></br>
                                            <h5> {"  Due: " + projects.dueDate}</h5>
                                            <DeleteBtn onClick={() => this.deleteTask(projects.id)} />
                                        </ListItem>
                                    })}
                                </List>
                            ) : (
                                    <h4>No Upcoming Projects!</h4>
                                )}
                        </Col>
                        
                        {/* Tasks Display */}
                        <Col size="md-6">
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
                                            <DeleteBtn value={this.state.tasks.id} id ={tasks.id} onClick={() => this.deleteTask(tasks.id)} />
                                        </ListItem>
                                    })}
                                </List>
                            ) : (
                                    <h4>No Current Tasks!</h4>
                                )}
                        </Col>

                    </Row>

                    {/* Form Display */}
                    <Row>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Tasks;