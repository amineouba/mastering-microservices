'use strict';


/**
 *
 * key String 
 * no response value expected for this operation
 **/
exports.activateAccount = function(key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body PasswordChangeDTO 
 * no response value expected for this operation
 **/
exports.changePassword = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body KeyAndPasswordVM 
 * no response value expected for this operation
 **/
exports.finishPasswordReset = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns AdminUserDTO
 **/
exports.getAccount = function() {
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
 * returns String
 **/
exports.isAuthenticated = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body ManagedUserVM 
 * no response value expected for this operation
 **/
exports.registerAccount = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body String 
 * no response value expected for this operation
 **/
exports.requestPasswordReset = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body AdminUserDTO 
 * no response value expected for this operation
 **/
exports.saveAccount = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

