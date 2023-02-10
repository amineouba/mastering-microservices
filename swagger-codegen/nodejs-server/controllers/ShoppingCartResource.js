'use strict';

var utils = require('../utils/writer.js');
var ShoppingCartResource = require('../service/ShoppingCartResourceService');

module.exports.createShoppingCart = function createShoppingCart (req, res, next, body) {
  ShoppingCartResource.createShoppingCart(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteShoppingCart = function deleteShoppingCart (req, res, next, id) {
  ShoppingCartResource.deleteShoppingCart(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllShoppingCarts = function getAllShoppingCarts (req, res, next) {
  ShoppingCartResource.getAllShoppingCarts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getShoppingCart = function getShoppingCart (req, res, next, id) {
  ShoppingCartResource.getShoppingCart(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partialUpdateShoppingCart = function partialUpdateShoppingCart (req, res, next, body, id) {
  ShoppingCartResource.partialUpdateShoppingCart(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateShoppingCart = function updateShoppingCart (req, res, next, body, id) {
  ShoppingCartResource.updateShoppingCart(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
