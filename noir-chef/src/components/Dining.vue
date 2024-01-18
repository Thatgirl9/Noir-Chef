<template>
  <div class="bg-foundation">
    <div
      class="pt-[9em] text-center flex flex-col justify-center items-center gap-[2em] mb-[8em] lg:mb-[10em]"
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

    <div class="flex flex-col justify-center items-center gap-[8em]">
      <!-- 1 -->
      <div
        class="flex justify-center lg:items-start lg:gap-[6em] lg:flex-row flex-col items-center"
      >
        <div class="text-textColor flex flex-col gap-[1em]">
          <h1 class="font-header text-4xl font-semibold">Fine Dining</h1>
          <p class="font-bigText text-base">
            Bottle of Champagne<br />
            Fine Sushi Tower For 2+<br />
            Dessert
          </p>
          <p class="text-headerText font-header text-4xl font-semibold">$500</p>
        </div>

        <div
          class="lg:w-[60%] w-[90%] flex items-end gap-2 lg:flex-row flex-col"
        >
          <!-- <div class="inner-shadow"></div> -->

          <img
            src="../assets/Rectangle 17.png"
            class="w-[full] h-[full] gradient"
          />
        </div>
      </div>

      <!-- 2 -->
      <div
        class="flex justify-center lg:items-start lg:gap-[6em] lg:flex-row-reverse flex-col items-center"
      >
        <div class="text-textColor flex flex-col gap-[1em]">
          <h1 class="font-header text-4xl font-semibold">Gold Dining</h1>
          <p class="font-bigText lg:text-right text-base">
            Bottle of Champagne<br />
            Secret Menu Sushi For 2+<br />
            Dessert
          </p>
          <p
            class="text-headerText font-header text-4xl font-semibold lg:text-right"
          >
            $1000
          </p>
        </div>

        <div
          class="lg:w-[60%] w-[90%] flex items-end gap-2 lg:flex-row-reverse flex-col"
        >
          <img
            src="../assets/Rectangle 19.png"
            class="w-[full] h-[full] gradient"
          />
        </div>
      </div>

      <!-- 3 -->
      <div
        class="flex justify-center lg:items-start lg:gap-[6em] lg:flex-row flex-col items-center"
      >
        <div class="text-textColor flex flex-col gap-[1em]">
          <h1 class="font-header text-4xl font-semibold">Royalty Dining</h1>
          <p class="font-bigText text-base">
            Bottle of Luxury Champagne<br />
            Fine Sushi Tower For 2+<br />
            Dessert
          </p>
          <p class="text-headerText font-header text-4xl font-semibold">
            $1500
          </p>
        </div>

        <div
          class="lg:w-[60%] w-[90%] flex items-end gap-2 lg:flex-row flex-col"
        >
          <img
            src="../assets/Rectangle 21.png"
            class="w-[full] h-[full] gradient"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dining",
};
</script>

<style>
.inner-shadow {
  position: absolute;
  top: 0;
  left: 3em;
  width: 500px; /* Adjust the width of the shadow as needed */
  height: 500px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: -1;
  border: 1px solid green;
}
</style>
