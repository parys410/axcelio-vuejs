<template>
  <div class="header">
    <h4>{{ webTitle }}</h4>
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
  padding: 8px 16px;
  border-radius: 0.2rem;
  border: none;
  outline: none;
  background: #f0f0f0;
}
</style>
