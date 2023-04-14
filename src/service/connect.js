import $router from '@/router';
import axios from 'axios';

let Service = axios.create({
    baseURL: 'http://localhost:3100/',
    timeout: 1000
})

Service.interceptors.response.use(
    (response) => {
        console.log('Interceptor', response);
        return response;
    },
    (error) => {
        if(error.response.status == 401){
            console.error('Interceptor', error.response)
        }
    }
);

let Auth = {
    async signUp(userData) {
        let post = await Service.post('/user', userData);
        return post
    },
    async login(email, password){
        let response = await Service.post("/login",{
           email: email,
           password: password
        });
        console.log(response)
        let user = await response.data;
        localStorage.setItem("user", JSON.stringify(user)); 
        return true;
    },
    logout(){
        localStorage.removeItem("user");
    },
    getUser(){
      return JSON.parse(localStorage.getItem("user"))  
    },
    getToken(){
      let user = Auth.getUser();
      if(user && user.token){
          return user.token
      }
      else{
          return false;
      }
    },
    state: {
        get authenticated() {
            return Auth.authenticated();
        },
        get userEmail(){
            let user = Auth.getUser()
            if (user){
                return user.email;
            }
        }
    }
}

let Laundry = {
    async postLaundryData(laundryData){
        let sendData = await Service.post('/laundry_data', laundryData);
        return sendData;
    },
    async fetchLaundryData(userEmail){
        let response = await Service.get(`/laundry_data/${userEmail}`);

        let data = await response.data;
        return data;
    },
    
}

let Comments = {
    async postComment(commentData){
        let sendData = await Service.post('/comment', commentData);
        return sendData;
    },
    async fetchComments(){
        let response = await Service.get(`/comments`);

        let data = response.data;
        return data;
    },
    async deleteComments(id){
        let response = await Service.get(`/comments/delete/${id}`);
        
        let data = await response.data;
        return data;
    },
}

export  { Auth, Comments, Laundry }