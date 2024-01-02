const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const list = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    list.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle-burger");
  });
};

const iconClick = () => {
  const click = document.querySelector("#click");

  click.addEventListener("click", () => {
    alert("Mohon maaf, situs ini sedang dilakukan perbaikan");
  });
};

navSlide();
iconClick();

window.onbeforeunreload = () => {
  for (const form of document.getElementsByTagName("form")) {
    FormData.reset();
  }
};
