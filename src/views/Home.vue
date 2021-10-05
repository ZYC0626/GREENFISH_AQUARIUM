<template>
  <!-- <UserNavbar></UserNavbar> -->
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="container">
      <!-- <Swiper></Swiper> -->
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import UserNavbar from '@/components/UserNavbar.vue'
// import Swiper from '@/components/Swiper.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
    // UserNavbar
    // Swiper
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
  }
}
</script>
