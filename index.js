const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 4500; // 你可以根据需要修改端口号

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');

  // 检查请求的路径是否需要重定向
  if (req.url !== '/') {
    res.writeHead(302, { 'Location': '/' });
    res.end();
    return;
  }

  // 读取 index.html 文件并返回
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
