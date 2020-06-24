const button = document.getElementById("hideShowBle")
const element = document.getElementById("div1");

button.addEventListener("click", (event) => {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
});


// transform button + to - when show hide: toggle class ? innerhtml ?
