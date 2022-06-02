<template>
<div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "deletePost",
  created() {
    this.id=this.$route.params.id;
    axios.delete(`http://localhost:2000/posts/${this.id}`)
        .then(response => {
          console.log(response);
          this.$router.push('/posts')
        });
  },
  methods:{

  }
}
</script>

<style scoped>

</style>