'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('scheduledmessage', {
    name: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
    sendingdate: {
      type: DataTypes.DATE,
    },
    custommessage: {
      type: DataTypes.STRING,
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
    tableName: 'automailer_scheduledmessage',

    timestamps: false,
  });

  return Model;
};

