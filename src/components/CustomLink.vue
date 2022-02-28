<template>
  <router-link :to="link">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    link: String,
  },
};
</script>

<style lang="scss">
  a {
    color: $black;
    text-decoration: none;
    font-weight: 500;
  }
</style>
