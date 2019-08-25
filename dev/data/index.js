const fs = require('fs-extra'),
_ = require('lodash'),
path = require('path'),
glob = require("glob");

const cl = console.log;

const item = 'roleplays'

let arr = []
glob(item + "/**/*.json", function (ere, items) {

  _.forEach(items, function(i){
    arr.push(path.basename(i).slice(0,-5))
  })

  fs.readJson('./index.json', function(err,res){
    if(err){return cl(err)}
    res[item] = arr;
    fs.writeJson('index.json', res, function(err){
      if(err){return cl(err)}
    })
  })
})

/*
fs.readJson(item +'.json', function(err,res){
  if(err){return cl(err)}
  _.forIn(res, function(i,e){
    fs.writeJson(_.join([item, e], '/') + '.json', {data: i}, function(err){
      if(err){return cl(err)}
    })
  })
})
*/
