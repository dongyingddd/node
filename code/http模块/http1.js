//引入核心模块http
const http = require('http');

//创建服务
//回调函数:在每一次收到来自客户端的请求,它都会执行一次
const server = http.createServer(function (req, res) {
    //获取当前请求的方式
    console.log(req.method);

    //获取当前请求的url地址
    console.log(req.url);


    //获取访问本服务器的客户端ip
    console.log(req.connection.remoteAddress);

    //向客户端发送内容,并结束本次响应
    res.end('hello world');
});

//启动服务
//监听端口
server.listen(8081, function () {
    console.log("别用鼠标选中..........本次服务已经启动了,success");
});