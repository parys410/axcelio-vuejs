<template>
  <div class="card">
    <div
      class="header"
      :style="{
        background: `url(${data.img}) no-repeat`,
        backgroundSize: 'cover',
      }"
    ></div>
    <div class="info">
      <h4>{{ data.title }}</h4>
      <p>{{ data.description }}</p>
      <h5>{{ data.harga }}</h5>
    </div>
    <div class="bt-pesan">
      <button
        class="button-pesan"
        @click="pesanSekarang(data.title)"
        v-if="statusPesan"
      >
        Daftar Sekarang
      </button>
      <button
        class="button-pesan-sukses"
        @click="pesanSekarang(data.title)"
        v-else
      >
        Mulai Kelas
      </button>
    </div>
    <div
      class="status"
      :style="data.status == 'online' ? 'background: green' : 'background: red'"
    >
      {{ data.status }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ThumbnailPost",
  props: {
    data: Object,
  },
  data() {
    return {
      statusPesan: true,
    };
  },
  methods: {
    pesanSekarang(title) {
      window.alert(`Sukses mendaftar ${title}`);
      this.statusPesan = false;
    },
  },
  beforeUpdate() {
    console.log("BeforeUpdate is executed");
  },
  updated() {
    console.log("Updated is executed");
  },
};
</script>
<style scoped>
.card {
  min-width: 300px;
  min-height: 150px;
  position: relative;
  border: 1px solid lightgray;
  border-radius: 0.375rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
}
.card:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.header {
  height: 150px;
}

.info {
  padding: 20px 24px;
  margin-bottom: 10px;
}

.status {
  position: absolute;
  right: 20px;
  top: 135px;
  padding: 5px 10px;
  border-radius: 0.375rem;
  color: white;
  text-transform: capitalize;
  font-size: 10pt;
}

.bt-pesan {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.button-pesan {
  display: inline-block;
  width: 100%;
  border: none;
  background-color: #04aa6d;
  padding: 10px 18px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  border-radius: 0.375rem;
  color: white;
}

.button-pesan-sukses {
  display: inline-block;
  width: 100%;
  border: none;
  background-color: lightsalmon;
  padding: 10px 18px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  border-radius: 0.375rem;
  color: white;
}
</style>
