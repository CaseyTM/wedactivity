'use strict';
module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define('todos', {
    title: DataTypes.STRING,
    details: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    completed_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todos;
};