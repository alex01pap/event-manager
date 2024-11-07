'use strict';

var utils = require('../utils/writer.js');
var Locations = require('../service/LocationsService');

module.exports.locationsGET = function locationsGET (req, res, next) {
  Locations.locationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsIdDELETE = function locationsIdDELETE (req, res, next, id) {
  Locations.locationsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsIdGET = function locationsIdGET (req, res, next, id) {
  Locations.locationsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsIdPUT = function locationsIdPUT (req, res, next, body, id) {
  Locations.locationsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.locationsPOST = function locationsPOST (req, res, next, body) {
  Locations.locationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
