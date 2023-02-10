'use strict';

var utils = require('../utils/writer.js');
var CustomerDetailsResource = require('../service/CustomerDetailsResourceService');

module.exports.createCustomerDetails = function createCustomerDetails (req, res, next, body) {
  CustomerDetailsResource.createCustomerDetails(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomerDetails = function deleteCustomerDetails (req, res, next, id) {
  CustomerDetailsResource.deleteCustomerDetails(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCustomerDetails = function getAllCustomerDetails (req, res, next, page, size, sort, eagerload) {
  CustomerDetailsResource.getAllCustomerDetails(page, size, sort, eagerload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomerDetails = function getCustomerDetails (req, res, next, id) {
  CustomerDetailsResource.getCustomerDetails(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partialUpdateCustomerDetails = function partialUpdateCustomerDetails (req, res, next, body, id) {
  CustomerDetailsResource.partialUpdateCustomerDetails(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomerDetails = function updateCustomerDetails (req, res, next, body, id) {
  CustomerDetailsResource.updateCustomerDetails(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
