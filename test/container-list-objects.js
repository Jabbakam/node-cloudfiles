var path = require('path'),
    vows = require('vows'),
    assert = require('assert'),
    cloudfiles = require('../lib/cloudfiles'),
    helpers = require('./helpers');

var client = helpers.createClient();

client.setAuth(function(error) {
  /*
  console.log("get files ===-");
  client.getContainer('jk-dev_test', function (err, container) {
    console.log("post get container");
    console.log(err);
    container.getFiles(function (err, files) {
      console.log("files: "+files.length);
    });
  });
    */  

  console.log("get list ===-");
  client.listObjects('jk-dev', {'prefix': '1382-1322843690'}, function(error, results) {
    console.log("container list got");
    console.log(results);
  });

});