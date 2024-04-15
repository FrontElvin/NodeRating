const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type':
            'text/html'
    });

    res.end(`<h1>Скоро тут будет сервис рейтинга</h1>`);
});

server.listen('3000');

