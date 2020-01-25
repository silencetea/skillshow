/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-01-25 13:58:37
 * @LastEditors  : silencetea
 * @LastEditTime : 2020-01-25 14:10:55
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({
            y: 0
        }),
        routes: [
            { path: '/'}
        ]
    })
}