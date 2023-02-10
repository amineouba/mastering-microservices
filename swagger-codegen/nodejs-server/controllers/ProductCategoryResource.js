'use strict';

var utils = require('../utils/writer.js');
var ProductCategoryResource = require('../service/ProductCategoryResourceService');

module.exports.createProductCategory = function createProductCategory (req, res, next, body) {
  ProductCategoryResource.createProductCategory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProductCategory = function deleteProductCategory (req, res, next, id) {
  ProductCategoryResource.deleteProductCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProductCategories = function getAllProductCategories (req, res, next, page, size, sort) {
  ProductCategoryResource.getAllProductCategories(page, size, sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductCategory = function getProductCategory (req, res, next, id) {
  ProductCategoryResource.getProductCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partialUpdateProductCategory = function partialUpdateProductCategory (req, res, next, body, id) {
  ProductCategoryResource.partialUpdateProductCategory(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProductCategory = function updateProductCategory (req, res, next, body, id) {
  ProductCategoryResource.updateProductCategory(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
