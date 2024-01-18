/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const buttonElement = document.querySelector("#btn__element");
let count = 0;

const clickMe = (event) => {
  count += 1;
  document.querySelector("#btn__state").textContent = count;
};

buttonElement.addEventListener("click", clickMe);
