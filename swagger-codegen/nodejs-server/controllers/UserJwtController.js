'use strict';

var utils = require('../utils/writer.js');
var UserJwtController = require('../service/UserJwtControllerService');

module.exports.authorize = function authorize (req, res, next, body) {
  UserJwtController.authorize(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
