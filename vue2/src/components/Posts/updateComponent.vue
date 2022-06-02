<template>
  <div>
    <div class="card  w-50 my-5 mx-5">
      <div class="card-body">

        <form @submit.prevent="updatePost">
          <div class="mb-3">
            <label  class="form-label">Title</label>
            <input type="text" v-model="title" class="form-control" >
          </div>
          <div class="mb-3">
            <label  class="form-label">Body</label>
            <input type="text" v-model="body" class="form-control">
          </div>
          <button type="submit"  class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "updateComponent",
  data(){
    return{
      id:"",
      title:"",
      body:"",
    }
  },
  methods:{
    async updatePost(){
      this.id=this.$route.params.id;
      await axios.put(`http://localhost:2000/posts/${this.id}`,{
        title:this.title,
        body:this.body
      })
          .then((res)=>{
            console.log(res.data)
            this.$router.push('/posts')

          })
          .catch((err)=>{
            console.log(err)
          })

    },
  }
}
</script>

<style scoped>

</style>