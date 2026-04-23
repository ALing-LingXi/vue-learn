<template>
  <input type="text" v-model="firstname">
  <input type="text" v-model="lastname">
  <input type="text" v-model="fullname">
</template>

<script setup name="toRefs toRef">
import { computed, ref } from 'vue';

  let firstname=ref("zhang")
  let lastname =ref("san")
 let fullname = computed({
  get(){
    return firstname.value.slice(0,1).toUpperCase()+firstname.value.slice(1)+"~"+lastname.value
  },
  set(val){
    const x=val.split("~")
    firstname.value=x[0]
    lastname.value=x[1]
  }
 })
</script>

<style scoped>
.container {
  background-color: #7faeb3;
  padding: 20px;
  border-radius: 10px;
  color: #1a2b2c;
}
</style>