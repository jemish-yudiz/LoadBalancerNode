// * This is our LoadBalancer Server who's going to get request and distributes the load between thoes(serverList) two servers.

const http = require('http');
const roundRobin = require('./roundRobin');
const leastConnection = require('./leastConnection');

const serverList = [
    { host: 'localhost', port: 3012, connections: 0 },
    { host: 'localhost', port: 3013, connections: 0 },
];

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return;

    roundRobin(serverList, req, res);
    // leastConnection(serverList, req, res);
});

server.listen(3011, ()=> {
    console.log(`Load balancer listening on port http://localhost:3011`);
})