<template>
<h2 ref="xi">上海</h2>  
<button @click="log">点我</button>
</template>

<script setup>
import {ref} from "vue"
let xi = ref()
let a = ref(1)
let b = ref(2)
function log(){
console.log(xi.value)
}
defineExpose({a,b})
</script>

<style scoped>
.box {
  background: tomato;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
}

.btns button {
  margin: 5px;
}
</style>