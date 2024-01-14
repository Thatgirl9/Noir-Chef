<template>
  <div class="bg-foundation">
    <div
      class="pt-[9em] text-center flex flex-col justify-center items-center gap-[2em]"
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
    <h1 class="text-textColor">Dining Event</h1>
  </div>
</template>

<script>
export default {
  name: "Dining",
};
</script>

<style></style>
