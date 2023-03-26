<template>
    <div>
        学校组件
        <router-link to="/school/schoolChild">前往学习子组件</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'School',
    mounted(){
        console.log("挂载完毕");
        console.log(this);
    },
    beforeDestroy(){
        console.log("School组件即将销毁")
    }
}
</script>

<style>

</style>