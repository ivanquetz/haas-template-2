const Home = (resolve) => import("./pages/Home.vue").then(resolve);
const About = (resolve) => import("./pages/About.vue").then(resolve);
const Contact = (resolve) => import("./pages/Contact.vue").then(resolve);

const main = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

export default main;
