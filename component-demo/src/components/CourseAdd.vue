<template>
  <div>
    <!-- 表单输入绑定 -->
    <input v-model="course" @keydown.enter="addCourse"/>
    <button v-on:click="addCourse">新增</button>
  </div>
</template>

<script>
export default {
    name: 'addCourse',
    data() {
        return {
            course: ''
        }
    },
    methods: {
        addCourse() {
            // 发送自定义事件通知父组件
            // 事件名称定义时不要有大写字母出现
            this.$emit('add-course', this.course)
            this.course = ''
        }
    }
}

</script>
<style>
</style>