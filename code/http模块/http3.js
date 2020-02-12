//引入模块
const http = require('http');

const fs = require('fs');

//创建服务
const server = http.createServer(function (req, res) {
    if (req.url === '/index.html') {
        let httpStr = fs.readFileSync('index.html', 'utf8');
        res.end(httpStr);
    } else if (req.url === '/style.css') {
        res.setHeader('content-type', 'text/css;charset=utf-8');
        let cssStr = fs.readFileSync('style.css', 'utf8');
        res.end(cssStr);
    } else if (req.url === '/6.png') {
        res.setHeader('content-type', 'image/png');
        let pngStr = fs.readFileSync('6.png');
        res.end(pngStr);
    } else {
        res.end('404');
    }
});

//启动端口监听
server.listen(8084, function () {
    console.log('您好,服务器启动成功! 8084端口正在监听');
});