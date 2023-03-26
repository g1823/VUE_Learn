<template>
  <div>
    <button>原生按钮</button>
    <input type="text">
    <br/>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
    <el-input placeholder="请输入内容" v-model="input" clearable></el-input>





    <br>
    <br>
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
  components: {
    Header
  }
}

</script>

<style></style>
