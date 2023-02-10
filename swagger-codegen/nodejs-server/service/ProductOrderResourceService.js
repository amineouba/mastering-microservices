'use strict';


/**
 *
 * body ProductOrderDTO 
 * returns ProductOrderDTO
 **/
exports.createProductOrder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product" : {
    "image" : [ "", "" ],
    "imageCdnUrl" : "imageCdnUrl",
    "productSize" : "S",
    "imageSha1" : "imageSha1",
    "upc" : "upc",
    "description" : "description",
    "colors" : "colors",
    "productCategory" : {
      "name" : "name",
      "description" : "description",
      "id" : 1
    },
    "ean" : "ean",
    "thumbnailCdnUrl" : "thumbnailCdnUrl",
    "price" : 0.6027456183070403,
    "imageContentType" : "imageContentType",
    "name" : "name",
    "thumbnailSha1" : "thumbnailSha1",
    "id" : 0,
    "sku" : "sku"
  },
  "quantity" : 0,
  "totalPrice" : 0.14658129805029452,
  "id" : 0,
  "cart" : {
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
  }
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
exports.deleteProductOrder = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * eagerload Boolean  (optional)
 * returns List
 **/
exports.getAllProductOrders = function(eagerload) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "product" : {
    "image" : [ "", "" ],
    "imageCdnUrl" : "imageCdnUrl",
    "productSize" : "S",
    "imageSha1" : "imageSha1",
    "upc" : "upc",
    "description" : "description",
    "colors" : "colors",
    "productCategory" : {
      "name" : "name",
      "description" : "description",
      "id" : 1
    },
    "ean" : "ean",
    "thumbnailCdnUrl" : "thumbnailCdnUrl",
    "price" : 0.6027456183070403,
    "imageContentType" : "imageContentType",
    "name" : "name",
    "thumbnailSha1" : "thumbnailSha1",
    "id" : 0,
    "sku" : "sku"
  },
  "quantity" : 0,
  "totalPrice" : 0.14658129805029452,
  "id" : 0,
  "cart" : {
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
  }
}, {
  "product" : {
    "image" : [ "", "" ],
    "imageCdnUrl" : "imageCdnUrl",
    "productSize" : "S",
    "imageSha1" : "imageSha1",
    "upc" : "upc",
    "description" : "description",
    "colors" : "colors",
    "productCategory" : {
      "name" : "name",
      "description" : "description",
      "id" : 1
    },
    "ean" : "ean",
    "thumbnailCdnUrl" : "thumbnailCdnUrl",
    "price" : 0.6027456183070403,
    "imageContentType" : "imageContentType",
    "name" : "name",
    "thumbnailSha1" : "thumbnailSha1",
    "id" : 0,
    "sku" : "sku"
  },
  "quantity" : 0,
  "totalPrice" : 0.14658129805029452,
  "id" : 0,
  "cart" : {
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
  }
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
 * returns ProductOrderDTO
 **/
exports.getProductOrder = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product" : {
    "image" : [ "", "" ],
    "imageCdnUrl" : "imageCdnUrl",
    "productSize" : "S",
    "imageSha1" : "imageSha1",
    "upc" : "upc",
    "description" : "description",
    "colors" : "colors",
    "productCategory" : {
      "name" : "name",
      "description" : "description",
      "id" : 1
    },
    "ean" : "ean",
    "thumbnailCdnUrl" : "thumbnailCdnUrl",
    "price" : 0.6027456183070403,
    "imageContentType" : "imageContentType",
    "name" : "name",
    "thumbnailSha1" : "thumbnailSha1",
    "id" : 0,
    "sku" : "sku"
  },
  "quantity" : 0,
  "totalPrice" : 0.14658129805029452,
  "id" : 0,
  "cart" : {
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
  }
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
 * body ProductOrderDTO 
 * id Long 
 * returns ProductOrderDTO
 **/
exports.partialUpdateProductOrder = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product" : {
    "image" : [ "", "" ],
    "imageCdnUrl" : "imageCdnUrl",
    "productSize" : "S",
    "imageSha1" : "imageSha1",
    "upc" : "upc",
    "description" : "description",
    "colors" : "colors",
    "productCategory" : {
      "name" : "name",
      "description" : "description",
      "id" : 1
    },
    "ean" : "ean",
    "thumbnailCdnUrl" : "thumbnailCdnUrl",
    "price" : 0.6027456183070403,
    "imageContentType" : "imageContentType",
    "name" : "name",
    "thumbnailSha1" : "thumbnailSha1",
    "id" : 0,
    "sku" : "sku"
  },
  "quantity" : 0,
  "totalPrice" : 0.14658129805029452,
  "id" : 0,
  "cart" : {
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
  }
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
 * body ProductOrderDTO 
 * id Long 
 * returns ProductOrderDTO
 **/
exports.updateProductOrder = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product" : {
    "image" : [ "", "" ],
    "imageCdnUrl" : "imageCdnUrl",
    "productSize" : "S",
    "imageSha1" : "imageSha1",
    "upc" : "upc",
    "description" : "description",
    "colors" : "colors",
    "productCategory" : {
      "name" : "name",
      "description" : "description",
      "id" : 1
    },
    "ean" : "ean",
    "thumbnailCdnUrl" : "thumbnailCdnUrl",
    "price" : 0.6027456183070403,
    "imageContentType" : "imageContentType",
    "name" : "name",
    "thumbnailSha1" : "thumbnailSha1",
    "id" : 0,
    "sku" : "sku"
  },
  "quantity" : 0,
  "totalPrice" : 0.14658129805029452,
  "id" : 0,
  "cart" : {
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
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

