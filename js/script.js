// 헤더
$(function () {
  $(".pc_header .menu_box > ul > li > a").on("mouseenter", function () {
    $(".pc_header .menu_box a").removeClass("active");
    $(this).addClass("active");
  });

  $(".pc_header .menu_box > ul").on("mouseleave", function () {
    $(".pc_header .menu_box a").removeClass("active");
  });
});


// 스와이퍼

const swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const btn = document.querySelector(".swiper-toggle");
btn.classList.add("pause");

btn.addEventListener("click", () => {
  if (swiper.autoplay.running) {
    swiper.autoplay.stop();
    btn.classList.replace("pause", "play");
  } else {
    swiper.autoplay.start();
    btn.classList.replace("play", "pause");
  }
});