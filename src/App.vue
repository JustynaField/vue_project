<template>
  <div id="app">
    <div class="container">

      <div class="main-page">
        <router-view></router-view>
      </div>
      <navigation></navigation>


    </div>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Navigation from './components/Navigation.vue'


export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    home: Home,
    navigation: Navigation

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  color: #036e99;
  font-weight: bold;
}
</style>
