//本文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入需要路由的组件
import Studnet from '../components/student'
import School from '../components/school'

//创建router对象(路由器)，并暴露出去
export default new VueRouter({
    //在routes中创建路径和组件的kv关系
    routes:[
        {
            path:'/student',
            component:Studnet
        },
        {
            path:'/school',
            component:School
        }
    ]
})