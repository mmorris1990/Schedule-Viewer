const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    googleId: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allownull: false
    },
    email: {
      type: DataTypes.STRING
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

