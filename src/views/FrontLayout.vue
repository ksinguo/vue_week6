<template>
    這是前台頁面
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>|
    <RouterLink to="/Products">產品</RouterLink>|
    <RouterLink to="/Cart">購物車</RouterLink>|
    <hr>
    <RouterView></RouterView>
</template>
<script>
    import {RouterView} from 'vue-router'
    export default{
        components:{
            RouterView
        }
    }
</script>
