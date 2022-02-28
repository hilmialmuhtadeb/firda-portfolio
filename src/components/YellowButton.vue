<template>
  <button :style="[shadow ? btnShadow : '']">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    shadow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      btnShadow: {
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.335)',
      },
    };
  },
};
</script>

<style lang="scss">
  button {
    padding: 1em 2em;
    background-color: $yellow;
    color: white;
    font-family: inherit;
    font-weight: 600;
    border: 0;
    border-radius: .5em;
  }

  button:hover {
    cursor: pointer;
  }
</style>
