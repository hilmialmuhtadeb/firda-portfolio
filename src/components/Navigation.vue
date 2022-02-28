<template>
  <nav>
    <h1 class="web-title">My Portfolio</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/projects">Project</router-link>
      </li>
      <li>
        <router-link to="/contacts">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $container;

    a {
      color: $black;
      text-decoration: none;
      font-weight: 600;

      &.router-link-exact-active {
        color: $yellow;
      }
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        display: inline-block;
        padding: 1em;
      }
    }
  }
</style>
