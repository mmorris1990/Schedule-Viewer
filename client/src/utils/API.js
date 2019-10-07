import axios from "axios";

export default {

    // Get jobs for the next week
    getWeekJobs: function () {
        return axios.get("/api/schedule/week");
    },

    // Get jobs by date
    getJobs: function (date) {
        return axios.get("/api/schedule/" + date);
    },

    // Get tasks by user id
    getTasks: UserId => {
        return axios.get("/api/task/task" + UserId);
    },

    // Get projects by user id
    getProjects: UserId => {
        return axios.get("/api/task/project" + UserId);
    },

    // Create new task
    newTask: taskData => {
        return axios.post("/api/task/task", taskData);
    },

    // // Create new project
    // newProject: projectData => {
    //     return axios.post("/api/task/project", projectData);
    // },

    // Update task/project by id
    editTask: id => {
        return axios.put("/api/task/" + id);
    },

    // Delete task/project by id
    deleteTask: id => {
        return axios.delete("/api/task/" + id);
    }
};
