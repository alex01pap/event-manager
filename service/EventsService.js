'use strict';


/**
 * Λήψη όλων των εκδηλώσεων
 *
 * returns List
 **/
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id" : 0,
  "title" : "title",
  "location_id" : 6
}, {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id" : 0,
  "title" : "title",
  "location_id" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Διαγραφή εκδήλωσης
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.eventsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Λήψη συγκεκριμένης εκδήλωσης
 *
 * id Integer 
 * returns Event
 **/
exports.eventsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "id" : 0,
  "title" : "title",
  "location_id" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ενημέρωση εκδήλωσης
 *
 * body Event  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.eventsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Δημιουργία νέας εκδήλωσης
 *
 * body Event  (optional)
 * no response value expected for this operation
 **/
exports.eventsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

