<template>
  <div>
      <!-- 条件渲染 -->
      <p v-if="courses.length === 0">没有课程</p>
      <!-- 列表渲染 -->
      <ul>
          <!-- class 绑定 -->
          <li v-for="(c, index) in courses"
            :key= index
            :class="{active: (selectedCourse === c)}"
            @click="selectedCourse = c">{{c}}</li>
          <!--  style 绑定 -->
          <!-- <li v-for ="(c, index) in courses"
            :key=index
            :style="{backgroundColor: (selectedCourse === c) ? '#ddd': 'transparent'}"
            @click="selectedCourse = c">{{c}}</li> -->
      </ul>
  </div>
</template>

<script>

export default {
    name: 'courseList',
    data() {
        return {
          // 改变状态属于course-list内部状态，因此作为数据
          selectedCourse: ''
        }
    },
    props: {
      // 新增课程时也要访问courses，因此作为属性传递
      courses: {
          type: Array,
          default: () => []
      }
  }
}

</script>
<style scoped>
.active {
  background-color: aqua;
}
</style>