<template>
  <div class="home">
    <section class="hero">
      <div class="left-side">
        <p>Hey!</p>
        <h1>I'm Firda Aininnisa</h1>
        <yellow-button :shadow="true"><i class="icon-envelope-alt"></i> Mail Me</yellow-button>
      </div>
      <div class="right-side">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*" alt="cat-image">
      </div>
    </section>
    <section class="recent">
      <h2>Recent Projects</h2>
      <div class="projects">
        <project-card></project-card>
        <project-card></project-card>
      </div>
    </section>
    <section class="discussion">
      <div class="left-side">
        <img src="https://images.unsplash.com/photo-1597276144232-6f56f1a7f2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="suggestion">
      </div>
      <div class="right-side">
        <p>We'd Love to Hear from You</p>
        <form action="#">
          <div>
            <input type="text" placeholder="Enter your name">
          </div>
          <div>
            <input type="email" placeholder="Enter your email">
          </div>
          <div>
            <textarea placeholder="Write your message" rows="6"></textarea>
          </div>
          <div>
            <yellow-button :shadow="false">Email Me</yellow-button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCardVue from '../components/ProjectCard.vue';
import YellowButtonVue from '../components/YellowButton.vue';

export default {
  name: 'Home',
  components: {
    'yellow-button': YellowButtonVue,
    'project-card': ProjectCardVue,
  },
};
</script>

<style lang="scss">
  .hero {
    display: grid;
    padding: $container;
    margin: 5em 0;
    grid-template-columns: 1fr 1fr;

    .left-side {
      margin: auto 0;
      font-size: 1.5em;

      p{
        margin: 0;
      }
      h1 {
        margin: 0 0 1em;
      }
      button {
        i {
          margin-right: .5em;
        }
      }
    }

    .right-side {
      text-align: right;
      img {
        max-width: 70%;
        border-radius: 50%;
      }
    }
  }

  .recent {
    padding: $container;
    padding-top: 8em;
    padding-bottom: 8em;

    h2 {
      font-size: 2em;
      margin-bottom: 1em;
    }

    .projects {
      display: grid;
      gap: 2em;
      grid-template-columns: 1fr 1fr;
    }
  }

  .discussion {
    display: grid;
    gap: 4em;
    grid-template-columns: 1fr 1fr;
    margin: 4em 0;
    padding: 4em 12em;
    background-color: $backBlue;

    .left-side {
      img {
        border-radius: 2em;
      }
    }

    .right-side {
      p {
        color: white;
        font-size: 2em;
        font-weight: 600;
        margin: 0 0 2em;
      }

      form {
        div {
          margin-bottom: 1.5em;
          text-align: right;
        }
        input,
        textarea {
          padding: 1em;
          border: 0;
          font-family: inherit;
          width: 100%;
          border-radius: 1em;
          box-sizing: border-box;
          resize: none;
        }
      }
    }
  }
</style>
