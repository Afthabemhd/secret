const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* NO button text stages (exact order you asked) */
const noTexts = [
  "No",
  "Really?",
  "Try again!",
  "You sure?",
  "Haha nice try!",
  "No escape!",
  "Nice Try 😠",
  "You can't escape love 💖"
];

let noIndex = 0;

/* Move + update NO button */
noBtn.addEventListener("mouseover", () => {
  if (noIndex < noTexts.length - 1) {
    noIndex++;
    noBtn.textContent = noTexts[noIndex];
  }

  const maxX = window.innerWidth - noBtn.offsetWidth - 10;
  const maxY = window.innerHeight - noBtn.offsetHeight - 10;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* YES button action */
yesBtn.addEventListener("click", () => {
  popConfetti();

  setTimeout(() => {
    document.body.innerHTML = `
      <h1 style="
        text-align:center;
        margin-top:40vh;
        font-size:32px;
        color:#ff4d6d;">
        Yay! ❤️🥰<br>
        I knew you'd say yes! 💖
      </h1>
    `;
  }, 1300);
});

/* Confetti popper */
function popConfetti() {
  const colors = ["#ff4d6d", "#ffd166", "#ff9a9e", "#ffb703"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
