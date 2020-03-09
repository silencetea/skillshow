/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-03-08 20:43:17
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-08 20:57:03
 */
class Unity {
    /**
     * 统一返回参数
     * @param {object} data - 返回对象
     * @param {number} code - 状态码，默认200-成功
     * @param {number} status - 成功 1，失败 0，默认 1
     */
    send(data, code = 200, status = 1, msg = 'success') {
        if (status) {
            return {
                data,
                code,
                msg
            };
        } else {
            return {
                code,
                data: [],
                msg: data
            }
        }
    }
}

module.exports = new Unity();