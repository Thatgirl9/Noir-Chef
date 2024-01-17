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
        class="absolute lg:top-[8em] lg:left-[9em] top-[1em] left-0 lg:w-[200px] lg:h-[200px] w-[90px] h-[90px] animate__animated animate__headShake animate__fast"
      />
      <img
        src="../assets//Vector 1.png"
        width="200px"
        height="200px"
        class="absolute lg:right-[10em] lg:bottom-0 hidden lg:block animate__animated animate__headShake animate__fast"
      />
    </div>

    <!-- Menu -->
    <div
      class="flex justify-center items-center pb-20 flex-col md:flex-wrap md:flex-row gap-8"
    >
      <!-- 1 -->
      <div
        class="hover:border hover:border-menuBtnColor hover:cursor-pointer hover:rounded-2xl p-1 pb-5 hover:shadow-lg hover:shadow-menuBtnColor"
      >
        <!-- IMG -->
        <div class="flex justify-center">
          <img
            src="../assets/Rectangle 5.png"
            class="w-[15em] h-[13em] flex justify-center items-center"
          />
        </div>

        <!-- TEXT -->
        <div class="text-textColor flex flex-col gap-4 pt-5">
          <h2 class="text-left">Spinach & Mushroom Quiche</h2>
          <p class="desc-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            imperdiet lectus.
          </p>
          <p class="flex gap-1">
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
          </p>
          <button
            class="menu-btn w-[150px] md:w[140px] h-[30px] text-foundation hover:bg-transparent hover:text-menuBtnColor"
          >
            Order Now
          </button>
        </div>
      </div>

      <!-- 2 -->
      <div
        class="hover:border hover:border-menuBtnColor hover:cursor-pointer hover:rounded-2xl p-1 pb-5 hover:shadow-lg hover:shadow-menuBtnColor"
      >
        <!-- IMG -->
        <div class="flex justify-center">
          <img
            src="../assets/Rectangle 6.png"
            class="w-[15em] h-[13em] flex justify-center items-center"
          />
        </div>

        <!-- TEXT -->
        <div class="text-textColor flex flex-col gap-4 pt-5">
          <h2 class="text-left">Sweet Potato</h2>
          <p class="desc-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            imperdiet lectus.
          </p>
          <p class="flex gap-1">
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 10.png" class="w-[1.5em] h-[1.4em]" />
          </p>
          <button
            class="menu-btn w-[150px] md:w[140px] h-[30px] text-foundation hover:bg-transparent hover:text-menuBtnColor"
          >
            Order Now
          </button>
        </div>
      </div>

      <!-- 3 -->
      <div
        class="hover:border hover:border-menuBtnColor hover:cursor-pointer hover:rounded-2xl p-1 pb-5 hover:shadow-lg hover:shadow-menuBtnColor"
      >
        <!-- IMG -->
        <div class="flex justify-center">
          <img
            src="../assets/Rectangle 7.png"
            class="w-[15em] h-[13em] flex justify-center items-center"
          />
        </div>

        <!-- TEXT -->
        <div class="text-textColor flex flex-col gap-4 pt-5">
          <h2 class="text-left">Spaghetti</h2>
          <p class="desc-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            imperdiet lectus.
          </p>
          <p class="flex gap-1">
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
          </p>
          <button
            class="menu-btn w-[150px] md:w[140px] h-[30px] text-foundation hover:bg-transparent hover:text-menuBtnColor"
          >
            Order Now
          </button>
        </div>
      </div>

      <!-- 4 -->
      <div
        class="hover:border hover:border-menuBtnColor hover:cursor-pointer hover:rounded-2xl p-1 pb-5 hover:shadow-lg hover:shadow-menuBtnColor"
      >
        <!-- IMG -->
        <div class="flex justify-center">
          <img
            src="../assets/Rectangle 8.png"
            class="w-[15em] h-[13em] flex justify-center items-center"
          />
        </div>

        <!-- TEXT -->
        <div class="text-textColor flex flex-col gap-4 pt-5">
          <h2 class="text-left">Chickpea Curry</h2>
          <p class="desc-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            imperdiet lectus.
          </p>
          <p class="flex gap-1">
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
            <img src="../assets/Star 1.png" class="w-[1.5em] h-[1.4em]" />
          </p>
          <button
            class="menu-btn w-[150px] md:w[140px] h-[30px] text-foundation hover:bg-transparent hover:text-menuBtnColor"
          >
            Order Now
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
// import menuJson from "../../public/menu.json";
import "animate.css";
export default {
  name: "Menu",
  data() {
    return {
      // menu: menuJson,
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

.animate__animated.animate__headShake {
  --animate-duration: 9s;
}
</style>
