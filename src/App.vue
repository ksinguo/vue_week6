<template>
  <div class="container"><RouterView></RouterView></div>
  
</template>

<script>
import {RouterView,RouterLink} from 'vue-router'
export default {
  components:{
    RouterLink,RouterView
  }
}
</script>

<style lang="scss">

</style>
