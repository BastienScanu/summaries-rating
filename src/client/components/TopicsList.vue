<template>
  <div>
    <div>
      <h1>Topics</h1>
      <ul>
        <li v-for="(value, key) in topics" v-bind:key="key">
          <router-link :to="{ name: 'Topic', params: { topicId: key }}">{{ key }}</router-link>
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
    this.$http.get('http://localhost:4000/reference')
      .then((response) => {
        this.topics = response.body;
      });
  },
};
</script>
