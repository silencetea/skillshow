<!--
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-02-15 00:01:18
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-09 21:25:14
 -->
<template>
    <footer class="footer">
        <ul>
            <li>
                <router-link to="/">
                    <span class="iconfont">&#xe6ef;</span>
                    <span>概览</span>
                </router-link>
            </li>
            <li>交易</li>

            <li>
                <div class="ss-add" style="background: #FFF; border: 0px">
                    <router-link to="/add-consumption"
                            class="ss-add">+</router-link>
                </div>
            </li>
            
            <li>预算</li>
            <li>我的</li>
        </ul>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            
        };
    },
    components: {},
    mounted() {
        // console.log(456)
    }
};
</script>
<style lang="stylus" scoped>
footer-height = 36px
footer-height2 = 48px
footer-add = 48px
footer-color = #3dafe6b3
footer-color-hover = #3dafe6
footer-color3 = #f9ff09
footer-font = #333
footer-font-hover = #3dafe6

ul
    height 100%
    border-top 1px solid footer-color

ul>li 
    text-align center
    display flex
    justify-content center
    color footer-font

ul>li:hover
    color footer-font-hover
    cursor pointer

ul>li>a 
    display flex


.footer

    height footer-height
    
.ss-add
    position absolute
    bottom 0
    font-size: footer-add; 
    color: #fff
    display: block; 
    width: footer-height2 
    height: footer-height2
    line-height footer-add
    border-radius: 50%;
    background footer-color
    border-left 1px footer-color solid
    border-top 1px footer-color solid
    border-right 1px footer-color solid
    
.ss-add:hover
    background footer-color-hover

</style>
