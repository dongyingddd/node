
//从前端到后台实现留言板功能

//引入模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const msg = require('./msg');
const querystring = require('querystring');

//静态资源统一存放的位置
const STATIC_PATH = 'public';

//集中设置content-type映射关系
let TYPE_MAP = {
    ".html": "text/html;charset=utf-8",
    ".css": "text/css;charset=utf-8",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpg"
}

//创建服务器
const server = http.createServer((req, res) => {
    let obj = url.parse(req.url, true);
    console.log(req.url);

    if (req.url !== '/favicon.ico') {
        if (obj.pathname === "/getmsg" && req.method === "GET") {
            //get请求
            //如果是 /getmsg,就应该执行接口的功能
            let data = msg.get();
            res.setHeader('content-type', 'application/json');
            let sData = {
                code: 200,
                data: data
            }
            res.end(JSON.stringify(sData));
        } else if (obj.pathname === "/addmsg" && req.method === "POST") {
            //post请求
            //获取post过来的参数
            let result = "";
            req.on("data", buf => {
                result += buf;
            });
            req.on("end", () => {
                //把查询字符串转成对象
                //let obj = querystring.parse(result);
                let { name, content } = querystring.parse(result);
                //保存到massage.json来实现添加功能
                msg.add(name, content);

                let rs = {
                    code: 200,
                    msg: "添加成功"
                }
                res.setHeader("content-type", "application/json;charset=utf-8");
                res.end(JSON.stringify(rs));
            });
        } else {
            //如果不是借口,就直接去public下读文件
            let filepath = path.join(__dirname, STATIC_PATH, req.url);
            try {
                let rs = fs.readFileSync(filepath);
                let extname = path.extname(req.url);
                if (TYPE_MAP[extname]) {
                    res.setHeader('content-type', TYPE_MAP[extname]);
                }
                res.end(rs);
            } catch (err) {
                res.setHeader("content-type", "application/json;charset=utf-8");
                res.statusCode = 404;
                res.end(`${req.url} 没有找到`);
            }
        }
    }

});

//启动端口监听
server.listen(8084, () => {
    console.log("大人, 服务器启动成功,8084端口正在监听....");

});