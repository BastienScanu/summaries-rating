import Vue from 'vue';
import Router from 'vue-router';
import SummariesList from '@/components/SummariesList';
import Summary from '@/components/Summary';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SummariesList',
      component: SummariesList,
    },
    {
      path: '/summary/:summaryId',
      name: 'Summary',
      component: Summary,
    },
  ],
});
