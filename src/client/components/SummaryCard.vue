<template>
    <div class="card">
        <span
            v-for="(sentence, idx) in summary.text"
            v-bind:key="idx">{{ sentence }}
        </span>
    </div>
</template>

<script>
export default {
  name: 'SummaryCard',
  data() {
    return {
      summaries: [],
    };
  },
  props: ['summary'],
};
</script>

<style>

</style>
