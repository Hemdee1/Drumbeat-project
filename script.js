const wrapper = document.querySelector(".wrapper");
const audios = document.querySelectorAll("audio");

let alpha = ["A", "S", "D", "F", "G", "J", "K", "L", ";", "H", "I", "E"];

alpha = alpha.slice(0, audios.length);

const buttonsEl = alpha
  .map((letter) => {
    return `<button data-id="${letter}">${letter}</button>`;
  })
  .join("");

wrapper.innerHTML = buttonsEl;

const buttons = document.querySelectorAll("button");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    playBeat(btn, index);
  });
});
// keydown, keypress, keyup

window.addEventListener("keypress", (e) => {
  const key = e.key.toUpperCase();

  buttons.forEach((btn, index) => {
    if (btn.dataset.id == key) {
      playBeat(btn, index);
    }
  });
});

function playBeat(btn, index) {
  audios[index].currentTime = 0;
  btn.classList.add("active");
  audios[index].play();

  setTimeout(() => {
    btn.classList.remove("active");
  }, 500);
}
