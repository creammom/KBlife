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


// 섹션1 - 스와이퍼

const swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
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

// 섹션3 - 로티플레이어

const items = document.querySelectorAll('.sec_3_menu_box li');
const lotties = document.querySelectorAll('.sec_3_menu_box .lottie');

let isPlaying = false;

// 1 → 2 → 3 → 4 순서 재생
function playStaggered() {
  if (isPlaying) return;

  isPlaying = true;

  lotties.forEach((lottie, index) => {
    setTimeout(() => {
      lottie.stop();
      lottie.play();

      // 마지막 로티 시작 시점 기준으로 잠금 해제
      if (index === lotties.length - 1) {
        setTimeout(() => {
          isPlaying = false;
        }, 500);
      }
    }, index * 500);
  });
}

// 사이트 최초 진입 시 1회 재생
window.addEventListener('DOMContentLoaded', () => {
  playStaggered();
});

// 스크롤이 움직일 때마다 재생
window.addEventListener(
  'wheel',
  () => {
    playStaggered();
  },
  { passive: true }
);

window.addEventListener(
  'touchmove',
  () => {
    playStaggered();
  },
  { passive: true }
);

// hover 시 해당 카드만 재생
items.forEach(item => {
  const lottie = item.querySelector('.lottie');

  item.addEventListener('mouseenter', () => {
    lottie.stop();
    lottie.play();
  });
});