<template>
  <div id="app">
    <header>
      <h1>Summaries Rating</h1>

      <select v-model="user">
        <option disabled value="">Select your user</option>
        <option>Aragorn</option>
        <option>Gandalf</option>
        <option>Gimli</option>
      </select>
    </header>
    <router-view v-if=user :user=user></router-view>
    <div v-else>
      <h1>You must choose an user to start</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: '',
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  text-align: center;
}

header {
  padding: 20px;
  color: white;;
  background: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
