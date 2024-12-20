const http = require('http');

const requestListener = (request, response) => {
  try {
    // Your request handling logic here
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Request handling error:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
});

server.listen(8080);
console.log('Server is running on port 8080');