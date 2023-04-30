const conterDisplay = document.querySelector('h3')
let conter = 0;

const bulleMaker = () => {
  const bulle = document.createElement("span");
  bulle.classList.add("bulle");
  document.body.appendChild(bulle);

  const size = Math.random() * 100 + 50 + "px";
  bulle.style.height = size;
  bulle.style.width = size;

  bulle.style.top = Math.random() * 100 + 50 + "%";
  bulle.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bulle.style.setProperty("--left", Math.random() * 100 + "%");

  bulle.addEventListener("click", () => {
    conter++
    conterDisplay.textContent = conter
    console.log(conter);
    bulle.remove();
  });

  setTimeout(() => {
    bulle.remove();
  }, 8000);
};

setInterval(bulleMaker, 1000);
