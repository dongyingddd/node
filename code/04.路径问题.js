//引入核心模块
const fs = require('fs');

//
console.log(__dirname);

//调用fs的api
let data = fs.readFileSync(__dirname + "/a.txt", 'utf8');
console.log(data);
