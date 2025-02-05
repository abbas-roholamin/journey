const http = require('http');
const hello = require('./modules/hello');
const EventEmitter = require('events');

const newCall = new EventEmitter();

newCall.on('call', () => {
    console.log(hello());
});

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    newCall.emit('call');
    res.end('Hello World\n');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:8000');
});
