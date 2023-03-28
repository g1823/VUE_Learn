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
    routes: [
        {
            path: '/student',
            component: Studnet
        },
        {
            path: '/school',
            component: School,
            children: [
                {
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