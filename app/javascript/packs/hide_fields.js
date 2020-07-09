// bouton + -  voiture
const buttonVoiture = document.getElementById("hideShowVoiture")
const arrayVoiture = Array.from(document.getElementsByClassName("voiture"));
const voitureplusmoins = document.getElementById("voitureplusmoins")
buttonVoiture.addEventListener("click", (event) => {
  arrayVoiture.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      alimplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      alimplusmoins.innerHTML = "-";
    }
  });
});


// bouton + - alimentation
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

// bouton + - autre
const buttonAutre = document.getElementById("hideShowAutre")
const arrayAutre = Array.from(document.getElementsByClassName("autre"));
const autreplusmoins = document.getElementById("autreplusmoins")
buttonAutre.addEventListener("click", (event) => {
  arrayAutre.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      autreplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      autreplusmoins.innerHTML = "-";
    }
  });
});

// bouton + - transport
const buttonTransport = document.getElementById("hideShowTransport")
const arrayTransport= Array.from(document.getElementsByClassName("transport"));
const transportplusmoins = document.getElementById("transportplusmoins")
buttonTransport.addEventListener("click", (event) => {
  arrayTransport.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      transportplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      transportplusmoins.innerHTML = "-";
    }
  });
});







// transform button + to - when show hide: toggle class ? innerhtml ?
