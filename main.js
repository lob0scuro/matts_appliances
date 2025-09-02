const openedOn = new Date("2014-09-01");
const currentDate = new Date();
const yearsOpen = currentDate.getFullYear() - openedOn.getFullYear();

const thisLong = document.getElementById("this-long");
thisLong.textContent = yearsOpen;

const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

const showImage = (index) => {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
};

const nextImage = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
};

showImage(currentIndex);

setInterval(nextImage, 3000);

//Mobile Header Logic

const menuDots = document.getElementById("menu-dots");
const navLinks = document.getElementById("nav-links");

menuDots.addEventListener("click", () => {
  navLinks.classList.toggle("hide");
});
