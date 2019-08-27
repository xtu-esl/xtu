const fs = require('fs-extra'),
glob = require("glob"),
min = require('./min'),
path = require('path'),
gz = require('./gz'),
_ = require('lodash');

const cl = console.log;

const files = {
  "html":[
    "./dev/html/app.html",
    "./dev/html/mobile.html",
    "./dev/html/electron.html"
  ],
  "css": [
    "./dev/css/materialize.min.css",
    "./dev/css/styles.min.css",
    "./dev/css/dark.min.css",
  ],
  "js": {
    "vendor": [
      "./dev/js/lodash.js",
      "./dev/js/jquery.js",
      "./dev/js/materialize.js",
      "./dev/js/wow.js",
      "./dev/js/tag.js"
    ],
    "app": [
      "./dev/js/tpl.js",
      "./dev/js/utils.js",
      "./dev/js/app.js"
    ]
  }
}


const minify = {
  minHTML: function(){
    fs.readFile(files.html[0], 'utf8',function(err,res){
      if(err){return cl(err)};
      fs.writeFile('./index.html', min.minHTML(res), function(err, res){
        if(err){return cl(err)};
        cl(path.basename(files.html[0]) +' minified')
        return gz('./index.html');
      })
    })
  },
  minCSS: function(){
    fs.readFile(files.css[0], 'utf8', function(err,res){
      if(err){return cl(err)};
      let str = '';
      str += res;
      fs.readFile(files.css[1], 'utf8', function(err,res){
        if(err){return cl(err)};
        str += res;
        fs.writeFile('./app/css/styles.min.css', min.minCSS(str), function(err, res){
          if(err){return cl(err)};
          cl(path.basename(files.css[0]) +' minified')
          gz('./app/css/styles.min.css');
        })
      })
    })
    fs.readFile(files.css[2], 'utf8', function(err,res){
      if(err){return cl(err)};
      fs.writeFile('./app/css/dark.min.css', min.minCSS(res), function(err, res){
        if(err){return cl(err)};
        cl(path.basename(files.css[2]) +' minified')
        gz('./app/css/dark.min.css');
      })
    })
  },
  minJS: function(){
    try {
      let str = '',
      str2 = '';
      _.forEach(files.js.vendor, function(i){
        try {
          str += fs.readFileSync(i, 'utf8')
        } catch (err) {
          if(err){return cl(err)};
        }
      })
      _.forEach(files.js.app, function(i){
        try {
          str2 += fs.readFileSync(i, 'utf8');
        } catch (err) {
          if(err){return cl(err)};
        }
      })
      cl(str2)
      fs.writeFileSync('./app/js/app.js', str + min.minJS(str2).code);
      cl('app.js created')
      gz('./app/js/app.js');
      str = '';
      try {
        str += fs.readFileSync('./dev/js/chat.js', 'utf8')
        fs.writeFileSync('./app/js/chat.js', min.minJS(str).code);
        cl('chat.js created')
        gz('./app/js/chat.js');
      } catch (err) {
        if(err){return cl(err)};
      }
    } catch (err) {
      if(err){return cl(err)};
    }
  },
  gzipDownloads: function(){
    _.forEach(['docx', 'pdf'], function(i){
      glob("./app/downloads/**/*."+ i, function (err, items) {
        _.forEach(items, function(e){
          gz(e);
        })
      })
    })
  },
  gzipAudio: function(){

    glob("./app/audio/**/*.*", function (err, items) {
      _.forEach(items, function(e){
        gz(e);
      })
    })

  },
  minJSON: function(){
    glob("./app/**/*.json", function (err, items) {
      _.forEach(items, function(i){
        fs.readJson(i, function(err,res){
          if(err){return cl(err)};
          fs.writeJson(i, res, function(err){
            if(err){return cl(err)};
            gz(i);
          })
        })
      })
    })
  }
}


//minify.minCSS()
//minify.minJS();
//minify.gzipAudio()
//minify.minHTML()
//minify.gzipDownloads()
//minify.minJSON()
