<<template>
  <div class="task-list">
    <div class="row">
      <div class="col-sm-4" v-for = "(task, index) in tasks">
        <div class="card">{{task}}
          <button @click="deleteTask(index)" class="btn btn-outline-info done-btn">x</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tasks: {
        type: Array
      }
    },

    methods: {
      deleteTask (note) {
        this.tasks.splice(note, 1);
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
  .task-list {
    margin-top: 22px;
  }
  .card {
    height: 200px;
    width: 220px;
    margin: 15px;
    padding: 10px;
    background-color: #f2f2ae;
    position: relative;
    overflow: auto;
  }
  .done-btn {
    width: 30px;
    height:30px;
    padding: 0;
    padding-bottom: 3px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

</style>
