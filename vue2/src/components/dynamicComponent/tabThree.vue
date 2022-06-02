<template>
  <h1>tab three</h1>
  <div v-for="name in names" :key="name.fname">
    <slot :fname="name.fname" :lname="name.lname"></slot>

  </div>
</template>

<script>
export default {
  name: "tabThree",
  data(){
    return{
      names:[
        {fname:'rowan',lname:'ahmed'},
        {fname:'reham',lname:'nader'},
      ]
    }
  },
}
</script>

<style scoped>

</style>