//目标: 让放在某个文件夹下的所有静态资源都能访问

//引入模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

//所有静态资源放置的地方
const STATIC_PATH = 'public';

//创建服务
let server = http.createServer((req, res) => {
    //获取当前用户要访问的静态资源
    //console.log(req.url);

    //拼接服务器上对应的文件地址
    let filepath = path.join(__dirname, STATIC_PATH, req.url);
    //console.log(filepath);

    //集中设置content-type映射关系
    const TYPE_MAP = {
        '.html': 'text/html;charset=utf-8',
        '.css': 'text/css;charset=utf-8',
        '.js': 'application/javascript',
        '.png': 'image/png'
    }
    try {
        //读出来,并返回
        let rs = fs.readFileSync(filepath);
        //分别设置响应头content-type
        //获取文件扩展名
        let extname = path.extname(req.url);

        if (TYPE_MAP[extname]) {
            res.setHeader('content-type', TYPE_MAP[extname]);
        }

        // if (extname === '.html') {
        //     res.setHeader('content-type', 'text/html;charset=utf-8');
        // } else if (extname === '.css') {
        //     res.setHeader('content-type', 'text/css;charset=utf-8');
        // } else if (extname === '.js') {
        //     res.setHeader('content-type', 'application/javascript');
        // } else if (extname === '.png') {
        //     res.setHeader('content-type', 'image/png');
        // }

        res.end(rs);
    } catch (err) {
        res.setHeader('content-type', 'text/html;charset=utf-8');
        res.statusCode = 404;
        res.end(`${req.url} 没有找到`);
    }


});

//启动端口监听
server.listen(8084, function () {
    console.log("亲爱的,您的服务器在8084端口启动...");
});