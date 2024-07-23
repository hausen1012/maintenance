const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000; // 你可以更改端口号

const server = http.createServer((req, res) => {
    // 设置 Content-Type 为 text/html
    res.writeHead(200, {'Content-Type': 'text/html'});

    // 读取 index.html 文件并发送内容
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            console.error('Error reading index.html:', err);
            return;
        }

        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
