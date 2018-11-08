<template>
  <div class="card">
    <div>
      <span
        v-for="(sentence, idx) in summary.text"
        v-bind:key="idx">{{ sentence }}
      </span>
    </div>
    <hr v-if=canRate>
    <stars-rating
      v-if=canRate
      :rating="rating"
      @rating-selected="updateScore($event)">
    </stars-rating>
  </div>
</template>

<script>
import StarsRating from './StarsRating';

export default {
  name: 'SummaryCard',
  computed: {
    rating() {
      return this.summary[`score-${this.user}`] || 0;
    },
  },
  components: {
    StarsRating,
  },
  methods: {
    updateScore(event) {
      const modif = {
        index: this.index,
        user: this.user,
        score: event,
      };
      this.$emit('rating', modif);
      this.$http.put(`http://localhost:4000/system/${this.topicId}`, modif);
    },
  },
  props: ['summary', 'canRate', 'user', 'topicId', 'index'],
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
