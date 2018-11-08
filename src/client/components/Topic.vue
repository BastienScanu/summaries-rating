<template>
  <div>
    <h1>Topic {{ topicId }}</h1>
    <h2>Human summaries</h2>
    <div class="textList">
      <summaryCard
        v-for="summary in references"
        v-bind:key="summary.id"
        :summary=summary></summaryCard>
    </div>
    <h2>Generated summaries</h2>
    <div class="textList">
      <summaryCard
        v-for="(summary, idx) in systems"
        v-bind:key="idx"
        :summary=summary
        :user=user
        :index=idx
        :topicId=topicId
        @rating=updateScore
        :canRate=true></summaryCard>
    </div>
  </div>
</template>

<script>
import SummaryCard from './elements/SummaryCard';

export default {
  name: 'Topic',
  data() {
    return {
      references: [],
      systems: [],
    };
  },
  props: ['user'],
  components: {
    SummaryCard,
  },
  created() {
    this.topicId = this.$route.params.topicId;
    this.$http.get(`http://localhost:4000/reference/${this.topicId}`)
      .then((response) => {
        this.references = response.body;
      });
    this.$http.get(`http://localhost:4000/system/${this.topicId}`)
      .then((response) => {
        this.systems = response.body;
      });
  },
  methods: {
    updateScore(data) {
      this.systems[data.index][`score-${data.user}`] = data.score;
    },
  },
};
</script>

<style>
  .textList {
    display: flex;
    justify-content: space-around;
  };
</style>
