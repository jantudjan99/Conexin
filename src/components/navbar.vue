<template>
<div>
<div class="container-fluid py-3" style="background-color:green">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                </div>
            </div>
        </div>
    </div>
<div class="container-fluid position-relative nav-bar p-0">
        <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9;">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="" class="navbar-brand">
                    <h1 class="m-0"><span class="text-green">TouristGuide</span></h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div class="navbar-nav ml-auto py-0">
                        <router-link to="/" class="nav-item nav-link">Home</router-link>
                        <router-link to="/about" class="nav-item nav-link">About us</router-link>
                        <router-link v-if="!auth.userEmail" to="/login" class="nav-link" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab">Login</router-link>
                        <router-link v-if="!auth.userEmail" to="/register" class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab">Register</router-link>
                        <p class="userInfo" v-if="auth.userEmail!==''">{{auth.userEmail}}</p>
                        <router-link v-if="auth.userEmail" to="/reservation_laundry" class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab">Reserved laundry</router-link>
                        <router-link to="" v-if="auth.userEmail" class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab" @click="signOut()">Sign out</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
import store from '@/store.js'
import { Auth } from '@/service/connect.js';
export default{
    data:function(){
    return { 
      store,
      auth: Auth.state,
    }
  },
  methods:{
    signOut()
    {
        Auth.logout();
        this.$router.go();
	},
  }
}
</script>

<style>


</style>
