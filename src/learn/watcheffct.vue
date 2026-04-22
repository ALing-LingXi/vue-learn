<template>
  <div class="box">
    <h2>姓名：{{ person.name}}</h2>
    <h2>年龄：{{ person.age}}</h2>
    <h2>汽车：{{ person.car.car1 }},{{ person.car.car2 }}</h2>

    <div class="btns">
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeFirstCar">修改第一台车</button>
      <button @click="changeSecondCar">修改第二台车</button>
      <button @click="changeAllCar">修改整个车</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, watchEffect } from "vue"

// 基础数据

const person = reactive({name:"xixi",age:18,
  car:{
    car1:"奔驰",
    car2:"宝马"
  }
})

// 修改方法
const changeName = () => {
 person.name = "李四"
}

const changeAge = () => {
  person.age++
}

const changeFirstCar = () => {
  person.car.car1="迈巴赫"
}

const changeSecondCar = () => {
  person.car.car2="兰博基尼"
}

const changeAllCar = () => {
  person.car={car1:"宾利",car2:"奥迪"}
}
watch(()=>person.name,(newval,oldval)=>{
  console.log(newval,oldval)
})
watchEffect(()=>{
  if(person.age>20||person.name!=="xixi"){
    console.log("你变得弱小了老东西")
  }
})
</script>

<style scoped>
.box {
  background: #7fa8c3;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
}

.btns button {
  margin: 5px;
}
</style>