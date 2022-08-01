// const kits = ["crash", "kick", "snare", "tom"];

// const container = document.querySelector(".container");

// kits.forEach((kit) => {
//   const btnEl = document.createElement("button");
//   btnEl.classList.add("btn");
//   btnEl.innerText = kit;
// //   btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
//   container.appendChild(btnEl);

//   const sound = document.createElement("audio");
//   sound.src("/sounds" + kit + ".mp3");
//   container.appendChild(sound);
// });

const kits = ["crash", "kick", "snare", "tom", "mix-AI"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
