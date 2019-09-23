module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
        name: DataTypes.STRING,
        dueDate: DataTypes.STRING,
        description: DataTypes.TEXT,
        type: DataTypes.STRING
    });

    Task.associate = function (models) {
        Task.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Task;
};
