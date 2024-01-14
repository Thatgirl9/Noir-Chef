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
    <div class="flex justify-center items-center">
      <div class="mt-20 specialities-bg flex justify-center">
        <!-- Specialities -->
        <div
          class="w-[90%] lg:w[70%] flex flex-col gap-[6em] lg:gap-[10em] md:flex-row md:flex-wrap lg:flex-col md:justify-center"
        >
          <!-- 1 -->
          <div
            class="flex flex-col lg:flex-row justify-center gap-[2em] lg:gap-[10em] mt-[6em] hover:border-2 hover:border-black hover:rounded-lg hover:shadow-2xl hover:shadow-gray-900 pb-5 lg:hover:shadow-none lg:hover:rounded-none lg:border-none"
          >
            <div class="flex justify-center">
              <img
                src="../assets/Rectangle 14.png"
                width="350em"
                height="450px"
                class=""
              />
            </div>

            <div
              class="text-textColor flex flex-col gap-[1em] lg:justify-end font-bigText items-center"
            >
              <h2 class="text-2xl text-center">Dragon Sushi</h2>
              <p class="lg:text-base text-lg font-normal font-bigText">
                Ingredients: Lorem ipsum dolor sit<br />
                amet, consectetur adipiscing elit.<br />
                Etiam ut imperdiet lectus. Donec<br />
                vitae vulputate nunc, in laoreet<br />
                urna.
              </p>
              <p
                class="font-priceText text-center lg:text-left text-headerText font-bold text-xl w-full"
              >
                $50
              </p>
            </div>
          </div>

          <!-- 2 -->
          <div
            class="flex flex-col lg:flex-row-reverse justify-center gap-[2em] lg:gap-[10em] hover:border-2 hover:border-black hover:rounded-lg hover:shadow-2xl hover:shadow-gray-900 pb-5 lg:hover:shadow-none lg:hover:rounded-none lg:border-none"
          >
            <div class="flex justify-center">
              <img
                src="../assets/Rectangle 15.png"
                width="350em"
                height="450px"
                class=""
              />
            </div>

            <div
              class="text-textColor flex flex-col gap-[1em] lg:justify-end font-bigText items-center"
            >
              <h2 class="text-2xl text-center">Creamy Sushi</h2>
              <p class="lg:text-base text-lg font-normal font-bigText">
                Ingredients: Lorem ipsum dolor sit<br />
                amet, consectetur adipiscing elit.<br />
                Etiam ut imperdiet lectus. Donec<br />
                vitae vulputate nunc, in laoreet<br />
                urna.
              </p>
              <p
                class="font-priceText text-center lg:text-left text-headerText font-bold text-xl w-full"
              >
                $50
              </p>
            </div>
          </div>

          <!-- 3 -->
          <div
            class="flex flex-col lg:flex-row justify-center gap-[2em] lg:gap-[10em] hover:border-2 hover:border-black hover:rounded-lg hover:shadow-2xl hover:shadow-gray-900 pb-5 lg:hover:shadow-none lg:hover:rounded-none lg:border-none"
          >
            <div class="flex justify-center">
              <img
                src="../assets/Rectangle 16.png"
                width="350em"
                height="450px"
                class=""
              />
            </div>

            <div
              class="text-textColor flex flex-col gap-[1em] lg:justify-end font-bigText items-center"
            >
              <h2 class="text-2xl text-center">Roll Salmon Sushi</h2>
              <p class="lg:text-base text-lg font-normal font-bigText">
                Ingredients: Lorem ipsum dolor sit<br />
                amet, consectetur adipiscing elit.<br />
                Etiam ut imperdiet lectus. Donec<br />
                vitae vulputate nunc, in laoreet<br />
                urna.
              </p>
              <p
                class="font-priceText text-center lg:text-left text-headerText font-bold text-xl w-full"
              >
                $50
              </p>
            </div>
          </div>
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
  background-size: 80%;
  background-position: center;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .specialities-bg {
    background-size: cover;
    background-position: none;
  }
}
</style>
