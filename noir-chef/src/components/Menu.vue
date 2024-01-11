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
      class="flex justify-center item-center flex-col flex-wrap lg:flex-row gap-5"
    >
      <div v-for="dish in menu" :key="dish.id" class="text-textColor">
        <img :src="dish.menuimg" class="w-[17em] h-[15em]" />
        <h2>{{ dish.title }}</h2>
        <p class="desc-p">{{ dish.desc }}</p>
        <p class="flex">
          <img :src="dish.starimgyelow" class="w-[1.4em] h-[1.4em]" />
          <img :src="dish.starimgyelow" class="w-[1.4em] h-[1.4em]" />
          <img :src="dish.starimgyelow" class="w-[1.4em] h-[1.4em]" />
          <img :src="dish.starimgyelow" class="w-[1.4em] h-[1.4em]" />
          <img :src="dish.starimgyelow" class="w-[1.4em] h-[1.4em]" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import menuJson from "../json/menu.json";
export default {
  name: "Menu",
  data() {
    return {
      menu: menuJson,
    };
  },
};
</script>

<style scoped>
.desc-p {
  max-width: 28ch;
}
</style>
