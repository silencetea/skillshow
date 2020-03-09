<!--
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-02-20 22:12:36
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-08 22:42:56
 -->
<template>
    <div class="header">
        <header>记账</header>
        <!-- <button @click="getUser">get 请求 user数据</button> -->

    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            
        };
    },
    components: {},
    methods: {
        getUser: function() {
            axios.get('/user')
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    created() {
        this.getUser();
    },
    mounted() {
        // console.log(123)
    }
};
</script>
<style lang="stylus" scoped>
.header
    height 36px
    background #eee
</style>