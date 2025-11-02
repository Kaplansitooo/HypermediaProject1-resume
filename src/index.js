document.getElementById("download-btn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "../cvIanKaplan.pdf";
  link.click();
});

const circles = document.querySelectorAll('.circle');
const centerContent = document.getElementById('center-content');
const defaultCenter = document.getElementById('default-center');


let activeTimeout = null;

circles.forEach(circle => {
  circle.addEventListener('mouseenter', () => {
    const text = circle.getAttribute('data-content');
    if (activeTimeout) clearTimeout(activeTimeout);
    centerContent.innerHTML = text;
    centerContent.style.opacity = 1;
  });

  circle.addEventListener('mouseleave', () => {
    activeTimeout = setTimeout(() => {
      centerContent.style.opacity = 0;
      defaultCenter.style.opacity = 1;
    });
  });
});

const dynamicEl = document.getElementById('student-dynamic');
const phrases = [
  "Computer science student;",
  "Passionate about technology;",
  "Always learning and creating;"
];
let i = 0, j = 0, isDeleting = false;

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
    setTimeout(() => isDeleting = true, 1000);
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    setTimeout(typeEffect, 300);
  }
}
typeEffect();
