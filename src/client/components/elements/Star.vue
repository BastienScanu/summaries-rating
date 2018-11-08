<template>
  <svg
    class="vue-star-rating-star"
    :height="size"
    :width="size"
    :viewBox="viewBox"
    @mousemove="mouseMoving"
    @click="selected">

    <linearGradient :id="grad" x1="0" x2="100%" y1="0" y2="0">
      <stop :offset="getFill" :stop-color="activeColor" />
      <stop :offset="getFill" :stop-color="inactiveColor" />
    </linearGradient>

    <polygon
      :points="starPoints"
      :fill="getGradId"
      :stroke-linejoin="'miter'" />
    <polygon :points="starPoints" :fill="getGradId" />
  </svg>
</template>

<script type="text/javascript">
export default {
  props: {
    fill: {
      type: Number,
      default: 0,
    },
    starId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getGradId() {
      return `url(#${this.grad})`;
    },
    getFill() {
      return `${this.fill}%`;
    },
    viewBox() {
      return '0 0 43.56 43.56';
    },
  },
  methods: {
    mouseMoving($event) {
      this.$emit('star-mouse-move', {
        event: $event,
        position: this.getPosition($event),
        id: this.starId,
      });
    },
    getPosition($event) {
      // calculate position in percentage.
      const starWidth = (92 / 100) * this.size;
      const offset = Math.max($event.offsetX, 1);
      const position = Math.round((100 / starWidth) * offset);
      return Math.min(position, 100);
    },
    selected($event) {
      this.$emit('star-selected', {
        id: this.starId,
        position: this.getPosition($event),
      });
    },
    getRandomId() {
      return Math.random().toString(36).substring(7);
    },
  },
  data() {
    return {
      starPoints: '19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56',
      grad: Math.random().toString(36).substring(7),
      size: '30',
      inactiveColor: '#d8d8d8',
      activeColor: '#ffd055',
    };
  },
};
</script>

<style scoped>
  .vue-star-rating-star {
    overflow: visible !important;
  }
</style>
