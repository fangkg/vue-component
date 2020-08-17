# component-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

vue组件化
组件是可复用的Vue实例，带有一个名字，我们可以通过new Vue创建的Vue根实例中，把这个组件作为自定义元素来使用。
Vue组件化系统提供了一种抽象，让我们可以使用独立可复用的组件来构建大型应用，任意类型的应用界面都可以抽象为一个组件树。组件化能提供开发效率，方便重复使用，简化调试步骤，提升项目可维护性，便于多人协同开发。

组件注册、使用及传递数据
Vue.component(name, options) 可用于注册组件。

自定义事件及其监听
当子组件需要和父组件进行通信，可以派发并监听自定义事件。

在组件上使用v-model

通过插槽分发内容
通过使用Vue提供的<slot>元素可以给组件传递内容。如果存在国歌独立内容要分发，可以使用具名插槽v-slot:name

Vue组件化的理解
组件化是Vue的精髓，Vue应用九四有一个个的组件构成。Vue的组件化涉及到的内容非常多。
定义：组件是可复用的Vue实例，准确讲它们是VueComponent的实例，继承自Vue。
优点：从上面案例可以看出组件化可以增加代码的复用性、可维护性和可测试性。
使用场景：
    通用组件：实现最基本的功能，具有通用性、复用性，例如按钮组件、输入框组件、布局组件等。
    业务组件：它们完成具体的业务，具有一定的复用性，例如登录组件、轮播图组件。
    页面组件：组织应用各个部分独立内容，需要时在不同页面组件间切换，例如列表页、详情页组件。
具体使用：
    定义：Vue.component(), component选项，sfc
    分类：有状态组件,functional,abstract
    通信：props, $emit()/$on() provide/inject, $children/$parent/$root/$attrs/$listeners
    内容分发：<slot> <template> v-slot
    优化：is, keep-alive, 异步组件

组件的本质
Vue中的组件经历如下过程：组件配置=> VueComponent实例=> render()=> Virtural DOM=> DOM
结论：组件的本质是产生虚拟DOM


事件总线
任意两个组件之间传值
Bus：事件派发、监听和回调管理
Vue.prototype.$bus = new Vue()
this.$bus.$on('foo', handle)
this.$bus.$emit('foo')

vuex
创建唯一的全局数据管理者store,通过它管理数据并通知组件状态变更。

$parent/$root
兄弟组件之间通信可通过共同父辈搭桥
this.$parent.$on('foo', handle)
this.$parent.$emit('foo')

$children
父组件可以通过$children访问子组件实现父子通信，$children不能保证子元素顺序

$attrs/$listeners
包含了父作用域中不作为prop被识别(且获取)的特性绑定(class和style除外)。当一个组件没有声明任何prop时，这里会包含所有父作用域的绑定(class 和 style 除外),并且可以通过v-bind="$attrs"传入内部组件。
<p>{{$attrs.foo}}</p> //  child组件中并未在prop中声明foo
<HelloWorld foo="foo"/>

$refs 获取子节点引用
<HelloWorld ref="hw"/>
mounted() {
    this.$refs.hw.xx = 'xxx'
}

provide/inject
能够实现祖先和后代之间传值
// ancestor
provide() { return {foo: 'foo'} }
// descendant
inject: ['foo']

插槽
插槽语法是Vue实现的内容分发API,用于复合组件开发。
匿名插槽: 默认插槽用default做参数
    <template v-slot:default></template>
具名插槽：将内容分发到子组件指定位置
    <slot name="content"></slot>
    <template v-slot:content></template>
作用域插槽：分发内容要用到子组件中数据
    <template v-slot:default="slotProps">
        来自子组件数据：{{slotProps.foo}}
    </template>



