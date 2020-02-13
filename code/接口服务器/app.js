
//引入核心模块
const http = require('http');

//引入自定义模块
const msg = require('./msg');

//创建服务器
const server = http.createServer((req, res) => {

    if (req.url === '/getmsg' && req.method === 'GET') {
        //假设经过很多运算得到数据
        // let data = [
        //     { id: 1, name: '张三', conent: '寒雨连江夜入吴', dt: 12343544354 },
        //     { id: 2, name: '李四', conent: '窗前明月光', dt: 123435444567 },
        // ];
        let data = msg.get();
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(data));
    } else {
        res.end('404');
    }
});

//启动端口监听
server.listen(8084, () => {
    console.log("大人,您的服务器在8084端口启动.....");
});