<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 添加课程 -->
    <course-add @add-course="addCourse"></course-add>
    <!-- 课程列表 -->
    <course-list :courses="courses"></course-list>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      courses: [
        'English',
        'Math',
        'Chinese'
      ]
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
      }
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
