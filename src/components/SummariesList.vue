<template>
  <div>
    <h1>Summaries</h1>
    <ul>
      <li v-for="(value, key) in summaries" v-bind:key="key">
        {{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
import data from '../data/example_references.json';

export default {
  name: 'SummariesList',
  data() {
    return {
      summaries: data,
    };
  },
};
</script>
