<template>
  <div class="container">
    <h1 class="title">Vue路由测试</h1>

    <div class="nav">
<RouterLink to="/home">首页</RouterLink>
<RouterLink to="/news">新闻</RouterLink>
<RouterLink :to="{path:'/about'}">关于</RouterLink>
    </div>

    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script>
import { RouterView ,RouterLink} from 'vue-router';
</script>
<style scoped>
.container {
  padding: 20px;
}

.title {
  text-align: center;
  background: #ddd;
  padding: 20px;
  border-radius: 10px;
}

.nav {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.btn {
  background: #999;
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
  text-decoration: none;
}

.content {
  border: 2px solid #999;
  border-radius: 10px;
  height: 400px;
  padding: 10px;
}
</style>