/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const ENDPOINT = "cars.json";
  const outputDiv = document.getElementById("output");

  fetch(ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((carsData) => {
      displayCars(carsData);
    })
    .catch((error) => {
      console.error("Error", error);
    });

  const displayCars = (carsData) => {
    outputDiv.innerHTML = "";
    carsData.forEach((manufacturer) => {
      const carsCard = document.createElement("div");
      carsCard.classList.add("carsCard");

      const brand = document.createElement("h2");
      brand.textContent = manufacturer.manufacturer;

      const modelsList = document.createElement("ul");
      manufacturer.models.forEach((model) => {
        const modelItem = document.createElement("li");
        modelItem.textContent = model;
        modelsList.appendChild(modelItem);
      });

      carsCard.appendChild(brand);
      carsCard.appendChild(modelsList);

      outputDiv.appendChild(carsCard);
    });
  };
});
