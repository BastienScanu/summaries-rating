import Vue from 'vue';
import Router from 'vue-router';
import SummariesList from '@/components/SummariesList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SummariesList',
      component: SummariesList,
    },
  ],
});
