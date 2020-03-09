/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-01-25 13:58:37
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-09 21:24:41
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
            { path: '/', redirect: '/home' },
            { path: '/home', name: 'home', component: () => import('../views/Home.vue') },
            { path: '/add-consumption', name: 'add-consumption', component: () => import('../views/AddConsumption.vue') },
        ]
    })
}