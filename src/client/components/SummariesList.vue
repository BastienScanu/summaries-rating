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
import summaries from '../../server/data/example_references.json';

export default {
  name: 'SummariesList',
  data() {
    return {
      summaries,
    };
  },
};
</script>
