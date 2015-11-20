"use strict"

var async = require('async');
var request = require('request');
var fs = require('fs');

var url1 = process.argv[2];
var url2 = process.argv[3];

async.series({
  requestOne: function(seriesCallback) {
    request(url1, function(err, response, body) {
      return seriesCallback(err)
    });
  },
  requestTwo: function(seriesCallback) {
    request(url2, function(err, response, body) {
      return seriesCallback(err)
    });
  }

}, function(err, results) {
  if (err) {
    return console.error("Error")
  } 
  console.log(results);
})
