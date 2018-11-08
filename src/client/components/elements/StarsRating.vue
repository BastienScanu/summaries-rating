<template>
  <div class='vue-star-rating'>
    <div @mouseleave="resetRating" class="vue-star-rating">
      <span
        v-for="n in maxRating"
        :key="n"
        class='vue-star-rating-pointer vue-star-rating-star'>
       <star
        :fill="fillLevel[n-1]"
        :star-id="n"
        @star-selected="setRating($event, true)"
        @star-mouse-move="setRating"></star>
      </span>
      <span class="vue-star-rating-rating-text">
        {{formattedRating}}
      </span>
    </div>
  </div>
</template>
<script type="text/javascript">
import Star from './Star';

export default {
  components: {
    Star,
  },
  model: {
    prop: 'rating',
    event: 'rating-selected',
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
  created() {
    this.currentRating = this.rating;
    this.selectedRating = this.currentRating;
    this.createStars();
  },
  methods: {
    setRating($event, persist) {
      const position = $event.position / 100;
      this.currentRating = (($event.id + position) - 1).toFixed(2);
      this.currentRating = (this.currentRating > this.maxRating) ?
        this.maxRating :
        this.currentRating;
      this.createStars();
      if (persist) {
        this.selectedRating = this.currentRating;
        this.$emit('rating-selected', this.selectedRating);
        this.ratingSelected = true;
      } else {
        this.$emit('current-rating', this.currentRating);
      }
    },
    resetRating() {
      this.currentRating = this.selectedRating;
      this.createStars();
    },
    createStars() {
      this.round();
      for (let i = 0; i < this.maxRating; i += 1) {
        let level = 0;
        if (i < this.currentRating) {
          level = (this.currentRating - i > 1) ? 100 : (this.currentRating - i) * 100;
        }
        this.$set(this.fillLevel, i, Math.round(level));
      }
    },
    round() {
      const inv = 1.0 / this.increment;
      this.currentRating = Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv);
    },
  },
  computed: {
    formattedRating() {
      return this.currentRating;
    },
  },
  watch: {
    rating(val) {
      this.currentRating = val;
      this.selectedRating = val;
      this.createStars();
    },
  },
  data() {
    return {
      fillLevel: [],
      currentRating: 0,
      selectedRating: 0,
      maxRating: 5,
      increment: 0.5,
      ratingSelected: false,
    };
  },
};
</script>
<style scoped>
  .vue-star-rating-star {
    display: inline-block;
  }
  .vue-star-rating-pointer {
    cursor: pointer;
  }
  .vue-star-rating {
    display: flex;
    align-items: center;
  }
</style>
