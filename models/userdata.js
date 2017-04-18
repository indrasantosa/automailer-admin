'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('userdata', {
    email: {
      type: DataTypes.STRING,
    },
    userdata: {
      type: DataTypes.STRING,
    },
    postalcode: {
      type: DataTypes.STRING,
    },
    budget: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    lastsyncdata: {
      type: DataTypes.DATE,
    },
    mailinglistid: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: () => {
        Model.belongsTo(models.mailinglist, {
          foreignKey: 'mailinglistid'
        })
      }
    },
    tableName: 'automailer_userdata',

    timestamps: false,
  });

  return Model;
};

