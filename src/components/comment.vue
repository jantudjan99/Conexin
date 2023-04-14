<template>
<div class="container-fluid py-5">
        <div class="container">
            <h1 class="display-4 text-center mb-5">Client Reviews</h1>
            <div v-for="comments in allComments" :key="comments.id" class="owl-carousel testimonial-carousel">
                <div class="testimonial-item" style="position:relative">
                    <img class="position-relative rounded-circle bg-white shadow mx-auto" src="@/assets/img/User_icon_2.svg.png" style="width: 100px; height: 100px; padding: 12px; margin-bottom: -50px; z-index: 1;" alt="">
                    <div class="bg-light text-center p-4 pt-0">
                        <span v-if="auth.userEmail==comments.user">Delete your comment: <button @click="deleteComment(comments._id)" style="background-color:transparent;border:0px"><i class="fa fa-trash" style="color:red" aria-hidden="true"></i></button></span>
                        <h5 class="font-weight-medium mt-5">{{comments.user}}</h5>
                        <p v-if="comments.review=='Good'"><Icon icon="ion:thumbs-up" color="green" /></p>
                        <p v-if="comments.review=='Bad'"><Icon icon="ion:thumbs-up" color="red" :rotate="2" /></p>
                        <p class="m-0" style="color:black;font-size:12px">{{comments.newComment}}</p>
                        <br>
                        <p class="m-0" style="font-style:italic;font-size:10px">{{comments.postedAt}}</p>
                    </div>
                </div>
            </div>
            <div class="card-footer py-3 border-0" style="background-color: #f8f9fa;">
            <div class="d-flex flex-start w-100">
              <div class="form-outline w-100">
                <textarea
                  v-model="newComment"
                  class="form-control"
                  id="textAreaExample"
                  rows="4"
                  style="background: #fff;"
                ></textarea>
              </div>
              
            </div>
            <div class="float-end mt-2 pt-1">
              <button type="button" class="btn btn-primary btn-sm" @click.prevent="AddComment()">
                Add a comment
              </button>
              Do you like our service?
              <button style="border-width:thin;border-radius: 100px;"><Icon @click="like()" icon="ion:thumbs-up" color="green" /></button>
              <button style="border-width:thin;border-radius: 100px;"><Icon @click="dislike()" icon="ion:thumbs-up" color="red" :rotate="2" /></button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { Comments } from '@/service/connect.js'
import { Auth } from '@/service/connect.js'

export default {
  name: 'Home',
    components: {
		Icon,
	},
  data:function(){
    return{
      auth: Auth.state,
      newComment:'',
      allComments:[],
      review:'',
    }
  },
  methods:{
    AddComment(){
      if(this.auth.userEmail)
      {
      let date = new Date(Date.now()).toLocaleDateString()
      let time = new Date(Date.now()).toLocaleTimeString()
      let comment = {
                newComment: this.newComment,
                postedAt: date + " in " + time,
                user: this.auth.userEmail,
                review: this.review,
            }
      console.log(comment)
      Comments.postComment(comment);
      this.$router.push({path:'/'})
            .then(() => {
              this.$router.go();
      });
    }
    },
    like(){
      this.review = 'Good';
    },
    dislike(){
      this.review = 'Bad';
    },
    async deleteComment(id){
      
      await Comments.deleteComments(id)
      this.$router.push({path:'/'})
            .then(() => {
              this.$router.go();
      });
    }

  },
  async created(){
    this.allComments = await Comments.fetchComments();
    console.log("all comments: ",this.allComments)
  }
}
</script>