const navTgglBtn = document.querySelector(".top-nav-tggl-btn");
navTgglBtn.addEventListener("click", () => {
  document.querySelector(".line-1").classList.toggle("line-1-active");
  document.querySelector(".line-2").classList.toggle("line-2-active");
  document.querySelector(".line-3").classList.toggle("line-3-active");
});
