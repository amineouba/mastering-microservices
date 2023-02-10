'use strict';


/**
 *
 * body AdminUserDTO 
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "langKey" : "langKey",
  "resetDate" : "2000-01-23T04:56:07.000+00:00",
  "imageUrl" : "imageUrl",
  "id" : 0,
  "login" : "login",
  "email" : "email",
  "activated" : true
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
 * login String 
 * no response value expected for this operation
 **/
exports.deleteUser = function(login) {
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
exports.getAllUsers = function(page,size,sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lastName" : "lastName",
  "lastModifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "lastModifiedBy" : "lastModifiedBy",
  "login" : "login",
  "authorities" : [ "authorities", "authorities" ],
  "firstName" : "firstName",
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "langKey" : "langKey",
  "createdBy" : "createdBy",
  "imageUrl" : "imageUrl",
  "id" : 0,
  "email" : "email",
  "activated" : true
}, {
  "lastName" : "lastName",
  "lastModifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "lastModifiedBy" : "lastModifiedBy",
  "login" : "login",
  "authorities" : [ "authorities", "authorities" ],
  "firstName" : "firstName",
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "langKey" : "langKey",
  "createdBy" : "createdBy",
  "imageUrl" : "imageUrl",
  "id" : 0,
  "email" : "email",
  "activated" : true
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
 * login String 
 * returns AdminUserDTO
 **/
exports.getUser = function(login) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "lastName",
  "lastModifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "lastModifiedBy" : "lastModifiedBy",
  "login" : "login",
  "authorities" : [ "authorities", "authorities" ],
  "firstName" : "firstName",
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "langKey" : "langKey",
  "createdBy" : "createdBy",
  "imageUrl" : "imageUrl",
  "id" : 0,
  "email" : "email",
  "activated" : true
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
 * body AdminUserDTO 
 * returns AdminUserDTO
 **/
exports.updateUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "lastName",
  "lastModifiedDate" : "2000-01-23T04:56:07.000+00:00",
  "lastModifiedBy" : "lastModifiedBy",
  "login" : "login",
  "authorities" : [ "authorities", "authorities" ],
  "firstName" : "firstName",
  "createdDate" : "2000-01-23T04:56:07.000+00:00",
  "langKey" : "langKey",
  "createdBy" : "createdBy",
  "imageUrl" : "imageUrl",
  "id" : 0,
  "email" : "email",
  "activated" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

