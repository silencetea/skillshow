/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-01-19 21:34:52
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-09 21:04:46
 */
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

export function createApp() {
    const router = createRouter();
    const app = new Vue({
        router,
        render: h => h(App)
    })

    // 返回 app
    return {
        app,
        router
    }
}