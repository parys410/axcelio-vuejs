<template>
  <div class="appWrapper">
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
import ThumbnailPost from "../components/ThumbnailPost.vue";
import GetCoupon from "../components/GetCoupon.vue";
export default {
  name: "HomePage",
  data() {
    return {
      webTitle: "Belajar Component",
      thumbnailPosts: [
        {
          id: 1,
          title: "Basic PHP Development",
          slug: "basic-php-development",
          description: "Membangun web dengan PHP dan MySQL...",
          harga: "Rp. 320.000",
          status: "online",
          img: "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/hoiPRqpCekU00HJZHHeEFjTshkM7gm6emCGHhy19.png",
        },
        {
          id: 2,
          title: "Fullstack Web Development dengan Laravel",
          slug: "fullstack-web-development-dengan-laravel",
          description:
            "Level up skill PHPmu  dengan Laravel dan ekosistemnya...",
          harga: "Rp. 560.000",
          status: "online",
          img: "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/mSk1FagnUiyDVbJ8Sh5EBnxmFHgyFS5NumYZgV63.png",
        },
        {
          id: 3,
          title: "Laravel Tingkat Lanjut",
          slug: "laravel-tingkat-lanjut",
          description:
            "Dalam kelas ini kamu akan belajar mengenai konsep dan teknik lanjut dalam Framew...",
          harga: "Rp. 450.000",
          status: "online",
          img: "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/uwq9vohdCIbMhTHACriLzm7M50VBQKMpf2ioDp7u.png",
        },
        {
          id: 4,
          title: "Basic PHP Development",
          slug: "basic-php-development",
          description: "Membangun web dengan PHP dan MySQL...",
          harga: "Rp. 320.000",
          status: "offline",
          img: "https://axcelio.s3.ap-southeast-1.amazonaws.com/upload/SwILYTUeXyML9SaTxFMlhPbEJRRg43Ey3rKeTUDJ.png",
        },
      ],
    };
  },
  components: { ThumbnailPost, GetCoupon },
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
<style scoped>
.bodySite {
  display: flex;
  gap: 10px;
}
</style>
