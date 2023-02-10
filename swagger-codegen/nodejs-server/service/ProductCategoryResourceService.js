'use strict';


/**
 *
 * body ProductCategoryDTO 
 * returns ProductCategoryDTO
 **/
exports.createProductCategory = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteProductCategory = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * page Integer Zero-based page index (0..N) (optional)
 * size Integer The size of the page to be returned (optional)
 * sort List Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional)
 * returns List
 **/
exports.getAllProductCategories = function(page,size,sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "description" : "description",
  "id" : 1
}, {
  "name" : "name",
  "description" : "description",
  "id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Long 
 * returns ProductCategoryDTO
 **/
exports.getProductCategory = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body ProductCategoryDTO 
 * id Long 
 * returns ProductCategoryDTO
 **/
exports.partialUpdateProductCategory = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body ProductCategoryDTO 
 * id Long 
 * returns ProductCategoryDTO
 **/
exports.updateProductCategory = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

