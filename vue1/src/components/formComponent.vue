<template>
  {{rank}}

  <form @submit.prevent="formHandle">
    <label for="name">Name:</label>
    <input type="text" v-model="formValues.name" id="name" name="name" ><br>
    <label for="age">Age:</label>
    <input type="text" v-model="formValues.age" id="age" name="age" ><br><br>
    <label for="address">Address:</label>
    <input type="text" v-model="formValues.address" id="adress" name="adress" ><br><br>
    <button class="btn btn-sm btn-success">submit</button>
  </form>
  <div>
    <input type="radio" id="admin" v-model="rank" name="rank" value="admin" />
    <label for="admin">Admin</label><br>
    <input type="radio" id="student" name="rank" v-model="rank" value="student" />
    <label for="student">Student</label>
  </div>
</template>
<script>
export default {
  name: "formComponent",
  data() {
    return {
      formValues: {name: "", age: "", address: ""},
      rank: ""
    }
  },

  methods: {
    formHandle(e) {
      e.preventDefault();
      if (this.rank === "student") {
        this.$emit("student", this.formValues);
        console.log("Students", this.formValues)
      } else if (this.rank === "admin") {
        this.$emit("admin", this.formValues);
        console.log("Admin", this.formValues)
      }
    }

  },
  emits:['admin','student']

}
</script>

<style scoped>

</style>