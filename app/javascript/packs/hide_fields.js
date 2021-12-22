// bouton + -  voiture
const buttonVoiture = document.getElementById("hideShowVoiture")
const arrayVoiture = Array.from(document.getElementsByClassName("voiture"));
const voitureplusmoins = document.getElementById("voitureplusmoins")
buttonVoiture.addEventListener("click", (event) => {
  arrayVoiture.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      voitureplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      voitureplusmoins.innerHTML = "-";
    }
  });
});

// bouton + - transport
const buttonTransport = document.getElementById("hideShowTransport")
const arrayTransport = Array.from(document.getElementsByClassName("transport"));
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
// bouton + - alimentation
const buttonVetement = document.getElementById("hideShowVetements")
const arrayVetement = Array.from(document.getElementsByClassName("vetement"));
const vetementplusmoins = document.getElementById("vetementplusmoins")
buttonVetement.addEventListener("click", (event) => {
  arrayVetement.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      vetementplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      vetementplusmoins.innerHTML = "-";
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

// bouton + - valuers
const buttonValeur = document.getElementById("hideShowValeur")
const arrayValeur = Array.from(document.getElementsByClassName("valeur"));
const valeurplusmoins = document.getElementById("valeurplusmoins")
buttonValeur.addEventListener("click", (event) => {
  arrayValeur.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      valeurplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      valeurplusmoins.innerHTML = "-";
    }
  });
});
