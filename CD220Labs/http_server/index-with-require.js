const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  let date = new Date();
  let hour = date.getHours(date);
  let message = '';

  if (hour >= 0 && hour < 12 ){
      message = 'Good morning!';
  } else if ( hour >= 12 && hour > 18) {
      message = 'Good afternoon!'
  } else if ( hour >= 18 && hour < 21){
      message = 'Good evening!'
  } else {
      message = 'Good night!'
  }
  res.end(`Hello,  ${message}: ${today.getDate()}`);
}

const port = 8082;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);