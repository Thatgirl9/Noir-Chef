<template>
  <div class="menu-div bg-foundation w-full">
    <div
      class="pt-28 text-center flex flex-col justify-center items-center gap-11 relative mb-[9em]"
    >
      <h1 class="text-headerText font-header text-4xl font-semibold">
        Today's Special
      </h1>
      <p
        class="text-textColor font-bigText font-normal text-2xl sm:text-3xl w-[90%] sm:max-w-none"
      >
        Special menu often comes different everyday,<br
          class="hidden sm:block"
        />
        this is our special food for today
      </p>
      <img
        src="../assets/Vector 2 (1).png"
        width="200px"
        height="200px"
        class="absolute lg:top-[8em] lg:left-[9em] top-[1em] left-0 lg:w-[200px] lg:h-[200px] w-[90px] h-[90px]"
      />
      <img
        src="../assets//Vector 1.png"
        width="200px"
        height="200px"
        class="absolute lg:right-[10em] lg:bottom-0 hidden lg:block"
      />
    </div>

    <!-- Menu using json -->
    <div
      class="flex justify-center item-center flex-col flex-wrap md:flex-row gap-8 pb-20"
    >
      <div
        v-for="dish in menu"
        :key="dish.id"
        class="text-textColor flex flex-col justify-center items-center sm:flex-row sm:flex-wrap"
      >
        <div
          class="w-[67%] md:w-[100%] flex flex-col gap-3 hover:border hover:border-menuBtnColor hover:cursor-pointer hover:rounded-2xl p-1 pb-5 hover:shadow-lg hover:shadow-menuBtnColor"
        >
          <div class="flex justify-center">
            <img
              :src="dish.menuimg"
              class="w-[15em] h-[13em] flex justify-center items-center"
            />
          </div>

          <h2 class="text-left">{{ dish.title }}</h2>
          <p class="desc-p">{{ dish.desc }}</p>
          <p class="flex gap-1">
            <img :src="dish.starimgyelow" class="w-[1.5em] h-[1.4em]" />
            <img :src="dish.starimgyelow" class="w-[1.5em] h-[1.4em]" />
            <img :src="dish.starimgyelow" class="w-[1.5em] h-[1.4em]" />
            <img :src="dish.starimgyelow" class="w-[1.5em] h-[1.4em]" />
            <img :src="dish.starimgyelow" class="w-[1.5em] h-[1.4em]" />
          </p>
          <button
            class="menu-btn w-[150px] md:w[140px] h-[30px] text-foundation hover:bg-transparent hover:text-menuBtnColor"
          >
            {{ dish.btntext }}
          </button>
        </div>
      </div>
    </div>

    <div class="mt-10 menu-bg">
      <img src="../assets/Rectangle 13.png" />
    </div>
  </div>
</template>

<script>
import menuJson from "../../public/menu.json";
export default {
  name: "Menu",
  data() {
    return {
      menu: menuJson,
      imgMenu: "../assets/Rectangle 13.png",
    };
  },
};
</script>

<style>
.desc-p {
  max-width: 28ch;
}

.menu-btn {
  border-radius: 18px;
  background: #ff9f0f;
  box-shadow: 0px 4px 4px 0px #ff9f0f;
  border: 1px solid #ff9f0f;
}
</style>
