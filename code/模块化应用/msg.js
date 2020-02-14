//引入核心模块
const fs = require('fs');
const path = require('path');

const DATA_FILE = '/message.json';
//message.json文件的绝对路径
let filepath = path.join(__dirname, DATA_FILE);
/**
 * 获取留言
 */
const getMsg = () => {
    let rs = fs.readFileSync(filepath, 'utf-8');
    //console.log("rs", rs, __dirname);
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

/**
 * 删除
 */
const delMSg = id => {
    //1. 取出全部数据
    let arr = getMsg();
    // console.log("在数组中找出id值1", id, arr);
    //2. 在数组中找出id值为指定参数的那条记录,然后删除它
    let idx = arr.findIndex(item => {
        //console.log("在数组中找出id值", item);
        return item.id == id
    })
    //console.log("在数组中找出id值2", idx);

    arr.splice(idx, 1);
    //3. 将新数组写回文件
    fs.writeFileSync(filepath, JSON.stringify(arr));
}

module.exports = {
    "get": getMsg,
    "add": addMSg,
    "del": delMSg
}