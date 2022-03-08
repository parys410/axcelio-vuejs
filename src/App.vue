<template>
  <div class="appWrapper">
    <web-header :web-title="webTitle" />
    <div class="bodySite">
      <thumbnail-post
        v-for="(post, index) in thumbnailPosts"
        :key="index"
        :data="post"
      />
    </div>
    <get-coupon />
  </div>
</template>

<script>
import WebHeader from "./components/WebHeader.vue";
import ThumbnailPost from "./components/ThumbnailPost.vue";
import GetCoupon from "./components/GetCoupon.vue";
export default {
  name: "App",
  data() {
    return {
      webTitle: "Belajar Component",
      thumbnailPosts: [
        {
          title: "Basic PHP Development",
          description: "Membangun web dengan PHP dan MySQL...",
          harga: "Rp. 320.000",
          status: "online",
          img: "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/hoiPRqpCekU00HJZHHeEFjTshkM7gm6emCGHhy19.png",
        },
        {
          title: "Fullstack Web Development dengan Laravel",
          description:
            "Level up skill PHPmu  dengan Laravel dan ekosistemnya...",
          harga: "Rp. 560.000",
          status: "online",
          img: "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/mSk1FagnUiyDVbJ8Sh5EBnxmFHgyFS5NumYZgV63.png",
        },
        {
          title: "Laravel Tingkat Lanjut",
          description:
            "Dalam kelas ini kamu akan belajar mengenai konsep dan teknik lanjut dalam Framew...",
          harga: "Rp. 450.000",
          status: "online",
          img: "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/uwq9vohdCIbMhTHACriLzm7M50VBQKMpf2ioDp7u.png",
        },
        {
          title: "Basic PHP Development",
          description: "Membangun web dengan PHP dan MySQL...",
          harga: "Rp. 320.000",
          status: "offline",
          img: "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/SwILYTUeXyML9SaTxFMlhPbEJRRg43Ey3rKeTUDJ.png",
        },
      ],
    };
  },
  components: { WebHeader, ThumbnailPost, GetCoupon },
  beforeCreate() {
    console.log("Before Create is Executed");
  },
  created() {
    console.log("Element Berhasil di Create");
  },
  beforeMount() {
    console.log("BeforeMount is called");
  },
  mounted() {
    console.log("Mounted is called");
  },
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

.bodySite {
  padding: 40px 64px;
  display: flex;
  gap: 10px;
}

.appWrapper {
  position: relative;
  height: 100vh;
}
</style>
