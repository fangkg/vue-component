vue组件化
组件是可复用的Vue实例，带有一个名字，我们可以通过new Vue创建的Vue根实例中，把这个组件作为自定义元素来使用。

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

