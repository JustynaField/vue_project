<template>
  <div>
    <div class="quote-page poster" v-if="renderMainComponent">
      <img class="poster-img" :src="loadImgUrl()" alt="Inspirational Image">
      <h1 class="poster-title">{{ loadTitle() }}</h1>
      <h3 class="poster-quote">{{ loadQuote() }}</h3>
    </div>

    <div class="quote-page" v-if="savedQuotes">
      <h3>Create your own motivational poster</h3>
    </div>

    <div class="quote-page" v-if="posterPage">
      <h3>Saved Quotes</h3>
    </div>


    <div class="buttons">
      <button @click="refresh()">New Quote</button>
      <button>Save</button>
      <button @click="showSaved">Show Saved Quotes</button>
      <button @click="makePoster">Make Your Own Poster</button>
    </div>
  </div>
</template>

<script>
  import { images } from "./sources.js"
  import { titles } from "./sources.js"
  import { quotes } from "./sources.js"

  export default {
    data () {
      return {
        renderMainComponent: true,
        savedQuotes: false,
        posterPage: false
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
      },
      refresh () {
        this.renderMainComponent = false;

        this.$nextTick(() => {
          this.renderMainComponent = true;
          this.savedQuotes = false;
          this.posterPage = false;
        });
      },

      showSaved () {
        this.savedQuotes = true;
        this.renderMainComponent = false;
        this.posterPage = false;
      },
      makePoster () {
        this.posterPage = true;
        this.renderMainComponent = false;
        this.savedQuotes = false;
      }

    },

    mounted () {
    }
  }
</script>


<style>
.quote-page {
  height: 665px;
}

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
  width: 70%;
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

.poster-quote {
  height: 65px;
}

button {
  padding: 8px 15px;
  background-color: #d8d1c9;
  border: 2px solid gray;
  color: #036e99;
  font-weight: bold;
  margin: 25px 10px;
}

</style>
