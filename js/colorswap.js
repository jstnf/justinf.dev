/* code */
let root = document.documentElement;
let rgb = [[rand(), randBool()], [rand(), randBool()], [rand(), randBool()]];
setInterval(changeColor, 10);

/* function */
function rand() {
  return Math.floor(Math.random() * 256);
}

function randBool() {
  return Math.floor(Math.random() * 2);
}

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