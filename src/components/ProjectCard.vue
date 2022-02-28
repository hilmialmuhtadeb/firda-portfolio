<template>
  <div class="card">
    <img :src="imageSource" alt="gambar">
    <h3>{{ title }}</h3>
    <div class="card-link">
      <custom-link link="/"><i class="icon-file-text-alt"></i> View Study Case</custom-link>
      <custom-link link="/"><i class="icon-eye-open"></i> Live Preview</custom-link>
    </div>
    <yellow-button :shadow="false">View More</yellow-button>
  </div>
</template>

<script>
import CustomLinkVue from './CustomLink.vue';
import YellowButtonVue from './YellowButton.vue';

export default {
  props: {
    imageSource: {
      type: String,
      default: 'https://www.rimma.co/wp-content/uploads/-000//1/aesthetic-architecture-photography-traveling-daniel-rueda-anna-devis-3-595cb55a03c8b__880.jpg',
    },
    title: {
      type: String,
      default: 'My Projects',
    },
  },
  components: {
    'custom-link': CustomLinkVue,
    'yellow-button': YellowButtonVue,
  },
};
</script>

<style lang="scss">
  .card {
    h3 {
      margin: 1em 0 .5em;
    }
    img {
      border-radius: 1em;
      max-width: 100%;
    }
    .card-link {
      margin: 0 0 3em;
      a {
        margin-right: 2em;

        i {
          margin-right: .5em;
        }
      }
    }
  }
</style>
