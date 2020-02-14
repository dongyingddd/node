//向同级目录下的message.json的内容中插入一条记录

//文件模块
const fs = require('fs');
//路径模块
const path = require('path');

const DATA_FILE = "message.json"

//操作的文件的绝对路径
let filepath = path.join(__dirname, DATA_FILE);

/*
* 获取留言
*/
const getMsg = () => {
    //使用同步的方式读
    let rs = fs.readFileSync(filepath, 'utf8');
    //把json字符串=>js中的数据-数组
    let arr = JSON.parse(rs);
    return arr;
}

/**
 * 添加留言
 */
const addMSg = (name, content) => {
    //分析: 如何向一个.json文件中添加一条数据
    //思路:
    //1. 读出文件内容,转换成数组
    let arr = getMsg();
    //2. 用数组的append方法添加一条记录
    let id = 1;
    if (arr.length) {
        id = arr[arr.length - 1].id + 1;
    }

    let obj = {
        id,
        name,
        content,
        dt: Date.now()
    }

    arr.push(obj);

    //把当前数组写回到文件中去
    //采用同步的格式写入
    //把数组转字符串再写入
    fs.writeFileSync(filepath, JSON.stringify(arr));

    return arr;
}

let rs = addMSg('小张', '今天休息一天');
console.log(rs);

