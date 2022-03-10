import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import DetailPostPage from "../pages/DetailPostPage.vue";
import Error404 from "../pages/Error404.vue";
import ContactPage from "../pages/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: ProfilePage,
  },
  {
    path: "/detail-post/:slug",
    name: "DetailPost",
    component: DetailPostPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: Error404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
