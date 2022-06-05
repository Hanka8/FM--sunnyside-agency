//changing button
const mobileBtn = document.querySelector(".mobileBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
  mobileBtn.classList.toggle("change");
  mobileMenu.classList.toggle("mobileMenu");
  mobileMenu.classList.toggle("mobileMenu--hide");
});
