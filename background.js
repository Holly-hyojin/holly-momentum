const body = document.querySelector("body");

const IMG_NUM = 9;

function paintImg(imgNumber) {
  const image = new Image();
  image.src = `background/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function makeRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);

  return number;
}

function init() {
  const randomNum = makeRandom();
  paintImg(randomNum);
}

init();
