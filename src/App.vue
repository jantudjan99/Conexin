<template>
  <div id="app">
    
    <!-- ***** Header Area Start ***** -->
  <header class="header header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
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
            <input class="menu-btn" type="checkbox" id="menu-btn">
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top">Home</a></li>
              <li class="scroll-to-section"><a href="#services">Services</a></li>
              <li class="scroll-to-section"><a href="#about">About</a></li>
              <li class="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
              <li class="scroll-to-section"><a href="#karijera">Karijera</a></li> 
              <!-- <li class="scroll-to-section"><a href="#contact">Contact Us</a></li> -->
              <li class="scroll-to-section"><div class="main-red-button-hover"><a href="#contact">Contact Us Now</a></div></li> 
            </ul>   
            <!--<a class='menu-trigger'>
                <span>Menu</span>
            </a>-->
            <!-- ***** Menu End ***** -->
          </nav>
          <!--<transition name="zoomOut" mode="out-in">
            <router-view @user-info="triggerFeedback" @set-nav-state="setNavigationState" @set-lang="updateLang" :web-data-global="webData" :key="webData.key"/>
          </transition>-->
        </div>
      </div>
    </div>
    <!--
    <header class="header">
    <a href="#" class="logo">Logo</a>
    <input class="menu-btn" type="checkbox" id="menu-btn">
    <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
    <ul class="menu">
        <li><a href="about">About</a></li>
        <li><a href="ourWork">Our Work</a></li>
        <li><a href="testamonials">Testamonials</a></li>
        <li><a href="contact">Contact</a></li>
    </ul>
  </header>-->
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
@import './style/conexin-design.css';
</style>

