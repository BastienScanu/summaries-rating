<template>
  <div>
    <div>
      <h1>Topics for {{ datasetId }}</h1>
      <ul>
        <li v-for="topic in topics" v-bind:key="topic.id">
          <router-link :to="{ name: 'Topic', params: { topicId: topic.id }}">
            {{ topic.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TopicsList',
  data() {
    return {
      topics: [],
    };
  },
  props: ['user'],
  created() {
    this.datasetId = this.$route.params.datasetId;
    this.$http.get(`http://localhost:4000/dataset/${this.datasetId}/topic`)
      .then((response) => {
        this.topics = response.body;
      });
  },
};
</script>
