const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const header2 = document.querySelector(".header2")

let isText1Visible = true;
window.onload = () => {
  text2.style.transform = "translateX(87.4vw)";
  text1.style.transform = "translateX(-60px)";
};
// text1.style.transform = "translateX(-88.4vw)";
// text2.style.transform = "translateX(0)";

setInterval(() => {
  if (isText1Visible) {
    // Move text1 out to the left and text2 in from the right
    text1.style.transform = "translateX(-89.4vw)";
    text2.style.transform = "translateX(-60px)";
  } else {
    // Move text2 out to the left and text1 in from the right
    text1.style.transform = "translateX(-60px)";
    text2.style.transform = "translateX(87.4vw)";
  }
  // Toggle visibility
  isText1Visible = !isText1Visible;
  text2.style.opacity = "1"
}, 5000); // Every 2 seconds

let lastScrollTop = 0;
header2.style.zIndex = "3"

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // Check if the user is scrolling down
  if (scrollTop < lastScrollTop) {
    header2.style.position = "sticky"
    header2.style.top = "0"
  }
  else {
    header2.style.position = "relative"

  }

  // Update the last scroll position
  lastScrollTop = scrollTop;
});
const shoesListWrapper = document.querySelector(".shoeslist-wrapper");
const shoesList = document.querySelector(".shoeslist");
const prevBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");
console.log(nextBtn)

console.log(shoesList.scrollWidth);
console.log(shoesListWrapper.clientWidth);


const scrollAmount = 250; // Adjust scroll amount as needed
let currentPosition = 0;

nextBtn.addEventListener("click", () => {
  const maxScroll = shoesList.scrollWidth - shoesListWrapper.clientWidth;
  console.log(maxScroll , currentPosition);
  
  if (currentPosition < maxScroll) {
    currentPosition += scrollAmount;
    if (currentPosition > maxScroll) currentPosition = maxScroll;
    shoesList.style.transform = `translateX(-${currentPosition}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition -= scrollAmount;
    if (currentPosition < 0) currentPosition = 0;
    shoesList.style.transform = `translateX(-${currentPosition}px)`;
  }
});
