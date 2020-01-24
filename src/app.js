/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-01-19 21:34:52
 * @LastEditors  : silencetea
 * @LastEditTime : 2020-01-25 00:36:46
 */
import Vue from 'vue'
import App from './App.vue'

export function createApp() {
    const app = new Vue({
        render: h => h(App)
    })

    // 返回 app
    return {
        app
    }
}