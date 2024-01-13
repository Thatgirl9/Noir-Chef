<template>
  <div class="bg-foundation w-full">
    <div
      class="pt-24 text-center flex flex-col justify-center items-center mb-[9em] gap-9"
    >
      <h1 class="text-headerText font-header text-4xl font-semibold">
        Our Specialities
      </h1>
      <p
        class="text-textColor font-bigText font-normal text-2xl sm:text-2xl w-[90%] sm:max-w-none"
      >
        Authentic meals from our restaurant served with high<br
          class="hidden sm:block"
        />
        quality ingredients.
      </p>

      <div
        class="flex flex-row gap-5 flex-wrap justify-center items-center mt-16"
      >
        <button
          class="py-[6px] px-[47px] hover:bg-buttonColor text-textColor rounded-xl text-lg bg-transparent transition-all border-2 border-buttonColor"
        >
          Specialities
        </button>

        <button
          class="py-[6px] px-[47px] hover:bg-buttonColor text-textColor rounded-xl text-lg bg-transparent transition-all border-2 border-buttonColor"
        >
          Homestyle Sushi
        </button>

        <button
          class="py-[6px] px-[47px] hover:bg-buttonColor text-textColor rounded-xl text-lg bg-transparent transition-all border-2 border-buttonColor"
        >
          Steak
        </button>

        <button
          class="py-[6px] px-[47px] hover:bg-buttonColor text-textColor rounded-xl text-lg bg-transparent transition-all border-2 border-buttonColor"
        >
          With Rice
        </button>

        <button
          class="py-[4px] px-[47px] hover:bg-buttonColor text-textColor rounded-xl text-lg bg-transparent transition-all border-2 border-buttonColor"
        >
          Cocktails
        </button>

        <button
          class="py-[4px] px-[47px] hover:bg-buttonColor text-textColor rounded-xl text-lg bg-transparent transition-all border-2 border-buttonColor"
        >
          Appetizer
        </button>
      </div>
    </div>
    <div class="flex justify-center items-center border-2">
      <div class="mt-20 specialities-bg h-[100vh] border-2 border-red-500">
        <!-- Specialities -->
        <div class="border-2 border-green-500 w-[90%] lg:w-full">
          <!-- 1 -->
          <div>
            <img
              src="../assets/Rectangle 14.png"
              width="200em"
              height="450px"
            />
            <p></p>
          </div>
          <h1 class="text-textColor">Hello</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Specialities",
};
</script>

<style>
.specialities-bg {
  background-image: url("../assets/unsplash_aAiy88ytl0c.png");
  background-repeat: no-repeat;
  background-size: 48%;
  background-position: center;
  width: 100%;
}

@media screen and (max-width: 640px) {
  .specialities-bg {
    background-size: 100%;
    background-position: none;
  }
}
</style>
