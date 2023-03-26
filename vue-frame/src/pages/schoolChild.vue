<template>
    <div>
        学校组件Child
        <br/>
        <ul>
            <!-- 跳转路由并携带query参数 -->
            <!-- <li v-for="m in mslist" :key="m.id" ><router-link :to="'/school/schoolChild/detail?id=${m.id}&name=${m.name}'">消息{{ m.id }}</router-link></li> -->
            <!-- 跳转路由携带query参数,to的对象写法 -->
            <li v-for="m in mslist" :key="m.id" >
                <router-link :to="{
                    //使用name
                    name:'xiangqing',
                    // path:'/school/schoolChild/detail',
                    query:{
                        id:m.id,
                        name:m.name
                    }
                }">
                    消息{{ m.id }}
                </router-link>
            </li>    
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
//import { query } from 'express';

export default {
    name: 'SchoolChild',
    data(){
        return{
            mslist:[
                {id:"1",name:"1号"},
                {id:"2",name:"2号"},
                {id:"3",name:"3号"},
            ]
        }
    }
}
</script>

<style>

</style>