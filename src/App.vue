<!--
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-01-20 20:07:01
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-09 21:05:38
 -->
<template>
    <div id="app" class="app" data-server-rendered="true">
        <keep-alive>
            <app-header></app-header>
        </keep-alive>
        <main class="app-main">
            <router-view></router-view>
        </main>

        <!-- <keep-alive> -->
            <app-footer></app-footer>
        <!-- </keep-alive> -->
    </div>
</template>
<script>
import appFooter from './views/Footer.vue'
import appHeader from './views/Header.vue'
export default {
    data() {
        return {};
    },
    components: {
        appFooter,
        appHeader
    }
};
</script>
<style lang="stylus">
@import url("./assets/icons/font/iconfont.css");
</style>
<style lang="stylus" >
font-size = 14px
* {
    margin 0
    padding 0
    /*font: 3vmin Helvetica, Arial, sans-serif*/
    font: font-size Helvetica, Arial, sans-serif
}
ul 
    display flex
    align-items center

ul>li 
    list-style none
    flex 1

a 
    color inherit
    font-style normal
    text-decoration none

.app
    display flex
    flex-direction column
    height 100vh

.app-main 
    flex 1
</style>