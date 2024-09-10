const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

let currentServer = 0;

const roundRobin = (servers, req, res) => {
    const target = servers[currentServer];
    console.log("Target server:", target);
    currentServer = (currentServer + 1) % servers.length;
    
    proxy.web(req, res, { target: `http://${target.host}:${target.port}` });
}

module.exports = roundRobin;