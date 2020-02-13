// 目标：
// 提供接口服务器的功能。
// 用户以 GET 方式来访问 http://localhost:8084/getmsg 返回数据给用户
// 参数:
//    dt: 可选的。时间戳。 
//      如果用户传入了dt，则表示只返回大于此时间戳记录。
//         http://localhost:8084/getmsg?dt=1581386323940  
//      如果不传入，则表示直接返回所有的留言数据.
// 
// 通过postman的验证


//引入核心模块
const http = require('http');
const url = require('url');

//引入自定义模块
const msg = require('./msg');

//创建服务器
const server = http.createServer((req, res) => {

    let obj = url.parse(req.url, true);
    //console.log(obj);
    console.log(obj.pathname);
    console.log(obj.query.dt);

    if (obj.pathname === '/getmsg' && req.method === 'GET') {
        //假设经过很多运算得到数据
        // let data = [
        //     { id: 1, name: '张三', conent: '寒雨连江夜入吴', dt: 12343544354 },
        //     { id: 2, name: '李四', conent: '窗前明月光', dt: 123435444567 },
        // ];
        let data = msg.get();
        let dt = obj.query.dt;
        if (dt) {
            //在data数组中,只返回大于dt的记录
            let result = data.filter(function (item) {
                return item.dt > dt;
            });
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(result));
        } else {
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(data));
        }

    } else {
        res.end('404');
    }
});

//启动端口监听
server.listen(8084, () => {
    console.log("大人,您的服务器在8084端口启动.....");
});