//引入核心模块
const fs = require('fs');
const path = require('path');

const DATA_FILE = '/message.json';
//message.json文件的绝对路径
let filepath = path.join(__dirname, DATA_FILE);

const getMsg = () => {
    let rs = fs.readFileSync(filepath, 'utf-8');
    console.log("rs", rs, __dirname);
    let arr = JSON.parse(rs);
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
        console.log("在数组中找出id值", item);
        return item.id == id
    })
    //console.log("在数组中找出id值2", idx);

    arr.splice(idx, 1);
    //3. 将新数组写回文件
    fs.writeFileSync(filepath, JSON.stringify(arr));
}

delMSg(5);