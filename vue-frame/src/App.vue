<template>
  <div>
    <Header></Header>
    <!-- 原始html，使用a标签实现页面的跳转 -->
    <a href="http://www.baidu.com">跳转百度</a>
    <!-- 现在使用vue-router提供的特殊标签router-link,其最终也会变成a标签 -->
    <router-link active-class="active" to="/student">前往Student</router-link>
    <router-link active-class="active" to="/school">前往School</router-link>
    <div>
      <!-- 指定路由选择后呈现的位置 -->
      <router-view></router-view>
    </div>
  </div>
  
  
</template>

<script>
import Header from './components/header.vue'
export default {
  name: 'App',
  comments:{
    Header
  }
}
</script>

<style></style>
