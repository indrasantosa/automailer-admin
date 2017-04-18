'use strict';
var express = require('express');
var router = express.Router();
var liana = require('forest-express-sequelize');
var request = require('superagent');
var config = require('../config')

router.post('/actions/post-create', liana.ensureAuthenticated,
  (req, res) => {
    var payload = {
      id: parseInt(req.body.data.attributes.ids[0])
    }
    console.log('Getting from ' + config.appBaseUrl + '/api/UserData/synchronize')
    request
      .post('http://localhost:8003' + '/api/UserData/synchronize')
      .send(payload)
      .end(function(err, resp) {
        if (err) {
          res.send({
            success: err.body
          });
        } else {
          res.send({
            success: 'User is now sync with MailChimp'
          });
        }
      })
  });

module.exports = router;
