'use strict';

var utils = require('../utils/writer.js');
var ProductOrderResource = require('../service/ProductOrderResourceService');

module.exports.createProductOrder = function createProductOrder (req, res, next, body) {
  ProductOrderResource.createProductOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductOrder = function deleteProductOrder (req, res, next, id) {
  ProductOrderResource.deleteProductOrder(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProductOrders = function getAllProductOrders (req, res, next, eagerload) {
  ProductOrderResource.getAllProductOrders(eagerload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductOrder = function getProductOrder (req, res, next, id) {
  ProductOrderResource.getProductOrder(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partialUpdateProductOrder = function partialUpdateProductOrder (req, res, next, body, id) {
  ProductOrderResource.partialUpdateProductOrder(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProductOrder = function updateProductOrder (req, res, next, body, id) {
  ProductOrderResource.updateProductOrder(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
