//引入核心模块http
const http = require('http');

const fs = require('fs');

//创建服务
//回调函数:在每一次收到来自客户端的请求,它都会执行一次
const server = http.createServer(function (req, res) {
    //对本次请求进行判断
    //如果用户请求的是 /index.html ,则读出index.html文件的内容,并返回给浏览器
    console.log('当前请求的资源地址是:', req.url);

    if (req.url === '/index.html') {
        // var htmlStr = 读出index.html文件内容
        var htmlStr = fs.readFileSync("index.html", "utf8");
        res.end(htmlStr);
    } else if (req.url === '/about.html') {
        var htmlStr = fs.readFileSync('about.html', 'utf8');
        res.end(htmlStr);
    } else {
        res.end('404');
    }

});

//启动服务
//监听端口
server.listen(8084, function () {
    console.log("别用鼠标选中..........本次服务已经启动了,success");
});