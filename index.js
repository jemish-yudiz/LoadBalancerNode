// * This is Two Servers Running on Different Ports

const http = require('http');

const server = (host, port, timeout) => {
    http.createServer((req, res) => {
        setTimeout(()=> {
            res.writeHead(200).end(`Server Response on http://${host}:${port}`);
        }, timeout)
    }).listen((port), (host), () => {
        console.log(`Server listening on http://${host}:${port}`);
    });
};

server('localhost', 3012, 200);
server('localhost', 3013, 400);