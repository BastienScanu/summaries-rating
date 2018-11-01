<template>
  <div>
    <h1>Summaries</h1>
    <ul>
      <li v-for="(value, key) in summaries" v-bind:key="key">
        <router-link :to="{ name: 'Summary', params: { summaryId: key }}">{{ key }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'SummariesList',
  data() {
    return {
      summaries: [],
    };
  },
  created() {
    this.$http.get('http://localhost:3000/reference')
      .then((response) => {
        this.summaries = response.body;
      });
  },
};
</script>
