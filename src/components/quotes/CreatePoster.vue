<template>
  <div>
    <div  v-if="showFormPage">
      <h3>Create your own motivational poster</h3>
      <form>
        <div class="form-group">
          <label for="">Image Url</label>
          <input class="form-control" v-model="myImg">
        </div>
        <div class="form-group">
          <label for="">Motivational poster title</label>
          <input class="form-control" v-model="myTitle">
        </div>
        <div class="form-group">
          <label for="">Motivational poster quote</label>
          <input class="form-control" v-model="myQuote">
        </div>
        <button class="quote-btn" @click="showPoster">Show My Poster</button>
      </form>
    </div>
    <div v-if="showPosterPage">
      <img class="myImg" :src="myImg" alt="Inspirational Image">
      <h1 class="poster-title">{{ myTitle }}</h1>
      <h3 class="poster-quote">{{ myQuote }}</h3>
      <button class="myQuoteBtn" @click="savePoster">Save my Poster</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showFormPage: true,
        showPosterPage: false,
        myImg: '',
        myTitle: '',
        myQuote: ''
      }
    },
    methods: {
      showPoster () {
        this.showFormPage = false;
        this.showPosterPage = true;
        console.log('myTitle ', this.myTitle)
      }
    }
  }
</script>

<style>
  .myImg {
    background-size: cover;
    border: 3px solid #036e99;;
    margin: auto;
    height: 450px;
    width: auto
  }
  .myQuoteBtn {
    background-color: #d8d1c9;
    border: 2px solid gray;
    color: #036e99;
    font-weight: bold;
  }
</style>
