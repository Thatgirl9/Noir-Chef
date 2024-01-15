<template>
  <div class="bg-foundation pt-[2em] lg:pt-[3em]">
    <div class="footer-img h-[25em]">
      <h1
        class="text-textColor text-4xl font-header font-bold text-center pt-16"
      >
        We are always ready to surprise <br class="hidden sm:block" />
        you with new flavours
      </h1>

      <div
        class="lg:pl-20 pl-10 lg:pt-[4.5em] pt-[3em] text-textColor flex flex-col gap-6"
      >
        <p class="flex gap-2 items-center cursor-pointer">
          <span
            ><img
              src="../assets/zondicons_location.png"
              class="w-[30px] h-[30px]"
          /></span>
          <span>Flavo, (Copenhagen, Denmark)</span>
        </p>

        <p class="flex gap-2 items-center cursor-pointer">
          <span
            ><img
              src="../assets/ic_baseline-call.png"
              class="w-[30px] h-[30px]"
          /></span>
          <span>0122</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer-img {
  background-image: url("../assets/Rectangle 24.png");
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-size: cover;
  /* height: 20em; */
}
</style>
