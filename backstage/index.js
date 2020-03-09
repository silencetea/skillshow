/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-03-08 19:12:51
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-08 22:27:14
 */
const {app} = require("./db/connect");
const userRouter = require("./routes/user");
app.use('/user', userRouter);
