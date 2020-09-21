<template>
  <div>
    <div class="quote-page" v-if="renderMainComponent">
      <img class="poster-img" :src="loadImgUrl ()" alt="Inspirational Image">
      <h1 class="poster-title">{{ title }}</h1>
      <h3 class="poster-quote">{{ quote }}</h3>
    </div>

    <div class="quote-page" v-if="posterPage">
      <create-poster></create-poster>
    </div>

    <div class="quote-page" v-if="savedQuotes">
      <h3>Saved Quotes</h3>
      <saved-posters :savedPosters="favoritePosters"></saved-posters>
    </div>

    <div class="buttons">
      <button @click="refresh()" class="quote-btn">New Quote</button>
      <button @click="savePoster()" class="quote-btn">Save</button>
      <button @click="showSaved" class="quote-btn">Saved Posters</button>
      <button @click="makePoster" class="quote-btn">Make Your Own Poster</button>
    </div>
  </div>
</template>

<script>
  import { images } from "./sources.js"
  import { titles } from "./sources.js"
  import { quotes } from "./sources.js"
  import SavedPosters from './SavedPosters'
  import CreatePoster from './CreatePoster'

  export default {
    data () {
      return {
        renderMainComponent: true,
        savedQuotes: false,
        posterPage: false,

        title: '',
        quote: '',
        url: '',

        favoritePosters: [],
      }
    },

    components: {
      savedPosters: SavedPosters,
      createPoster: CreatePoster
    },

    methods: {
      getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
      },
      loadImgUrl () {
        let imgIndex = this.getRandomIndex(images);
        let imageSrc =  images[imgIndex];
        return this.url = require(`./quoteImgs/${imageSrc}`);
      },
      loadTitle () {
        let titleIndex = this.getRandomIndex(titles);
        let randomTitle = titles[titleIndex];
        this.title = randomTitle;
      },
      loadQuote () {
        let quoteIndex = this.getRandomIndex(quotes);
        let randomQuote = quotes[quoteIndex];
        this.quote = randomQuote;
      },
      refresh () {
        this.loadTitle ();
        this.loadQuote ();

        // this.renderMainComponent = false;
        //
        // this.$nextTick(() => {
        //   this.renderMainComponent = true;
        //   this.savedQuotes = false;
        //   this.posterPage = false;
        // });
        this.renderMainComponent = true;
        this.savedQuotes = false;
        this.posterPage = false;
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
      },

      savePoster () {

        if (this.favoritePosters.indexOf({title: this.title, quote: this.quote, url: this.url}) !== -1) {
          alert('Value exists')

        } else {

          this.favoritePosters.unshift({title: this.title, quote: this.quote, url: this.url});
          alert('Saved!');
        }
        console.log('favoritePosters: ', this.favoritePosters);
      }

    },

    mounted () {
      this.loadTitle ();
      this.loadQuote ();

    },


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

.quote-btn {
  padding: 8px 15px;
  background-color: #d8d1c9;
  border: 2px solid gray;
  color: #036e99;
  font-weight: bold;
  margin: 25px 10px;
}

form {
  max-width: 500px;
  margin: auto;
  margin-top: 50px;
}

</style>
