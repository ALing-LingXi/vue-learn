<template>
  <div class="container">
    <h2 @click="changeName">{{ name }}</h2>
    <h3 @click="changeAge">{{ age }}</h3>
  </div>
</template>

<script setup name="toRefs toRef">
import { ref, toRefs } from 'vue';

const person = ref({
  name:"xixi",age:18
})
function changeName(){
  person.value.name+="-"
}function changeAge(){
  person.value.age++
}
let {name,age} =toRefs(person.value)
</script>

<style scoped>
.container {
  background-color: #7faeb3;
  padding: 20px;
  border-radius: 10px;
  color: #1a2b2c;
}
</style>