<template>
  <div class="header">
    <div class="mainLogo">
      <h4>{{ webTitle }}</h4>
      <div class="webNav">
        <router-link class="nav" to="/">Home</router-link>
        <router-link class="nav" to="/about">About</router-link>
        <router-link class="nav" to="/contact">Contact</router-link>
      </div>
    </div>
    <input class="searchbox" v-model="kataKunci" placeholder="Cari kelas" />
  </div>
</template>

<script>
export default {
  name: "PesanSayaComponent",
  props: {
    webTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      kataKunci: "",
    };
  },
};
</script>

<style scoped>
.header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  background: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-bottom: 1px solid lightgray;
}

.searchbox {
  display: inline-block;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 0.2rem;
  border: none;
  outline: none;
  background: #f0f0f0;
}

.mainLogo {
  display: flex;
  gap: 48px;
}

.webNav {
  display: flex;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  cursor: pointer;
  padding: 0 16px;
}

.nav:hover {
  background: lightgray;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

a:active {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  text-decoration: none;
  color: #2c3e50;
}

.router-link-active {
  text-decoration: none;
  background: lightgrey;
}
</style>
