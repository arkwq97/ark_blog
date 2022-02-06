<template>
  <div class="homeBanner">
    <div class="bannerA"></div>
    <div class="bannerB"></div>
    <div class="bannerD"></div>
    <div class="bannerC"></div>
    <div>
      <h1 class="name">{{ bannerInfo.title }}</h1>
      <p class="slogan">{{ bannerInfo.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeBanner",
  props: {
    bannerInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
.homeBanner {
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url("../../assets/background/ark.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
}

.bannerA,
.bannerB,
.bannerC,
.bannerD {
  position: absolute;
  width: 100%;
  height: 400px;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow: hidden;
  opacity: 0.5;
  transition: 0.6s;
}

.bannerA::after,
.bannerB::after,
.bannerC::after,
.bannerD::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 400px;
  background-image: url("../../assets/background/ark.jpg");
  background-size: cover;
}

.bannerA {
  left: -400px;
  transform: rotateZ(100deg);
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 1));
}

.bannerA::after {
  transform: rotateZ(-100deg);
  background-position-x: 400px;
}

.bannerB {
  left: -400px;
  transform: rotateZ(-100deg);
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 1));
  transition-delay: 0.2s;
}

.bannerB::after {
  transform: rotateZ(100deg);
  background-position-x: 400px;
}

.bannerC {
  right: -400px;
  transform: rotateZ(100deg);
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 1));
  transition-delay: 0.2s;
}

.bannerC::after {
  transform: rotateZ(-100deg);
  background-position-x: -400px;
}

.bannerD {
  right: -400px;
  transform: rotateZ(-100deg);
  filter: drop-shadow(4px -4px 12px rgba(0, 0, 0, 1));
}

.bannerD::after {
  transform: rotateZ(100deg);
  background-position-x: -400px;
}

.name {
  font: 400 40px "";
  margin-block-start: 1em;
  margin-block-end: 1em;
  user-select: none;
  color: white;
}

.slogan {
  opacity: 0;
  filter: blur(15px);
  font: 200 22px "";
  user-select: none;
  color: white;
  transition: 0.4s;
}

.homeBanner:hover .bannerA,
.homeBanner:hover .bannerB {
  left: -600px;
  opacity: 0;
}

.homeBanner:hover .bannerC,
.homeBanner:hover .bannerD {
  right: -600px;
  opacity: 0;
}

.homeBanner:hover .slogan {
  opacity: 1;
  filter: blur(0);
  transition-delay: 0.3s;
}
</style>