'use strict';


/**
 *
 * body ShoppingCartDTO 
 * returns ShoppingCartDTO
 **/
exports.createShoppingCart = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalPrice" : 0.6027456183070403,
  "paymentReference" : "paymentReference",
  "paymentMethod" : "CREDIT_CARD",
  "id" : 0,
  "customerDetails" : {
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
  },
  "placedDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "COMPLETED"
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
exports.deleteShoppingCart = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * returns List
 **/
exports.getAllShoppingCarts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "totalPrice" : 0.6027456183070403,
  "paymentReference" : "paymentReference",
  "paymentMethod" : "CREDIT_CARD",
  "id" : 0,
  "customerDetails" : {
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
  },
  "placedDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "COMPLETED"
}, {
  "totalPrice" : 0.6027456183070403,
  "paymentReference" : "paymentReference",
  "paymentMethod" : "CREDIT_CARD",
  "id" : 0,
  "customerDetails" : {
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
  },
  "placedDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "COMPLETED"
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
 * returns ShoppingCartDTO
 **/
exports.getShoppingCart = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalPrice" : 0.6027456183070403,
  "paymentReference" : "paymentReference",
  "paymentMethod" : "CREDIT_CARD",
  "id" : 0,
  "customerDetails" : {
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
  },
  "placedDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "COMPLETED"
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
 * body ShoppingCartDTO 
 * id Long 
 * returns ShoppingCartDTO
 **/
exports.partialUpdateShoppingCart = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalPrice" : 0.6027456183070403,
  "paymentReference" : "paymentReference",
  "paymentMethod" : "CREDIT_CARD",
  "id" : 0,
  "customerDetails" : {
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
  },
  "placedDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "COMPLETED"
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
 * body ShoppingCartDTO 
 * id Long 
 * returns ShoppingCartDTO
 **/
exports.updateShoppingCart = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalPrice" : 0.6027456183070403,
  "paymentReference" : "paymentReference",
  "paymentMethod" : "CREDIT_CARD",
  "id" : 0,
  "customerDetails" : {
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
  },
  "placedDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "COMPLETED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

