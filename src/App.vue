<template>
  <div class="app">
    <web-header :web-title="webTitle" />
    <router-view class="mainView"></router-view>
  </div>
</template>

<script>
import WebHeader from "./components/WebHeader.vue";
export default {
  name: "App",
  data() {
    return {
      webTitle: "e-Course",
    };
  },
  components: { WebHeader },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

.app {
  position: relative;
  height: 100vh;
}

.mainView {
  padding: 40px 64px;
}
</style>
