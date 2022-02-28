<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <foo-bar></foo-bar>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import FooterVue from './components/Footer.vue';

export default {
  components: {
    'nav-bar': Navigation,
    'foo-bar': FooterVue,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  margin: 0;
  background-color: $bodyColor;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}
</style>
