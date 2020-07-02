const buttonBle = document.getElementById("hideShowBle")
const arrayAlim = Array.from(document.getElementsByClassName("alim"));
buttonBle.addEventListener("click", (event) => {
  arrayAlim.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
});


const buttonEnergie = document.getElementById("hideShowEnergie")
const arrayEnergie = Array.from(document.getElementsByClassName("energie"));
buttonEnergie.addEventListener("click", (event) => {
  arrayEnergie.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
});







// transform button + to - when show hide: toggle class ? innerhtml ?
