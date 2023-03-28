<template>
    <div>
        <h3>这是子组件</h3>
        <button @click="sonbtn">点击传递给父组件数据</button>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'Son',
        data() {
            return {
                sonparam1: '这是子数据1',
                sonparam2: '这是子数据2',
            }
        },
        methods:{
            sonbtn(){
                //参数1为被监听方法名，后面的参数都是传递的数据
                this.$emit('change',this.sonparam1,this.sonparam2)
            }
        }
    }
</script>

<style></style>