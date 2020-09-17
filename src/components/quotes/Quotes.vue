<template>
  <div class="">
    <img class="poster-img" :src="loadImgUrl()" alt="Inspirational Image">
    <h1 class="poster-title">{{ loadTitle() }}</h1>
    <h3 class="poster-quote">{{ loadQuote() }}</h3>

    
  </div>
</template>

<script>
  import { images } from "./sources.js"
  import { titles } from "./sources.js"
  import { quotes } from "./sources.js"

  export default {
    data () {
      return {

      }
    },

    methods: {
      getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
      },

      loadImgUrl () {
        let imgIndex = this.getRandomIndex(images);
        let imageSrc =  images[imgIndex];
        return require(`./quoteImgs/${imageSrc}`)
      },
      loadTitle () {
        let titleIndex = this.getRandomIndex(titles);
        let randomTitle = titles[titleIndex];
        return randomTitle;
      },
      loadQuote () {
        let quoteIndex = this.getRandomIndex(quotes);
        let randomQuote =quotes[quoteIndex];
        return randomQuote;
      }


    },
    mounted () {
    }
  }
</script>


<style>
.poster-img {
  background-size: cover;
  border: 3px solid #036e99;;
  height: 500px;
  width: 800px;
  margin: auto;
}

.poster-title,
.poster-quote {
  line-height: 1;
  width: 90%;
  margin: auto;
  margin-top: 20px;
}

.poster-title {
  font-size: 60px;
  font-weight: normal;
  letter-spacing: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
}
</style>
