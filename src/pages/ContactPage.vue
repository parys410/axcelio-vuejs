<template>
  <div class="contactPage">
    <h3>Meet Our Instructor</h3>
    <div class="developmentContact">
      <div
        class="contactPage"
        v-for="(dev, index) in developersTeam"
        :key="index"
      >
        <div
          class="circle"
          :style="{
            background: `url('${dev.imgUrl}') no-repeat`,
            backgroundSize: 'cover',
          }"
        ></div>
        <span class="namaKontak">{{ dev.nama }}</span>
        <span class="jobKontak">{{ dev.job }}</span>
        <span class="phoneKontak">Telp. {{ dev.phone }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactPage",
  data() {
    return {
      developersTeam: [
        {
          nama: "Stepen",
          job: "Frontend Engineer",
          phone: "0818887799",
          imgUrl:
            "https://blog.amartha.com/wp-content/uploads/2020/11/cara-atur-keuangan-untuk-freelancer.jpg",
        },
        {
          nama: "Sabala",
          job: "Backend Engineer",
          phone: "08122315462",
          imgUrl:
            "https://asset.kompas.com/crops/rBxlDZNZrN14ah85aMdWQXmuq8E=/0x0:1000x667/750x500/data/photo/2018/01/30/458892472.jpg",
        },
        {
          nama: "Ary S",
          job: "QA Engineer",
          phone: "0817986532",
          imgUrl:
            "https://t4.ftcdn.net/jpg/01/49/58/57/360_F_149585723_X4Iwd04tnOfxacEbbUf7bSTol5YpiCm5.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.contactPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.developmentContact {
  display: flex;
  flex-direction: row;
  gap: 120px;
  margin-top: 40px;
}

.circle {
  width: 150px;
  height: 150px;
  background: gray;
  border-radius: 50%;
}

.namaKontak {
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
}

.jobKontak {
  font-size: 16px;
  font-weight: 400;
  margin-top: 4px;
}

.phoneKontak {
  font-size: 14px;
  font-weight: 300;
  margin-top: 4px;
}
</style>
