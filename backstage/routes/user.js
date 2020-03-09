/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-03-07 23:07:35
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-08 22:14:27
 */
const {pool, router, Result} = require("../db/connect");


// let db = require("../db/db_mysql");
// const Unity = require("../unity/Unity");
// const r = Unity.send;

/*router.get('/user', function (req, res, next) {
    db.query('select * from user', function (err, rows) {
        if (err) {
            console.log("查询失败");
            res.send(r('', 200, 1, 'error'));
        } else {
            // console.log(rows);
            res.send(r(rows));

        }
    })
})*/

router.get('/', (req, res, next) => {
    pool.getConnection((err, connection) => {
        connection.query('select * from user', (err, rows) => res.json(new Result({data: rows})));
        connection.release();
    });
})



module.exports = router;