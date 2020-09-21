<template>
  <div class="row" >
    <div class="col-sm-4 col-md-3 poster" v-for="poster in savedPosters">
      <img class="mini-poster-img" :src="poster.url">
      <h6>{{poster.title}}</h6>
      <p>{{poster.quote}}</p>
      change
    </div>
  </div>
</template>

<script>
  export default {
    props: ['savedPosters'],

    mounted () {
      console.log('hello')
    }
  }
</script>

<style>
  .poster {
    border: 1px solid gray;
    margin: 10px;
    max-width: 260px;
  }
  .mini-poster-img {
    margin: 10px 0;
  }
</style>
