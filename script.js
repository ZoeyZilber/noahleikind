document.addEventListener("DOMContentLoaded", () => {
  const expBtn = document.querySelector(".experience-btn");
  const expSection = document.querySelector("section.experience");

  expBtn.addEventListener("click", () => {
    expSection.classList.toggle("open");
  });
});