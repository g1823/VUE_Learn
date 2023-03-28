&nbsp;&nbsp;&nbsp;&nbsp;这三个属性都是Vue实例的属性，分别代表自定义事件的监听(\$on)、移除(\$off)和触发(\$emit)
**1.$on** 
&nbsp;&nbsp;&nbsp;&nbsp;本身是一个函数,作用是**为组件实例绑定自定义事件**,事件由\$emit触发。

①\$on函数由两个参数：
&nbsp;&nbsp;&nbsp;&nbsp;第一个参数指定事件名称
&nbsp;&nbsp;&nbsp;&nbsp;第二个参数指定回调函数,回调函数可以接收\$emit传递的所有额外参数。
②第一个参数有两种类型:
&nbsp;&nbsp;&nbsp;&nbsp;字符串,用于绑定单个事件
&nbsp;&nbsp;&nbsp;&nbsp;数组,用于同时绑定多个事件。
例如：
~~~ js
vue.$on('adList', (e) => {
	console.log(e)
})

vue.$on(['adList1','adList2'], (e) => {
	console.log(e)
})
~~~

**2.$emit**
&nbsp;&nbsp;&nbsp;&nbsp;本身是一个函数,可以**触发组件实例上绑定的自定义事件,并传入额外参数给监听器的回调函数**。

\$emit有俩个参数
&nbsp;&nbsp;&nbsp;&nbsp;第一个参数必填,指定触发的事件
&nbsp;&nbsp;&nbsp;&nbsp;其余参数选填,均为传入事件回调的参数。
例如：
~~~ js
vue.$emit(event, [p1,p2,..])
~~~

\$on可以为同一个事件绑定多个监听器, \$emit触发该事件时, 监听器按照绑定顺序依次执行。
~~~js
vue.$on('jpf', () => {
	console.log('事件1')
})
vue.$on('jpf', () => {
	console.log('事件2')
})
vue.$emit('jpf')
~~~

**3.$off**
&nbsp;&nbsp;&nbsp;&nbsp;本身是一个函数,用来移除组件实例上绑定的自定义事件监听器。

该函数有两个参数:
&nbsp;&nbsp;&nbsp;&nbsp;第一个参数指定移除的事件
&nbsp;&nbsp;&nbsp;&nbsp;第二个参数指定回调函数
例如：
~~~js
vue.$off([event, callback])
~~~

\$off 有三种用法:
&nbsp;&nbsp;&nbsp;&nbsp;①如果没有提供任何参数,则移除当前组件实例上的所有事件监听器。
&nbsp;&nbsp;&nbsp;&nbsp;②如果只提供了事件名称,则移除组件实例上该事件的所有监听器。
&nbsp;&nbsp;&nbsp;&nbsp;③如果同时提供了事件名称和回调函数,则只移除指定事件上指定回调的监听器


\$off 函数的第一个参数有两种类型:
&nbsp;&nbsp;&nbsp;&nbsp;字符串,用来移除一个指定事件
&nbsp;&nbsp;&nbsp;&nbsp;数组,用来移除多个指定事件


<br>

作者：千叶风行
链接：https://juejin.cn/post/6887813546395549710
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。