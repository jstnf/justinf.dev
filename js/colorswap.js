/* rainbow effect */
let root = document.documentElement;
let rgb = [[rand(), randBool()], [rand(), randBool()], [rand(), randBool()]];
setInterval(changeColor, 10);

function changeColor() {
  rgb.forEach((value, i, arr) => {
    let factor = Math.floor(Math.random() * 4);
    if (arr[i][1]) {
      arr[i][0] = arr[i][0] - factor < 0 ? 0 : arr[i][0] - factor;
      if (arr[i][0] === 0) {
        arr[i][1] = false;
      }
    } else {
      arr[i][0] = arr[i][0] + factor > 255 ? 255 : arr[i][0] + factor;
      if (arr[i][0] === 255) {
        arr[i][1] = true;
      }
    }
  });

  root.style.setProperty('--bg-red', rgb[0][0]);
  root.style.setProperty('--bg-grn', rgb[1][0]);
  root.style.setProperty('--bg-blu', rgb[2][0]);

  document.getElementById("red").innerHTML = rgb[0][0];
  document.getElementById("grn").innerHTML = rgb[1][0];
  document.getElementById("blu").innerHTML = rgb[2][0];
}

/* DVD effect */
const WIDTH = Math.floor(window.innerWidth / 3);
const HEIGHT = Math.floor(window.innerHeight / 3);
let xOffset = 0;
let xVelocity = randVelocity();
let tOffset = 1;
let yVelocity = randVelocity();
setInterval(dvdLoop, 20);

function dvdLoop() {
  xOffset = xOffset + xVelocity;
  tOffset = tOffset + yVelocity;

  if (xOffset > WIDTH) {
    xVelocity = -randVelocity();
    xOffset = WIDTH;
  } else if (xOffset < -WIDTH) {
    xVelocity = randVelocity();
    xOffset = -WIDTH;
  }

  if (tOffset > HEIGHT) {
    yVelocity = -randVelocity();
    tOffset = HEIGHT;
  } else if (tOffset < -HEIGHT) {
    yVelocity = randVelocity();
    tOffset = -HEIGHT;
  }

  root.style.setProperty('--x-offset', xOffset);
  root.style.setProperty('--y-offset', tOffset);
}

/* helper methods */
function rand() {
  return Math.floor(Math.random() * 256);
}

function randBool() {
  return Math.floor(Math.random() * 2);
}

function randVelocity() {
  return (Math.floor(Math.random() * 4) + 1) * randBool() ? 1 : 2;
}