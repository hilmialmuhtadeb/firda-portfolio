import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Project,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
