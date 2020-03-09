/*
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-03-09 13:22:21
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-09 13:54:38
 */
import Vue from 'vue'
import SvgIcon from '../../UI/SvgIcon.vue'
// 全局注册组件
Vue.component('svg-icon', SvgIcon)
// 定义一个加载目录的函数
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../../assets/icons', false, /\.svg$/)
// 加载目录下的所有 svg 文件
requireAll(req)