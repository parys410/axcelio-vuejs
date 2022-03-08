<template>
  <div>
    <h1>
      {{ isActive ? `Selamat Malam, ${nama}` : "Welcome, Please login first" }}
    </h1>
    <div v-if="isActive">
      <p>Umur saya {{ umur }} tahun</p>
      <p>{{ hoby }}</p>
      <p v-text="umur"></p>
      <div v-html="description"></div>
      <h1 v-if="nilai >= 90">Selamat Anda Lulus Cumlaude</h1>
      <h1 v-else-if="nilai >= 70">Selamat Anda Lulus</h1>
      <h1 v-else>Maaf, silahkan mengulang</h1>
      <div style="display: flex; justify-content: center; width: 100%">
        <div style="width: 300px">
          <ul>
            <li v-for="(hoby, index) in hobbies" :key="index">
              {{ `${hoby} - ${index}` }}
            </li>
          </ul>
        </div>
      </div>
      <p>
        {{ mobil.owner.pemilik }}
      </p>
      <div style="display: flex; justify-content: center; margin: 20px 0px">
        <div style="display: flex; gap: 40px">
          <div
            style="
              width: 250px;
              min-height: 250px;
              border: 1px solid gray;
              border-radius: 0.375rem;
              position: relative;
            "
            v-for="(data, index) in bootcamp_list"
            :key="index"
          >
            <div
              style="height: 120px"
              :style="{
                background: `url(${data.banner_img}) no-repeat`,
                backgroundSize: 'cover',
              }"
            ></div>
            <div style="text-align: left; padding: 10px 16px">
              <h3>{{ data.nama }}</h3>
              <p>{{ data.deskripsi }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a :href="url">{{ url }}</a>
    </div>
    <div style="margin-top: 8px">
      <button v-if="isActive" @click="showAlert">Log out</button>
      <button @click="showAlert" v-else>Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      url: "https://axcelio.id",
      nama: "Ary",
      umur: 30,
      isActive: true,
      hobbies: ["Bermusik", "Nonton Film"],
      description:
        "<p>Disini contoh <b>deskripsi</b> yang akan di show melalui v-html</p>",
      nilai: 70,
      mobil: {
        nama: "Toyota",
        warna: "Putih",
        plat_nomor: "DK 9987 FAP",
        owner: {
          pemilik: "Ary",
          tahun: "2008",
        },
      },
      bootcamp_list: [
        {
          nama: "UI/UX Design",
          deskripsi: "Kelas untuk artis dan designer",
          banner_img:
            "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/buMOEM4OcWdKjU4919IBJPPMvSGsYIsOiNOX9soO.jpg",
        },
        {
          nama: "System Administrator & Cloud Engineer",
          deskripsi:
            "Kelas untuk Linux system administrator dan Cloud Engineer",
          banner_img:
            "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/m1Qgmqa8lDHUrG92DIm1lhCUj9rwVdAbBT7PEyXN.jpg",
        },
        {
          nama: "Frontend Web Development",
          deskripsi:
            "Membuat website dengan tampilan menarik dan interaktif dengan html, css dan javascript",
          banner_img:
            "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/FBVDYUg1jOObdaKt3JKS6CZOW7EnDqu943bbYPh9.jpg",
        },
        {
          nama: "Full Stack Web Development dengan Laravel",
          deskripsi:
            "Membuat website dengan tampilan menarik dan interaktif dengan html, css dan javascript",
          banner_img:
            "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/sF66dwYcV7KTZks2ezUkHXCA0uVg6buAuWUAtkKS.png",
        },
      ],
    };
  },
  methods: {
    showAlert: function () {
      this.isActive
        ? window.alert("Anda telah logout!")
        : window.alert("Anda telah login!");
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
