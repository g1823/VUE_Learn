<template>
    <div>
        <ul>
            <li>消息编号:{{ id }}</li>
            <li>消息内容:{{ name }}</li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        props:['id','name'],
        mounted(){
            //console.log(this)
        }
    }
</script>

<style>

</style>