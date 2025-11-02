document.getElementById("download-btn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./cvIanKaplan.pdf";
  link.download = "cvIanKaplan.pdf";
  link.click();
});

const circles = document.querySelectorAll(".circle");
const defaultCenter = document.getElementById("default-center");
const dynamicContent = document.getElementById("dynamic-content");
let activeTimeout = null;

circles.forEach((circle) => {
  circle.addEventListener("mouseenter", () => {
    const text = circle.getAttribute("data-content");
    if (activeTimeout) clearTimeout(activeTimeout);
    dynamicContent.innerHTML = text;
    dynamicContent.style.opacity = 1;
    defaultCenter.style.opacity = 0;
  });

  circle.addEventListener("mouseleave", () => {
    if (activeTimeout) clearTimeout(activeTimeout);
    dynamicContent.style.opacity = 0;
    activeTimeout = setTimeout(() => {
      defaultCenter.style.opacity = 1;
    }, 300);
  });
});

const dynamicEl = document.getElementById("student-dynamic");
const phrases = [
  "Computer science student;",
  "Passionate about technology;",
  "Always learning and creating;",
];
let i = 0,
  j = 0,
  isDeleting = false;

function typeEffect() {
  const current = phrases[i];
  if (!isDeleting && j < current.length) {
    dynamicEl.textContent = current.substring(0, j + 1);
    j++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && j > 0) {
    dynamicEl.textContent = current.substring(0, j - 1);
    j--;
    setTimeout(typeEffect, 50);
  } else if (!isDeleting && j === current.length) {
    setTimeout(() => (isDeleting = true), 1000);
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    setTimeout(typeEffect, 300);
  }
}
typeEffect();
