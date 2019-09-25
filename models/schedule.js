const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    const Schedule = sequelize.define("Schedule", {
        salesOrder: DataTypes.STRING,
        company: DataTypes.STRING,
        contact: DataTypes.STRING,
        pm: DataTypes.STRING,
        pmNotes: DataTypes.STRING,
        design: DataTypes.STRING,
        print: DataTypes.STRING,
        router: DataTypes.STRING,
        finishing: DataTypes.STRING,
        materials: DataTypes.STRING,
        dateNotes: DataTypes.STRING,
        dateDue: DataTypes.STRING,
        shipping: DataTypes.STRING,
        description: DataTypes.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });
    return Schedule;
};
