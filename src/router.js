import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from './views/WelcomePage';
import CountdownPage from './views/CountdownPage';
import ArrowsPage from './views/ArrowsPage';
import FinishedPage from './views/FinishedPage';
import PrivacyPage from './views/PrivacyPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/countdown',
      name: 'CountdownPage',
      component: CountdownPage
    },
    {
      path: '/arrows',
      name: 'ArrowsPage',
      component: ArrowsPage
    },
    {
      path: '/finished',
      name: 'FinishedPage',
      component: FinishedPage
    },
    {
      path: '/privacy',
      name: 'PrivacyPage',
      component: PrivacyPage
    },
  ],
});
