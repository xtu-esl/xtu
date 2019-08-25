const CleanCSS = require('clean-css'),
UglifyJS = require("uglify-es"),
minifyHTML = require('html-minifier').minify;

const min = {
  minCSS: function(i){
    try {
      let res = new CleanCSS().minify(i);
      return res.styles;
    } catch (err) {
      if(err){return null}
    }
  },
  minHTML: function(i){
    try {
      return minifyHTML(i,{collapseWhitespace:true, removeComments:true})
    } catch (err) {
      if(err){return null}
    }
  },
  minJS: function(i){
    try {
      return UglifyJS.minify(i)
    } catch (err) {
      if(err){return null}
    }
  }
}

module.exports = min;
