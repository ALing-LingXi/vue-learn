<template>
  <h1 @click="add">{{ t }}</h1>

  <h2>{{Person.name }}</h2>
  <h2>{{Person.age }}</h2>
  <button @click="changeName"></button>
  <button @click="changeAll"></button>
</template>

<script setup name="toRefs toRef">
import { ref,watch} from 'vue';
let t = ref(3)
function add(){
  t.value++
}
watch(t,(newval,oldval)=>{
  console.log(newval,oldval);
})


// watch 监视ref对象类型数据
let Person = ref({name:"xixi",age:18})
watch(Person,(newval,oldval)=>{
  console.log(newval,oldval)
},{deep:true,immediate:true})
function changeName(){
  Person.value.name+="~"
}
function changeAll(){
  Person.value ={name:"林希",age:20}
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