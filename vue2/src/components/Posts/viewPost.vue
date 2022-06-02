<template>
  <div class="card text-center">
    <div class="card-header">
      POST DETAILS
    </div>
    <div class="card-body">
      <h5 class="card-title">Title:{{this.title}}</h5>
      <p class="card-text">Body:{{this.body}}</p>
      <a class="btn btn-primary" @click="back">Back</a>
    </div>
    <div class="card-footer text-muted">
      End
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "viewPost",
  data(){
    return{
      id:"",
      title:"",
      body:"",
    }

  },
  created() {
    this.getPostDetails();
  },
  methods:{
   async getPostDetails(){
     this.id=this.$route.params.id;
     await axios.get(` http://localhost:2000/POSTS/${this.id}`)
         .then((res)=>{
           this.title=res.data.title,
               this.body=res.data.body
         })



    },
    back(){
      this.$router.push('/posts')
    }

  },
}
</script>

<style scoped>

</style>