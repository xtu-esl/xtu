var static = require('node-static');

var file = new static.Server('./', { cache: 0 , headers:{
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}});

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8000);

console.log()
