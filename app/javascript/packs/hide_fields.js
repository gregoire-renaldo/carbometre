const buttonBle = document.getElementById("hideShowBle")
const arrayAlim = Array.from(document.getElementsByClassName("alim"));
buttonBle.addEventListener("click", (event) => {
  arrayAlim.forEach(function (element) {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});


const buttonEnergie = document.getElementById("hideShowEnergie")
const arrayEnergie = Array.from(document.getElementsByClassName("energie"));
buttonEnergie.addEventListener("click", (event) => {
  arrayEnergie.forEach(function (element) {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});







// transform button + to - when show hide: toggle class ? innerhtml ?
