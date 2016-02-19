//look into this for script function:


//var fs         = require("fs");
//var Converter  = require("csvtojson").Converter;
//var fileStream = fs.createReadStream("csv/gspc.csv");
//
//new converter instance 
//var converter = new Converter({constructResult:true});
//
//end_parsed will be emitted once parsing finished 
//converter.on("end_parsed", function (jsonObj) {
//  var jsonfile = require('jsonfile');
//  var file     = 'json/gspc.json';
//  jsonfile.writeFile(file, jsonObj, function (err) { console.error(err); });});

//read from file 
//fileStream.pipe(converter);


var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.on("end_parsed", function (output) {
   console.log(output); //result jsonarray 
});
 
//read from file 
require("fs").createReadStream("./input.csv").pipe(converter);