'use strict';

var utils = require('../utils/writer.js');
var PublicUserResource = require('../service/PublicUserResourceService');

module.exports.getAllPublicUsers = function getAllPublicUsers (req, res, next, page, size, sort) {
  PublicUserResource.getAllPublicUsers(page, size, sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAuthorities = function getAuthorities (req, res, next) {
  PublicUserResource.getAuthorities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
