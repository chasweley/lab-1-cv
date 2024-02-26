// Sidan ska ha två påskägg som ska byggas med vanilla javascript
// Ditt andra påskägg ska aktiveras när användaren skriver in en kombination på tangentbordet, exempelvis “1337”. När användaren skrivit in kombinationen på tangentbordet ska det komma upp något roligt meddelande i en modal-popup.
// Ditt ena påskägg ska aktiveras av att användaren klickar på någon “udda” del av webbplatsen som man vanligtvis inte brukar klicka på. När denna del klickas på ska webbplatsens bakgrund bytas ut.
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
   pressedKeys = pressedKeys.slice(-8);
   if(pressedKeys === "julafton") {
      console.log(pressedKeys);
      alert("Det är inte jul än, du får vänta lite till!");
   }
});

