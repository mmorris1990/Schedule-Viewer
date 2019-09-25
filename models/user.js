const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    Username: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING,
      allownull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
  User.associate = function (models) {
    User.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };

  return User;
};

