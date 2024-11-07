'use strict';


/**
 * Λήψη όλων των τοποθεσιών
 *
 * returns List
 **/
exports.locationsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "address" : "address",
  "name" : "name",
  "id" : 0
}, {
  "address" : "address",
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Διαγραφή τοποθεσίας
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.locationsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Λήψη πληροφοριών τοποθεσίας
 *
 * id Integer 
 * returns Location
 **/
exports.locationsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : "address",
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ενημέρωση τοποθεσίας
 *
 * body Location  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.locationsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Προσθήκη νέας τοποθεσίας
 *
 * body Location  (optional)
 * no response value expected for this operation
 **/
exports.locationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

