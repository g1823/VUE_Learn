<template>
    <div>
        <h4>兄弟2</h4>
        <button @click="btn">点击传送数据</button>
    </div>
</template>

<script>
    export default {
        name: 'Brother2',
        data() {
            return {
                dd:"兄弟2传给1的数据"
            }
        },
        methods:{
            btn(){
                this.$bus.$emit('1Get2',this.dd)
            }
        }
    }
</script>

<style></style>