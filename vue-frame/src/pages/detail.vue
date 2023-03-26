<template>
    <div>
        <ul>
            <li>消息编号:{{ $route.query.id }}</li>
            <li>消息内容:{{ $route.query.name }}</li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
        mounted(){
            console.log(this)
        }
    }
</script>

<style>

</style>