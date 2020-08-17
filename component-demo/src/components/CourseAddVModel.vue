<template>
  <div>
    <!-- 实现input的:value和@input -->
    <input :value="value" @input="onInput" @keydown.enter="addCourse"/>
    <button @click="addCourse">新增v-model</button>
  </div>
</template>

<script>
export default {
    name: 'courseAddVModel',
    props: ['value'],
    methods: {
        addCourse() {
            // 派发事件不需要再传递数据
            this.$emit('add-course')
        },
        onInput(e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>
<style>
</style>