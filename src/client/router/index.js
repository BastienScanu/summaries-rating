import Vue from 'vue';
import Router from 'vue-router';
import DatasetsList from '@/components/DatasetsList';
import TopicsList from '@/components/TopicsList';
import Topic from '@/components/Topic';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DatasetsList',
      component: DatasetsList,
    },
    {
      path: '/:datasetId',
      name: 'TopicsList',
      component: TopicsList,
    },
    {
      path: '/:datasetId/topic/:topicId',
      name: 'Topic',
      component: Topic,
    },
  ],
});
