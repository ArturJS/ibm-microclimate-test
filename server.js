const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from NodeJS! Powered by IBM Microclimate.');
});

server.listen(8080, () => {
    console.log('NodeJS server is up and running on 8080 port. Enjoy!');
});
