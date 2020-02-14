//引入http模块
const http = require('http');

//创建服务
const server = http.createServer((req, res) => {
    console.log(`来自${req.connection.remoteAddress}的客户端在${new Date().toLocaleTimeString()}访问了本服务器`);
    res.end(`<h1>hello worl! very good!!-dongying</h1>
             <p>${req.connection.remoteAddress}</p>
            `);
});

//启动服务
server.listen(8081, () => {
    console.log('服务器启动,请在http://localhost:8081中访问....');

});