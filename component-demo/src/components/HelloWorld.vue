<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 添加课程 -->
    <course-add @add-course="addCourse"></course-add>
    <!-- v-model绑定添加课程 -->
    <course-add-v-model v-model="course" @add-course="addCourseVModel"></course-add-v-model>
    <!-- 课程列表 -->
    <course-list :courses="courses"></course-list>
    <!-- 插槽实现内容分发 -->
    <message :show.sync="show" @updateShow = 'updateShow'>新增成功！</message>
    <!-- 具名插槽实现内容分发 -->
    <messageVSlotName :show.sync="show">
      <template v-slot:title>成功！</template>
      <template>新增成功！</template>
    </messageVSlotName>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      course: '',
      courses: [
        'English',
        'Math',
        'Chinese'
      ],
      show: false // 提示框状态
    }
  },
  props: {
    msg: String
  },
  methods: {
    addCourse(course) {
      this.courses.includes(course) && alert(`课程列表中已包含${course}`)
      if (course && !this.courses.includes(course)) {
        this.courses.push(course)
        // 显示提示信息
        this.show = true;
      }
    },
    // v-model绑定添加课程
    addCourseVModel() {
      this.courses.includes(this.course) && alert(`课程列表中已包含${this.course}`)
      if (this.course && !this.courses.includes(this.course)) {
        this.courses.push(this.course)
        // 显示提示信息
        this.show = true;
      }
    },
    // 关闭提示信息
    updateShow() {
      this.show = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
