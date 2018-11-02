<template>
  <div>
    <h1>Summary</h1>
    <h2>Human summaries</h2>
    <p v-for="summary in references" v-bind:key="summary.id" class="textList">
      <summaryCard :summary=summary></summaryCard>
    </p>
    <h2>Generated summaries</h2>
    <p v-for="(summary, idx) in systems" v-bind:key="idx" class="textList">
      <summaryCard :summary=summary></summaryCard>
    </p>
  </div>
</template>

<script>
import SummaryCard from './SummaryCard';

export default {
  name: 'Summary',
  data() {
    return {
      references: [],
      systems: [],
    };
  },
  components: {
    SummaryCard,
  },
  created() {
    const summaryId = this.$route.params.summaryId;
    this.$http.get(`http://localhost:3000/reference/${summaryId}`)
      .then((response) => {
        this.references = response.body;
      });
    this.$http.get(`http://localhost:3000/system/${summaryId}`)
      .then((response) => {
        this.systems = response.body;
      });
  },
};
</script>

<style>
  .textList {
    display: flex;
  };
</style>
