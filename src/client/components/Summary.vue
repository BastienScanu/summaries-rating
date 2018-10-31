<template>
  <div>
    <h1>Summary</h1>
    <h2>Human summaries</h2>
    <p v-for="summary in summaries[$route.params.summaryId]" v-bind:key="summary.id">
      <span v-for="(sentence, idx) in summary.text" v-bind:key="idx">{{ sentence }}</span>
    </p>
    <h2>Generated summaries</h2>
    <p v-for="(summaries, idx) in systems[$route.params.summaryId]" v-bind:key="idx">
      <span
        v-for="(sentence, idx) in summaries.text"
        v-bind:key="idx">{{ sentence }}
      </span>
    </p>
  </div>
</template>

<script>
import summaries from '../../server/data/example_references.json';
import systems from '../../server/data/example_systems.json';

export default {
  name: 'Summary',
  data() {
    return {
      summaries,
      systems,
    };
  },
};
</script>
