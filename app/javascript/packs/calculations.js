// display score live
//  get user input -- calculate -- inner html result in score

// get the user input
let userElectricite = document.getElementById('userElectricite');
const elecricitecc = 0.0571
let resultElectricite = document.getElementById('scoreelec');

userElectricite.addEventListener("input", sum);

function sum() {
  let one = parseFloat(userElectricite.value) || 0;
  let cc = one * elecricitecc;
  resultElectricite.innerHTML =  cc;
}
