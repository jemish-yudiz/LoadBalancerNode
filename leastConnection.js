const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const leastConnection = (servers, req, res) => {
    const targetServers = servers.sort((a, b) => a.connections - b.connections);
    const target = targetServers[0];
    target.connections++;
    
    console.log("Target server:", target);
    
    proxy.web(req, res, { target: `http://${target.host}:${target.port}` });

    res.on('finish', () => {
        target.connections--;
    });
}

module.exports = leastConnection;