<template>
  <div class="card">
    <div>
      <span
        v-for="(sentence, idx) in summary.text"
        v-bind:key="idx">{{ sentence }}
      </span>
    </div>
    <hr v-if=canRate>
    <stars-rating v-if=canRate :rating=getRate></stars-rating>
  </div>
</template>

<script>
import StarsRating from './StarsRating';

export default {
  name: 'SummaryCard',
  computed: {
    getRate() {
      return this.summary[`score-${this.user}`] || 0;
    },
  },
  components: {
    StarsRating,
  },
  props: ['summary', 'canRate', 'user'],
};
</script>

<style>
    .card {
        background: #fff;
        border-radius: 2px;
        margin: 1rem;
        padding: 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>
