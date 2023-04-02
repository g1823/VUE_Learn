//本文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入需要路由的组件
import Studnet from '../pages/student'
import School from '../pages/school'
import SchoolChild from '../pages/schoolChild'
import Detail from '../pages/detail'

//创建router对象(路由器)，并暴露出去
const router = new VueRouter({
    //在routes中创建路径和组件的kv关系
    routes: [
        {
            name: 'xuesheng',
            path: '/student',
            component: Studnet
        },
        {
            name: "xuexiao",
            path: '/school',
            component: School,
            children: [
                {
                    name: "xuexiao1",
                    path: 'schoolChild',
                    component: SchoolChild,
                    children: [
                        {
                            name: "xiangqing",
                            path: 'detail',
                            component: Detail,
                            //路由的props
                            //第一种写法,值为对象，该对象中的所有k-v都会以props的形式传给本组件(Detail)，可以参考组件间通信的props
                            //props:{a:1,b:'hello'} //这种写法是死数据
                            //第二种写法,值为布尔类型若props赋值为true，则会将传递给该路由(Detail)的所有params参数，以props方式传递
                            //props:true //但是无法接收query的参数
                            //第三种写法，值为函数，会自动传递给该方法一个参数$route，这样就可以直接根据route获取query或params参数了
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    name: $route.query.name
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫
//表示每一次路由切换之前都会调用参数里的函数(初始化时也会)
router.beforeEach((to, from, next) => {
    /*
        该函数有三个参数：
            to:表示即将跳转的路由，目的路由
            from:表示来自哪个路由，当前路由
            next:是一个函数，表示放行
    */
    //这样就可以动态判断是否放行
    //下面是从localStorage中判断
    // if (localStorage.getItem('user') === '张三') {
    //     next()
    // }
})

export default router