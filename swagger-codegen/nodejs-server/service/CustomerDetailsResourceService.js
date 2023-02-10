'use strict';


/**
 *
 * body CustomerDetailsDTO 
 * returns CustomerDetailsDTO
 **/
exports.createCustomerDetails = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "gender" : "MALE",
  "phone" : "phone",
  "city" : "city",
  "latitude" : 5.962134,
  "geohash" : "geohash",
  "olc" : "olc",
  "addressLine1" : "addressLine1",
  "addressLine2" : "addressLine2",
  "id" : 1,
  "user" : {
    "id" : 2,
    "login" : "login"
  },
  "longitude" : 5.637377
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
exports.deleteCustomerDetails = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * page Integer Zero-based page index (0..N) (optional)
 * size Integer The size of the page to be returned (optional)
 * sort List Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional)
 * eagerload Boolean  (optional)
 * returns List
 **/
exports.getAllCustomerDetails = function(page,size,sort,eagerload) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "country",
  "gender" : "MALE",
  "phone" : "phone",
  "city" : "city",
  "latitude" : 5.962134,
  "geohash" : "geohash",
  "olc" : "olc",
  "addressLine1" : "addressLine1",
  "addressLine2" : "addressLine2",
  "id" : 1,
  "user" : {
    "id" : 2,
    "login" : "login"
  },
  "longitude" : 5.637377
}, {
  "country" : "country",
  "gender" : "MALE",
  "phone" : "phone",
  "city" : "city",
  "latitude" : 5.962134,
  "geohash" : "geohash",
  "olc" : "olc",
  "addressLine1" : "addressLine1",
  "addressLine2" : "addressLine2",
  "id" : 1,
  "user" : {
    "id" : 2,
    "login" : "login"
  },
  "longitude" : 5.637377
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
 * returns CustomerDetailsDTO
 **/
exports.getCustomerDetails = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "gender" : "MALE",
  "phone" : "phone",
  "city" : "city",
  "latitude" : 5.962134,
  "geohash" : "geohash",
  "olc" : "olc",
  "addressLine1" : "addressLine1",
  "addressLine2" : "addressLine2",
  "id" : 1,
  "user" : {
    "id" : 2,
    "login" : "login"
  },
  "longitude" : 5.637377
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
 * body CustomerDetailsDTO 
 * id Long 
 * returns CustomerDetailsDTO
 **/
exports.partialUpdateCustomerDetails = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "gender" : "MALE",
  "phone" : "phone",
  "city" : "city",
  "latitude" : 5.962134,
  "geohash" : "geohash",
  "olc" : "olc",
  "addressLine1" : "addressLine1",
  "addressLine2" : "addressLine2",
  "id" : 1,
  "user" : {
    "id" : 2,
    "login" : "login"
  },
  "longitude" : 5.637377
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
 * body CustomerDetailsDTO 
 * id Long 
 * returns CustomerDetailsDTO
 **/
exports.updateCustomerDetails = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "gender" : "MALE",
  "phone" : "phone",
  "city" : "city",
  "latitude" : 5.962134,
  "geohash" : "geohash",
  "olc" : "olc",
  "addressLine1" : "addressLine1",
  "addressLine2" : "addressLine2",
  "id" : 1,
  "user" : {
    "id" : 2,
    "login" : "login"
  },
  "longitude" : 5.637377
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

