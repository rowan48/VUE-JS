<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Image</th>
      <th scope="col">Delete</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="post  in posts " :key="post.id">
      <th scope="row">{{post.id}}</th>
      <td>{{post.title}}</td>
      <td>{{post.body}}</td>
      <td><a href={{post.image}}></a></td>
      <td>
        <router-link :to="`/posts/${post.id}`" class="btn btn-primary"> Details</router-link>
        <router-link :to="`/posts/edit/${post.id}`" class="btn btn-secondary mx-2">Update</router-link>
        <router-link :to="`/posts/delete/${post.id}`" class="btn btn-danger mx-2">Delete</router-link>


      </td>

    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';
export default {
  name: "getPosts",
  data(){
    return{
      posts:[],
    }
  },
  created() {
    this.getAllposts();
  },
  methods:{
    async getAllposts(){
      await axios.get('http://localhost:2000/posts')
          .then((res)=>{
            this.posts=res.data;

      })

    }
  },
}
</script>

<style scoped>

</style>