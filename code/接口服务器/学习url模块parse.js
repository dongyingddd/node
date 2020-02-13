//用url模块来解析get请求的参数
//用来处理req.url这个属性,从中拆出请求地址和请求参数

//引入核心模块
const http = require('http');
const url = require('url');

//创建服务器
const server = http.createServer((req, res) => {
    let obj = url.parse(req.url, true);
    console.log(obj);
    console.log(obj.pathname);
    console.log(obj.query);

    res.end();
});

//启动端口监听
server.listen(8084, () => {
    console.log("大人,服务器启动成功,8084端口正在监听....");

});