const zlib = require('zlib'),
fs = require('fs-extra');

function gz(url){
  try {
    const i = zlib.createGzip({
      level: 9,
      memLevel: 9,
      strategy: 0
    }),
    inp = fs.createReadStream(url),
    out = fs.createWriteStream(url + '.gz');
    inp.pipe(i).pipe(out);
    return true
  } catch (err) {
    if(err){return false}
  }
}


module.exports = gz;
