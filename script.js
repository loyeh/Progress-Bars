const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const bars = document.querySelectorAll(".bar");
let lineBars = [];
let circleBars = [];

[...lineBars] = [...bars];
[...circleBars] = [...circles];

let barNum = 0;

// console.log(lineBars);

//functionality of the next button
function next() {
  barNum++;
  lineBars[barNum - 1].classList.add("active");
  circleBars[barNum].classList.add("active");
  if (barNum === 3) {
    nextBtn.disabled = true;
    nextBtn.classList.remove("active");
  }
  if (barNum > 0) {
    prevBtn.disabled = false;
    prevBtn.classList.add("active");
  }
  console.log(barNum);
}

//functionality of the prev button
function prev() {
  barNum--;
  lineBars[barNum].classList.remove("active");
  circleBars[barNum + 1].classList.remove("active");
  console.log(barNum);
  if (barNum < 3) {
    nextBtn.disabled = false;
    nextBtn.classList.add("active");
  }
  if (barNum === 0) {
    prevBtn.disabled = true;
    prevBtn.classList.remove("active");
  }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
