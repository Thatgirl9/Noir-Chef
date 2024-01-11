<template>
  <div class="h-screen menu-div bg-foundation w-full">
    <div
      class="pt-28 text-center flex flex-col justify-center items-center gap-11 relative"
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
    <!-- <img src="../assets/Rectangle 5.png" /> -->
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
/* .menu-div {
  background: linear-gradient(180deg, #212121 0%, #000 100%);
} */
</style>
