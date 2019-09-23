module.exports = function (sequelize, DataTypes) {
    const Schedule = sequelize.define("Schedule", {
    //    Is this necessary for table data import wizard?
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // ------------------------
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
        // need to fix for table data import wizard
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
        // -----------------------------
    });
    return Schedule;
};
