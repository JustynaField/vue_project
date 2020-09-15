<template>
  <div class="tasks">
    <h1>{{title}}</h1>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-3">
          <createTask :tasks="taskList" @taskWasPosted="task = $event"></createTask>
        </div>
        <div class="col-xs-12 col-sm-9">
          <taskList :tasks="taskList"></taskList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CreateTask from './CreateTask.vue'
  import TaskList from './TaskList.vue'

  export default {
    data () {
      return {
        title: "TASKS",
        task: '',
        taskList: []
      }
    },
    components: {
      createTask: CreateTask,
      taskList: TaskList
    },
    mounted() {
      if (localStorage.storedTasks) {
        this.taskList = JSON.parse(localStorage.storedTasks)
      }
    }
  }
</script>
