<template>
  <header
    class="bg-headerBg w-full max-h-[14vh] lg:max-h-[14vh] md:max-h-[10vh] px-2 pt-4 md:px-10 z-50"
  >
    <!-- second header -->
    <nav class="lg:flex lg:justify-between lg:items-center lg:p-3">
      <!-- image and hamburger -->
      <div class="img-ham flex items-center justify-between p-4 lg:p-0">
        <div class="relative top-0 left-0 cursor-pointer">
          <img
            src="../assets/Ellipse 4 (2).png"
            class="w-[110px] h-[94px] relative top-0 left-0"
          />
          <img
            src="../assets/Default.png"
            class="w-[90px] h-[90px] absolute bottom-2.5 left-2.5"
          />
        </div>

        <!-- Navbar -->
        <button
          id="menu-btn"
          class="block hamburger focus:outline-none lg:hidden"
          @click="toggleNav()"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <!-- Links -->
      <div
        class="h-0 overflow-hidden transition-all lg:h-auto links bg-headerBg lg:bg-transparent lg:justify-between lg:gap-5 lg:flex lg:w-3/5 font-smText lg:items-center font-normal text-textColor flex flex-col lg:flex-row gap-5 w-1/2 lg:p-0 absolute top-[6.5em] right-2 rounded-md lg:rounded-none lg:relative lg:top-0 lg:right-0 justify-center items-center lg:border-none"
      >
        <ul
          class="lg:flex lg:flex-row gap-3 lg:gap-5 flex flex-col justify-center items-center lg:justify-normal lg:items-normal lg:border-none"
        >
          <li>
            <a href="#" class="hover:text-menuBtnColor">Menu</a>
          </li>
          <li>
            <a href="#" class="hover:text-menuBtnColor">News</a>
          </li>
          <li>
            <a href="#" class="hover:text-menuBtnColor">Fine Dining</a>
          </li>
          <li>
            <a href="#" class="hover:text-menuBtnColor">About Us</a>
          </li>
          <li>
            <a href="#" class="hover:text-menuBtnColor">Contact</a>
          </li>
        </ul>

        <!-- sign in  button -->
        <button
          class="bg-buttonColor px-3 rounded-md w-[6em] flex justify-center items-center lg:block hover:bg-transparent hover:border-2 transition-all hover:border-buttonColor"
        >
          Sign In
        </button>
      </div>
    </nav>
  </header>

  <div class="overlay -z-20 pointer-events-auto cursor-pointer"></div>
  <div class="hero-img -z-20 pointer-events-auto">
    <div
      class="flex justify-center items-center flex-col pt-20 text-center gap-10 sm:gap-14 pointer-events-auto"
    >
      <h1 class="font-header text-headerText text-5xl font-semibold">
        Taste the rich flavour of high quality meals
      </h1>
      <p
        class="font-bigText font-normal text-2xl sm:text-3xl text-textColor w-[90%] sm:max-w-none"
      >
        We only use the five star quality for our
        <br class="hidden sm:block" />
        menu, come and get the richness in
        <br class="hidden sm:block" />
        every meals we serve.
      </p>
      <button
        class="text-textColor menu-btn px-16 py-1 rounded-lg hover:cursor-pointer border-2 font-smText border-headerText text-2xl text-center transition-all hover:bg-buttonColor pointer-events-auto"
      >
        <a href="#">Go to Menu</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      imageUrl: { backgroundImage: "url('../assets/Rectangle 2.png')" },
      imageSrc: "../assets/Rectangle 2.png",
    };
  },
  methods: {
    toggleNav() {
      const menuBtn = document.getElementById("menu-btn");
      const navLinks = document.querySelector(".links");
      menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show-links");
        menuBtn.classList.toggle("open");
      });
    },
  },
};
</script>

<style>
.hero-img {
  height: 96vh;
  width: 100%;
  background-image: url("../assets/Rectangle 2.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  /* background-color: lightgray; */
  /* top: 1em; */
  pointer-events: auto;
  background-position: center;
  /* background-blend-mode: color-dodge; */
}

@media screen and (min-width: 1024px) {
  .hero-img {
    background-size: cover;
    background-position: none;
  }
}

.overlay {
  position: absolute;
  left: 0;
  width: 100%;
  height: 96vh;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: auto;
}

/* Hamburger */
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 24px;
  height: 3px;
  background: white;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
  transform: translateX(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(-6px) translate(6px);
}

.open .hamburger-middle {
  opacity: 0;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(6px);
}

/* nav toggle */
.show-links {
  height: 16rem;
  border: 1px solid #ff5c5c;
  /* stroke: 6px solid #ff5c5c; */
}
</style>
