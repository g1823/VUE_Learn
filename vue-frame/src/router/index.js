//本文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入需要路由的组件
import Studnet from '../pages/student'
import School from '../pages/school'
import SchoolChild from '../pages/schoolChild'
import Detail from '../pages/detail'

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
            component:School,
            children:[
                {
                    path:'schoolChild',
                    component:SchoolChild,
                    children:[
                        {
                            name:"xiangqing",
                            path:'detail',
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})