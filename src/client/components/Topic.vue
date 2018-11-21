<template>
  <div>
    <h1>Topic {{ topicId }} - {{ topic.name }}</h1>
    <h2>Human summaries</h2>
    <div class="textList">
      <summaryCard
        v-for="summary in topic.references"
        v-bind:key="summary.id"
        :summary=summary></summaryCard>
    </div>
    <h2>Generated summaries</h2>
    <div class="textList">
      <summaryCard
        v-for="(summary, idx) in topic.systems"
        v-bind:key="idx"
        :summary=summary
        :user=user
        :index=idx
        :topicId=topicId
        :datasetId=datasetId
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
      topic: {},
    };
  },
  props: ['user'],
  components: {
    SummaryCard,
  },
  created() {
    this.datasetId = this.$route.params.datasetId;
    this.topicId = this.$route.params.topicId;
    this.$http.get(`http://localhost:4000/dataset/${this.datasetId}/topic/${this.topicId}`)
      .then((response) => {
        this.topic = response.body;
      });
  },
  methods: {
    updateScore(data) {
      this.topic.systems[data.index][`score-${data.user}`] = data.score;
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
