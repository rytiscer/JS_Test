/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

button.addEventListener("click", () => {
  showUsers();
});

const showUsers = () => {
  fetch(ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      displayUsers(users);
    })
    .catch((error) => {
      console.error("Error", error);
    });
};

const displayUsers = (users) => {
  outputDiv.innerHTML = "";
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("userCard");

    const loginP = document.createElement("p");
    loginP.textContent = `Login: ${user.login}`;
    const avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    avatar.alt = `${user.login} avatar`;

    userCard.appendChild(loginP);
    userCard.appendChild(avatar);
    outputDiv.appendChild(userCard);
  });
};
