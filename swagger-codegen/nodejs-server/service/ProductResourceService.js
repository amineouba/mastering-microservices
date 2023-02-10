'use strict';


/**
 *
 * body ProductDTO 
 * returns ProductDTO
 **/
exports.createProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
exports.deleteProduct = function(id) {
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
exports.getAllProducts = function(page,size,sort,eagerload) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
 * returns ProductDTO
 **/
exports.getProduct = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * body ProductDTO 
 * id Long 
 * returns ProductDTO
 **/
exports.partialUpdateProduct = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * body ProductDTO 
 * id Long 
 * returns ProductDTO
 **/
exports.updateProduct = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

