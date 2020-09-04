<template>
  <div id="app">
    <div class="container">

      <h1>{{ msg }}</h1>
      <div class="main-img">
        <img src="./assets/trinidad.png">
      </div>

      <navigation></navigation>

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'
  import Quotes from './components/Quotes.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to my Page',
    }
  },
  components: {
    navigation: Navigation,
    quote: Quotes

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

h2 {
  font-weight: normal;
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
