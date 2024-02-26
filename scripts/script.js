const button = document.querySelector('.header-button');
const gridMain = document.querySelector('.grid-main');

button.addEventListener('click', () => {
   if (gridMain.style.backgroundColor === "lightpink") {
      gridMain.style.backgroundColor = "white";
   } else {
      gridMain.style.backgroundColor = "lightpink"
   }
});

let pressedKeys = '';
window.addEventListener('keyup', (e) => {
   pressedKeys += e.key;
   pressedKeys = pressedKeys.slice(-4);
   if(pressedKeys === "xmas") {
      alert("It's not christmas yet, you'll have to wait a bit more!");
   }
});

