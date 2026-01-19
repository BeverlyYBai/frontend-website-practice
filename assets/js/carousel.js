let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const dotsContainer = document.querySelector(".carousel-dots");

let dots = [];
let autoplayId = null;
const AUTOPLAY_DELAY = 3500;

/* 初始化：创建小圆点、启动轮播 */
function initCarousel() {
  if (!slides.length || !dotsContainer) return;

  // 根据图片数量创建小圆点
  slides.forEach((slide, i) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);

    dot.addEventListener("click", () => {
      stopAutoplay();
      goToSlide(i);
      startAutoplay();
    });

    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  goToSlide(0);
  startAutoplay();
}

/* 跳转到指定下标的图片 */
function goToSlide(index) {
  const total = slides.length;
  if (!total) return;

  currentIndex = (index + total) % total;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

/* 上一张 / 下一张 */
function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

/* 自动播放控制 */
function startAutoplay() {
  if (autoplayId) return;
  autoplayId = setInterval(nextSlide, AUTOPLAY_DELAY);
}

function stopAutoplay() {
  if (!autoplayId) return;
  clearInterval(autoplayId);
  autoplayId = null;
}

/* 事件绑定 */
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
  });
}

// 鼠标移入轮播区域时暂停，移出时继续
const carouselEl = document.querySelector(".carousel");
if (carouselEl) {
  carouselEl.addEventListener("mouseenter", stopAutoplay);
  carouselEl.addEventListener("mouseleave", startAutoplay);
}

// 页面加载完初始化
document.addEventListener("DOMContentLoaded", initCarousel);
