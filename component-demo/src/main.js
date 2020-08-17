import Vue from 'vue'
import App from './App.vue'
import CourseList from './components/CourseList'
import CourseAdd from './components/CourseAdd'


Vue.config.productionTip = false
// 必须在构建Vue实例之前就将需要的组件注册进去
Vue.component('course-list', CourseList)
Vue.component('course-add', CourseAdd)


new Vue({
  render: h => h(App),
}).$mount('#app')
