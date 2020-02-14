//使用核心模块的步骤
//1. 引入模块
//require('fs)是把fs这个模块中的代码执行一次,并把执行结果保存在常量fs中
const fs = require('fs');



//2.使用模块的api

//2.1 文件内容读取

//假设目标是要读出当前文件夹在的01.js的内容
//异步格式
// fs.readFile('01.js', 'utf-8', (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data);

// });

//同步格式
// const jsHtml = fs.readFileSync('01.js', 'utf8');
// console.log(jsHtml);

//2.2 文件写入
//覆盖写入
// fs.writeFile('./a.txt', '中华人民共和国', 'utf-8', err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });

// fs.appendFile('./a.txt', ',为天地立命', 'utf8', err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// });
