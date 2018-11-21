<template>
  <div>
    <div>
      <h1>Datasets</h1>
      <ul>
        <li v-for="(value, key) in datasets" v-bind:key="key">
          <router-link :to="{ name: 'TopicsList', params: { datasetId: value }}">
            {{ value }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DatasetsList',
  data() {
    return {
      datasets: [],
    };
  },
  props: ['user'],
  created() {
    this.$http.get('http://localhost:4000/dataset')
      .then((response) => {
        this.datasets = response.body;
      });
  },
};
</script>
