<template>
  <div>
    <div>
      <h1>Summaries</h1>
      <ul>
        <li v-for="(value, key) in summaries" v-bind:key="key">
          <router-link :to="{ name: 'Summary', params: { summaryId: key }}">{{ key }}</router-link>
        </li>
      </ul>
    </div>
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
  props: ['user'],
  created() {
    this.$http.get('http://localhost:4000/reference')
      .then((response) => {
        this.summaries = response.body;
      });
  },
};
</script>
