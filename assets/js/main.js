// 导航滚动时微变化
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  if (window.scrollY > 50) {
      nav.style.background = "#000000e6";
      nav.style.backdropFilter = "blur(6px)";
  } else {
      nav.style.background = "#000000";
      nav.style.backdropFilter = "none";
  }
});

// 汉堡菜单交互
const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");
const btn = document.getElementById("hamburger");

if (btn && menu && overlay) {
  btn.addEventListener("click", () => {
      menu.classList.toggle("active");
      overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
  });

  document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
          menu.classList.remove("active");
          overlay.classList.remove("active");
      }
  });
}
// footer
document.addEventListener("DOMContentLoaded", () => {
  // 其它已有代码...

  // Footer 手风琴（小屏下拉菜单）
  const footerTitles = document.querySelectorAll(".footer-title");

  footerTitles.forEach((title) => {
    const column = title.closest(".footer-column");
    title.addEventListener("click", () => {
      // 只在小屏生效，大屏点击无效果
      if (window.innerWidth > 768) return;

      // 单独开关当前这一个
      column.classList.toggle("active");
    });
  });
});
