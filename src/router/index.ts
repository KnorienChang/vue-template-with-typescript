import Vue from 'vue';
import Router from 'vue-router';

import routes from './modules';

Vue.use(Router);

interface RouterOptions {
  mode: string;
  base: string | undefined;
  routes: object[];
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
