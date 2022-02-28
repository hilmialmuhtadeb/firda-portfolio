<template>
  <footer>
    <div class="left-side">
      <p>Let's Connect</p>
    </div>
    <div class="mid-side">
      <ul>
        <li><a href="#"><i class="icon-instagram"></i></a></li>
        <li><a href="#"><i class="icon-youtube-play"></i></a></li>
        <li><a href="#"><i class="icon-dribbble"></i></a></li>
      </ul>
    </div>
    <div class="right-side">
      <a href="#">Back to Top ^</a>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  footer {
    display: grid;
    padding: $container;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);

    .left-side {
      p {
        font-size: 2em;
        font-weight: 700;
      }
    }

    .mid-side {
      text-align: center;
      ul {
        list-style: none;
        padding: 0;
        li {
          display: inline-block;
          margin: 1em;
          i {
            font-size: 2em;
          }
        }
      }
    }

    .right-side {
      text-align: right;
      font-size: 1.5em;
    }
  }
</style>
