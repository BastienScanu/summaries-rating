import Vue from 'vue';
import Router from 'vue-router';
import TopicsList from '@/components/TopicsList';
import Topic from '@/components/Topic';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopicsList',
      component: TopicsList,
    },
    {
      path: '/topic/:topicId',
      name: 'Topic',
      component: Topic,
    },
  ],
});
