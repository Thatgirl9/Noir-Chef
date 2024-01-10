<template>
  <div class="absolute w-full h-full">
    <header class="bg-headerBg w-full h-[14vh] px-10 pt-4 z-50">
      <div class="relative top-0 left-0">
        <img
          src="../assets/Ellipse 4 (2).png"
          class="w-[110px] h-[94px] relative top-0 left-0"
        />
        <img
          src="../assets/Default.png"
          class="w-[90px] h-[90px] absolute bottom-2.5 left-2.5"
        />
      </div>
    </header>

    <div class="overlay -z-20"></div>
    <div class="hero-img -z-20">
      <h1 class="font-bigText text-red-500">Hero Page</h1>
      <p class="font-smText">Wassup</p>
      <h1 class="font-header">Header</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      imageUrl: { backgroundImage: "url('../assets/Rectangle 2.png')" },
      imageSrc: "../assets/Rectangle 2.png",
    };
  },
};
</script>

<style>
.hero-img {
  height: 120vh;
  width: 100%;
  background-image: url("../assets/Rectangle 2.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  /* top: 1em; */
}

.overlay {
  position: absolute;
  /* top: 5em; */
  left: 0;
  width: 100%;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
}
</style>
