<template>
  <div class="couponWrapper" v-if="showDiscount">
    <div class="bt-close" @click="hideDiscount">
      <svg style="width: 28px; height: 28px" viewBox="0 0 24 24">
        <path
          fill="#005246"
          d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
        />
      </svg>
    </div>
    <div class="couponInfo">Dapatkan Diskon 25% disini.</div>
  </div>
</template>
<script>
export default {
  name: "GetCoupon",
  data() {
    return {
      showDiscount: true,
    };
  },
  methods: {
    hideDiscount() {
      this.showDiscount = false;
    },
  },
  beforeUnmount() {
    console.log("Before Unmount is executed");
  },
  unmounted() {
    console.log("Unmounted is executed");
  },
};
</script>
<style scoped>
.couponWrapper {
  width: 220px;
  height: 30px;
  padding: 20px 10px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: #00c5a1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
}

.bt-close {
  position: absolute;
  right: -5px;
  top: -8px;
  cursor: pointer;
}

.couponInfo {
  color: white;
}

.closeIcon {
  fill: white;
}
</style>
