<template>
    <div>
        <h2>这是父组件</h2>
        <button @click="btn">点我获取子组件数据</button>
        <span>子组件传来的数据：{{ sonparam1 }}和{{ sonparam2 }}</span>
        <hr>
        <Son ref="son"></Son>
    </div>
</template>

<script>
    import Son from '@/components/son.vue'
    export default {
        name: 'Father',
        components: {
            Son
        },
        data() {
            return {
                sonparam1: '未获取',
                sonparam2: '未获取',
            }
        },
        methods:{
            btn(){
                this.sonparam1 = this.$refs.son.sonparam1;
                this.sonparam2 = this.$refs.son.sonparam2;
            }
        }
    }
</script>

<style></style>