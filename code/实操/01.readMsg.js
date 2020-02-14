//读出同级目录下message.json的内容,得到一个js数组
const fs = require('fs');
const path = require('path');

const DATA_FILE = '/message.json';
//message.json文件的绝对路径
let filepath = path.join(__dirname, DATA_FILE);

const getMsg = () => {
    let rs = fs.readFileSync(filepath, 'utf8');
    let arr = JSON.parse(rs);
    return arr;
}

let rs = getMsg();
console.log(rs);
