/*
 * @Descripttion: 单独抽离连接数据库的文件
 * @version: 
 * @Author: silencetea
 * @Date: 2020-03-08 21:45:31
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-08 21:56:59
 */
const express = require('express');
const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const option = require('./db_config');
// app.use(cors());  // 解决跨域
// app.use(bodyParser.json());   // json请求
// app.use(bodyParser.urlencoded({extended: false}));   // 表单请求

let pool;
repool();

function Result({code =1, msg='', data = {}}) {
    this.code = code;
    this.msg = msg;
    this.data = data;
}
function repool() {  // 断线重连机制
    pool = mysql.createPool({
        ...option,
        waitForConnections: true,  // 当无连接池可用时，等待（true）还是抛错（false）
        connectionLimit: 100,  // 连接数限制
        queueLimit: 0   // 最大连接等待数（0为不限制）
    });   // 创立连接池
    pool.on('error', err => err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(repool, 2000));
}
module.exports = {pool, Result, router, app}