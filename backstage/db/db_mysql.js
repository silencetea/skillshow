/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-02-20 22:40:15
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-07 22:47:39
 */
var mysql = require('mysql');
const config = require('./db_config');

var pool = mysql.createPool(config);

function query(sql, cb) {
    pool.getConnection(function(err, connection){
        connection.query(sql, function(err, rows){
            cb(err, rows);
            connection.release();
        });
    });
}

exports.query = query;

