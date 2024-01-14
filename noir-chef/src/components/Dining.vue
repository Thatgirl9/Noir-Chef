<template>
  <div class="bg-foundation">
    <div
      class="pt-[9em] text-center flex flex-col justify-center items-center gap-[2em] mb-[8em]"
    >
      <h1 class="text-headerText font-header text-4xl font-semibold">
        Dining Events
      </h1>

      <p
        class="text-textColor font-bigText font-normal text-2xl sm:text-2xl w-[90%] sm:max-w-none"
      >
        We provide dining event for your special day<br
          class="hidden sm:block"
        />
        with your important people
      </p>

      <div class="flex gap-5 sm:gap-6 flex-col sm:flex-row">
        <button
          class="py-[6px] px-[47px] hover:bg-buttonColor text-textColor rounded-xl text-lg bg-transparent transition-all border-2 border-buttonColor"
        >
          Private Events
        </button>

        <button
          class="py-[6px] px-[47px] hover:bg-buttonColor text-textColor rounded-xl text-lg bg-transparent transition-all border-2 border-buttonColor"
        >
          Corporate Events
        </button>
      </div>
    </div>

    <!-- <div class="flex justify-center items-center">
      <div class="flex justify-center items-center w-[90%] lg:w-[70%]">
        <div
          class="flex flex-col lg:flex-row justify-end items-start gap-[8em] gradient"
        >
          <div class="text-textColor">
            <h1>Fine Dining</h1>
            <p>
              Bottle of Champagne<br />
              Fine Sushi Tower For 2+<br />
              Dessert
            </p>
          </div>

          <div class="flex justify-center lg:justify-end items-end w-[65%]">
            <p class="text-headerText">$500</p>
            <img src="../assets/Rectangle 17.png" class="w-[full] h-[full]" />
          </div>
        </div>
      </div>
    </div> -->
    <h1 class="text-textColor">Dining Event</h1>
  </div>
</template>

<script>
export default {
  name: "Dining",
};
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #000 55%, rgba(0, 0, 0, 0) 100%);
}
</style>
