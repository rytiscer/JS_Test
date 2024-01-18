/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const input = document.getElementById("search");
const button = document.getElementById("submit-btn");
const div = document.getElementById("output");

const calculate = () => {
  const kg = input.value;
  if (isNaN(kg)) {
    alert("Please enter a number");
    return;
  }

  const lb = kg * 2.2046;
  const grams = kg / 0.001;
  const oz = kg * 35.274;

  div.innerHTML = `
  <p>Weight in Pounds (lb): ${lb.toFixed(2)}</p>
  <p>Weight in Grams (g): ${grams.toFixed(2)}</p>
  <p>Weight in Ounces (oz): ${oz.toFixed(2)}</p>`;
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  calculate();
});
