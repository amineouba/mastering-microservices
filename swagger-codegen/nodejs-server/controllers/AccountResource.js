'use strict';

var utils = require('../utils/writer.js');
var AccountResource = require('../service/AccountResourceService');

module.exports.activateAccount = function activateAccount (req, res, next, key) {
  AccountResource.activateAccount(key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changePassword = function changePassword (req, res, next, body) {
  AccountResource.changePassword(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.finishPasswordReset = function finishPasswordReset (req, res, next, body) {
  AccountResource.finishPasswordReset(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccount = function getAccount (req, res, next) {
  AccountResource.getAccount()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.isAuthenticated = function isAuthenticated (req, res, next) {
  AccountResource.isAuthenticated()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerAccount = function registerAccount (req, res, next, body) {
  AccountResource.registerAccount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestPasswordReset = function requestPasswordReset (req, res, next, body) {
  AccountResource.requestPasswordReset(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.saveAccount = function saveAccount (req, res, next, body) {
  AccountResource.saveAccount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
