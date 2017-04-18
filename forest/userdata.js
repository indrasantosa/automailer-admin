'use strict';
var liana = require('forest-express-sequelize');

liana.collection('userdata', {
  actions: [
    { name: 'post-create' },
  ]
});
