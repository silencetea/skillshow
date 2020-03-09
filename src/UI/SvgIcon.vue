<!--
 * @Descripttion: 
 * @version: 
 * @Author: silencetea
 * @Date: 2020-03-09 13:18:30
 * @LastEditors: silencetea
 * @LastEditTime: 2020-03-09 13:32:33
 -->
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
    export default {
        name: "svg-icon",
        props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String
            }
        },
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`;
            },
            svgClass() {
                if (this.className) {
                    return "svg-icon " + this.className;
                } else {
                    return "svg-icon";
                }
            }
        }
    };
</script>

<style scoped >
    
</style>