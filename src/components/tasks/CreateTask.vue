<template>
  <div class="create-task">
    <h4>Create Task</h4>
    <div class="sticky">
      <textarea rows="8" v-model="newTask"></textarea>
    </div>
    <button class="btn btn-info" @click="postNote">Post It</button>
  </div>
</template>

<script>
  export default {
    props: {
      tasks: {
        type: Array
      }
    },

    data () {
      return {
        newTask: '',
      }
    },

    methods: {
      postNote () {
        console.log('Posting');
        console.log('tasks:', this.tasks);
        this.tasks.unshift(this.newTask);
        this.$emit('taskWasPosted', this.newTask);
        this.newTask = '';
        this.saveTasks();
      },
      saveTasks () {
        const parsed = JSON.stringify(this.tasks);
        localStorage.setItem('storedTasks', parsed);
      }
    }
  }

</script>

<style>
  .create-task {
    border-right: 1px solid gray;
    height: 680px;
  }
  textarea {
    height: 200px;
    width: 220px;
    background-color: #f2f2ae;
  }
  .btn {
    margin-top: 10px;
    color: black;

  }
</style>
