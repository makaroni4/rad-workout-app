import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from './views/WelcomePage.vue';
import CountdownPage from './views/CountdownPage.vue';
import ArrowsPage from './views/ArrowsPage.vue';
import FinishedPage from './views/FinishedPage.vue';
import PrivacyPage from './views/PrivacyPage.vue';

Vue.use(Router);

Vue.use(require('vue-cookies'));

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage,
    },
    {
      path: '/countdown',
      name: 'CountdownPage',
      component: CountdownPage,
    },
    {
      path: '/arrows',
      name: 'ArrowsPage',
      component: ArrowsPage,
    },
    {
      path: '/finished',
      name: 'FinishedPage',
      component: FinishedPage,
    },
    {
      path: '/privacy',
      name: 'PrivacyPage',
      component: PrivacyPage,
    },
  ],
});

router.afterEach((to) => {
  if ($cookies.get('rad_app_consent') === 'true') {
    gtag('event', 'page_view', {
      send_to: 'UA-129975491-1',
      page_path: to.path,
    });
  }
});

export default router;
