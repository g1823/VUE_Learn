<template>
    <div>
        <h4>兄弟1</h4>
        兄弟传来的值：   {{ d }}
    </div>
</template>

<script>
    export default {
        name: 'Brother1',
        data(){
            return{
                d:"未传值"
            }
        },
        methods:{
            getParam(thedata){
                this.d = thedata;
            }
        },
        mounted(){
            //第一个参数为为bus(也就是vm)所绑定自定义事件
            //第二个参数为回调函数
            this.$bus.$on('1Get2',this.getParam)
        },
        beforeDestroy(){
            this.$bus.$off('1Get2');
        }
    }
</script>

<style>

</style>