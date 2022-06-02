<template>
  <div>
    <button @click="ActiveTab='tabOne'" class="btn btn-primary mybtn" >tab1</button>
    <button @click="ActiveTab='tabTwo'" class=" btn btn-primary mybtn">tab2</button>
    <button @click="ActiveTab='tabThree'" class="btn btn-primary mybtn">tab3</button>
  </div>
  <keep-alive>
    <tab-one v-if="ActiveTab==='tabOne'">imported from parent</tab-one>
  </keep-alive>
  <tab-two v-if="ActiveTab==='tabTwo'">
    <template v-slot:card-header>
      <h2>header</h2>

    </template>
    <template v-slot:card-body>
      <h2>body</h2>

    </template>
    <template v-slot:card-footer>
      <h2>footer</h2>

    </template>
  </tab-two>
  <tab-three v-if="ActiveTab==='tabThree'">
    <template v-slot:default="slotProps">
      <div>
       <h3>{{slotProps.fname}} {{slotProps.lname}}</h3>

      </div>

    </template>
  </tab-three>
  <div>
    <button @click="increase" class="btn btn-success">{{count}}</button>
  </div>

</template>

<script>
import tabOne from "@/components/dynamicComponent/tabOne";
import tabTwo from "@/components/dynamicComponent/tabTwo";
import tabThree from "@/components/dynamicComponent/tabThree";
import counter from "../../../Mixins/counter"
export default {
  name: "parentComponent",
  components: {
    tabOne,tabTwo,tabThree

  },
  mixins:[counter],
  data(){
    return{
      ActiveTab:'tabOne'

    }
  }
}
</script>

<style scoped>
.mybtn{
  margin: 20px;
}

</style>