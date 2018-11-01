<template>
  <div>
    <div v-if="user">
      <h1>Summaries</h1>
      <ul>
        <li v-for="(value, key) in summaries" v-bind:key="key">
          <router-link :to="{ name: 'Summary', params: { summaryId: key }}">{{ key }}</router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>You must choose an user to start</p>
    </div>

    <select v-model="user">
      <option disabled value="">Select your user</option>
      <option>Aragorn</option>
      <option>Gandalf</option>
      <option>Gimli</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'SummariesList',
  data() {
    return {
      user: '',
      summaries: [],
    };
  },
  created() {
    this.$http.get('http://localhost:3000/reference')
      .then((response) => {
        this.summaries = response.body;
      });
  },
};
</script>
