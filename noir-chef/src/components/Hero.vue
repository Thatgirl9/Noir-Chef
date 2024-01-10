<template>
  <div class="absolute w-full h-full">
    <header class="bg-headerBg w-full max-h-[14vh] px-2 md:px-10 pt-4 z-50">
      <!-- second header -->
      <nav class="lg:flex lg:justify-between lg:items-center lg:p-3">
        <!-- image and hamburger -->
        <div class="img-ham flex items-center justify-between p-4 lg:p-0">
          <div class="relative top-0 left-0">
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
          class="h-0 overflow-hidden transition-all lg:h-auto links bg-headerBg lg:bg-transparent lg:justify-between lg:gap-5 lg:flex lg:w-3/5 font-smText lg:items-center font-normal text-textColor border-2 border-red-500 flex flex-col lg:flex-row gap-5 w-1/2 p-3 lg:p-0 absolute top-[6.5em] right-0 rounded-md lg:rounded-none lg:relative lg:top-0"
        >
          <ul
            class="lg:flex lg:flex-row gap-3 lg:gap-5 flex flex-col justify-center items-center lg:justify-normal lg:items-normal lg:border-none"
          >
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Fine Dining</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <!-- sign in  button -->
          <button class="bg-buttonColor px-3 rounded-md w-">Sign In</button>
        </div>
      </nav>
    </header>

    <div class="overlay -z-20"></div>
    <div class="hero-img -z-20">
      <h1 class="font-bigText text-red-500">Hero Page</h1>
      <p class="font-smText">Wassup</p>
      <h1 class="font-header">Header</h1>
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
  height: 120vh;
  width: 100%;
  background-image: url("../assets/Rectangle 2.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  /* top: 1em; */
}

.overlay {
  position: absolute;
  /* top: 5em; */
  left: 0;
  width: 100%;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
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
}
</style>
