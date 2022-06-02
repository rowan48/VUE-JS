<template>
<div>
  <div class="card  w-50 my-5 mx-5">
    <div class="card-body">

  <form @submit.prevent="creatPost">
    <div class="mb-3">
      <label  class="form-label">Title</label>
      <input type="text" v-model="title" class="form-control">
    </div>
    <div class="mb-3">
      <label  class="form-label">Body</label>
      <input type="text" v-model="body" class="form-control">
    </div>
    <button type="submit"  class="btn btn-primary">Submit</button>
    <button class="btn btn-primary mx-2" @click="back">Back</button>
  </form>
    </div>
  </div>

</div>


</template>

<script>
import axios from 'axios';
export default {
  name: "createPost",
  data() {
    return {
      id: "",
      title:"",
      body:"",
    }
  },
  created() {
    // this.createPost();
  },
  methods:{
    async creatPost(){
      await axios.post('http://localhost:2000/posts',{
        title:this.title,
        body:this.body
      })
          .then((res)=>{
            console.log(res.data)

          })
          .catch((err)=>{
            console.log(err)
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