
// bouton = - alimentation
const buttonBle = document.getElementById("hideShowBle")
const arrayAlim = Array.from(document.getElementsByClassName("alim"));
const alimplusmoins = document.getElementById("alimplusmoins")
buttonBle.addEventListener("click", (event) => {
  arrayAlim.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      alimplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      alimplusmoins.innerHTML = "-";
    }
  });
});

// bouton + - energie
const buttonEnergie = document.getElementById("hideShowEnergie")
const arrayEnergie = Array.from(document.getElementsByClassName("energie"));
const energieplusmoins = document.getElementById("energieplusmoins")
buttonEnergie.addEventListener("click", (event) => {
  arrayEnergie.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      energieplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      energieplusmoins.innerHTML = "-";
    }
  });
});







// transform button + to - when show hide: toggle class ? innerhtml ?
