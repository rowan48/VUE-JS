<template>

  <button @click="choice=0" class="btn btn-primary mybutton">Form</button>
  <button @click="choice=1" class="btn btn-primary mybutton">students</button>
  <button @click="choice=2" class="btn btn-primary mybutton">Admins</button>
  <form-component v-if="choice==0" @student="addStudent" @admin="addAdmin"/>
  <student-component  :students="students"  v-if="choice==1" @delete="deleteStudent"/>
  <admin-component :admins="admins"  v-if="choice==2" @delete="deleteAdmin"/>
</template>

<script>


import formComponent from "@/components/formComponent";
import adminComponent from "@/components/adminComponent";
import studentComponent from "@/components/studentComponent";

export default {
  name: 'App',
  components: {
    formComponent, studentComponent, adminComponent

  },
  data() {
    return {
      choice: 0,
      students: [],
      admins: []
    }
  },
  methods:{
    addStudent(student){
      console.log(student)
      this.students.push(student)

    },
    addAdmin(admin){
      this.admins.push(admin)
    },
    deleteStudent(index){
      this.students.splice(index,1)

    },
    deleteAdmin(index){
      this.admins.splice(index,1)
    },

  }

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mybutton{
  margin: 20px;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
