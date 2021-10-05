<template>
  <UserNavbar></UserNavbar>
  <div class="container-fluid position-relative px-0">
    <router-view></router-view>
    <ToastMessages></ToastMessages>
    <LikesList></LikesList>
    <ToTop></ToTop>
  </div>
  <Userfooter></Userfooter>
</template>
<script>
// @ is an alias to /src
import UserNavbar from '@/components/UserNavbar.vue'
import Userfooter from '@/components/Userfooter.vue'
import ToastMessages from '../components/ToastMessages.vue'
import LikesList from '@/components/LikesList.vue'
import ToTop from '@/components/BackToTop.vue'
import emitter from '@/methods/emitter'

export default {
  name: 'Home',
  components: {
    UserNavbar,
    Userfooter,
    LikesList,
    ToTop,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
