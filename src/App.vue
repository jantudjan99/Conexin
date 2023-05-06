<template>
  <div id="app">
    
    <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <img src="@/images/conexin-logo.png">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
              <li class="scroll-to-section"><a href="#services">Services</a></li>
              <li class="scroll-to-section"><a href="#about">About</a></li>
              <li class="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
              <li class="scroll-to-section"><a href="#video">Videos</a></li> 
              <li class="scroll-to-section"><a href="#contact">Contact Us</a></li> 
              <li class="scroll-to-section"><div class="main-red-button-hover"><a href="#contact">Contact Us Now</a></div></li> 
            </ul>   
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
          <!--<transition name="zoomOut" mode="out-in">
            <router-view @user-info="triggerFeedback" @set-nav-state="setNavigationState" @set-lang="updateLang" :web-data-global="webData" :key="webData.key"/>
          </transition>-->
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
    
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

