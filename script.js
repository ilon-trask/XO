const items = document.querySelectorAll(".item");
const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
console.log(win[0][0]);
let turn = 0;

for (let i = 0; i < items.length; i++) {
  items[i].onclick = () => {
    for (let index = 0; index < win.length; index++) {
      if (
        items[win[index][0] - 1].id == "o" &&
        items[win[index][1] - 1].id == "o" &&
        items[win[index][2] - 1].id == "o"
      ) {
        console.log("о виграв");
        return;
      } else if (
        items[win[index][0] - 1].id == "x" &&
        items[win[index][1] - 1].id == "x" &&
        items[win[index][2] - 1].id == "x"
      ) {
        console.log("x виграв");
        return;
      } else {
        if (!items[i].childNodes[0]) {
          if (turn == 0) {
            oStep(i);
            console.log(123);
          } else if (turn == 1) {
            xStep(i);
          }
        }
      }
    }
  };
}
function oStep(indx) {
  const o = document.createElement("div");
  o.className = "o";
  items[indx].appendChild(o);
  items[indx].id = "o";
  turn = 1;
}
function xStep(indx) {
  const x = document.createElement("div");
  x.className = "x";
  items[indx].appendChild(x);
  items[indx].id = "x";
  turn = 0;
}
