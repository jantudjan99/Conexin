<template>
  <div id="app">
    
    <Navbar/>
    
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
import Navbar from '@/components/navbar.vue'
import store from '@/store.js'
export default{
  
    components:{
        Footer,
        Navbar
    }
}
</script>
<style lang="scss">
@import './style/animated.css';
@import './style/fontawesome.css';
@import './style/owl.css';
@import './style/templatemo-onix-digital.css';
</style>

