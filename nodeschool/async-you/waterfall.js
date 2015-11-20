"use strict"

var async = require('async');
var request = require('request');
var fs = require('fs');

async.waterfall([
  // read a file, pull URL, pass to next func
  function(waterfallCallback) {
    fs.readFile(process.argv[2], function(err, data) {
      if (err) {
        return waterfallCallback(err);
      }

      return waterfallCallback(null, data.toString());
    })
  },
  function(url, waterfallCallback) {
    request(url, function(err, response, body) {
      if (err) {
        return waterfallCallback(err);
      }

      return waterfallCallback(null, body)
    })
  }
], function(err, results) {
  if (err) {
    return console.error("Error")
  } 
  console.log(results);
})
