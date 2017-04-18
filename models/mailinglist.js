'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('mailinglist', {
    name: {
      type: DataTypes.STRING,
    },
    mailchimpid: {
      type: DataTypes.STRING,
    },
    mailchimpunsuburl: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: () => {

      }
    },
    tableName: 'automailer_mailinglist',

    timestamps: false,
  });

  return Model;
};

