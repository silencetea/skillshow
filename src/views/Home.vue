<!--
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-02-21 13:04:36
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-09 14:12:50
 -->
<template>
    <div class="home" >
        <ul>
            <li>
                <ul class="ss-date-label">
                    <li class="ss-date-detail">6月10日 星期六</li>
                    <li class="ss-date-amount">
                        <span>收入：+333</span>
                        <span>支出：-333</span>
                        </li>
                </ul>
                <ul class="ss-consume">
                    <li class="ss-consume-type">消费类型</li>
                    <li class="ss-consume-money">222</li>
                </ul>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    components: {},
    mounted() {
        // console.log(111)
    }
};
</script>

<style lang="stylus" scoped>
ul
    display flex
    justify-content space-between

.ss-date-label
    color #666
    font-size 12px
    border-bottom 1px solid  #ccc 
.ss-date-detail

.ss-date-amount
    max-width 200px

.ss-date-amount>span
    box-sizing border-box
    display inline-block
    width 100px
    padding 0 5px
.ss-consume 
    line-height 36px

.ss-consume-money
    width 100px
</style>