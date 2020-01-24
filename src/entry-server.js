/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-01-23 19:00:41
 * @LastEditors  : silencetea
 * @LastEditTime : 2020-01-25 00:34:11
 */
import {
    createApp
} from './app'
export default context => {
    const {
        app
    } = createApp()
    return app
}