<template>
  <h1 @click="add">{{ t }}</h1>

  <h2>{{Person.name }}</h2>
  <h2>{{Person.age }}</h2>
  <button @click="changeName"></button>
  <button @click="changeAll"></button>
</template>

<script setup name="toRefs toRef">
import { reactive, ref,watch} from 'vue';
let t = ref(3)
function add(){
  t++
}
watch(t,(newval,oldval)=>{
  console.log(newval,oldval);
})


// watch 监视reactive对象类型数据
let Person = reactive({name:"xixi",age:18})
watch(Person,(newval,oldval)=>{
  console.log(newval,oldval)
})
function changeName(){
  Person.name+="~"
}
function changeAll(){
  Object.assign(Person,{name:"林希",age:20})
}
</script>

<style scoped>
.container {
  background-color: #7faeb3;
  padding: 20px;
  border-radius: 10px;
  color: #1a2b2c;
}
</style>