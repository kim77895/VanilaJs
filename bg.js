const body = document.querySelector("body");

const IMG_Num = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_Num);
  return number;
}

function init() {
  const randomNum = genRandom();
  paintImage(randomNum);
}

init();
