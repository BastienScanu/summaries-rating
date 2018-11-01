<template>
  <div>
    <h1>Summary</h1>
    <h2>Human summaries</h2>
    <p v-for="summary in references" v-bind:key="summary.id">
      <span v-for="(sentence, idx) in summary.text" v-bind:key="idx">{{ sentence }}</span>
    </p>
    <h2>Generated summaries</h2>
    <p v-for="(summaries, idx) in systems" v-bind:key="idx">
      <span
        v-for="(sentence, idx) in summaries.text"
        v-bind:key="idx">{{ sentence }}
      </span>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Summary',
  data() {
    return {
      references: [],
      systems: [],
    };
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
