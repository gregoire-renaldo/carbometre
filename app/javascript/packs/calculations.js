// total

//total by fields

// total voiture
// const totalVoiture = document.getElementById('totalVoiture')
// function totVoiture() {
//   const numberEssence = Number(scoreEssence.textContent);
//   const sumVoiture = numberEssence
//   totalVoiture.innerText = sumVoiture.toFixed(2)
// }


// field essence
const userEssence = document.getElementById('userEssence');
const essencecc = 2.8
const scoreEssence = document.getElementById('scoreEssence');
userEssence.addEventListener("input", multiplyVoiture);
function multiplyVoiture() {
  let one = parseFloat(userEssence.value) || 0;
  let ccessence = parseFloat(one * essencecc).toFixed(2);
  scoreEssence.innerHTML = ccessence;
  // totVoiture()
}


// total alimentaire
const totalAlimBox = document.getElementById('totalAlimBox')
function totAlim() {
  const numberble = Number(scoreBle.textContent);
  const numbercarotte = Number(scoreCarotte.textContent);
  const numberriz = Number(scoreRiz.textContent);
  const numberPomedeterre = Number(scorePommedeterre.textContent);
  const sum = numberble + numbercarotte + numberriz + numberPomedeterre
  totalAlimBox.innerText = sum.toFixed(2)
}

// field ble
const userBle = document.getElementById('userBle');
const blecc = 0.439
const scoreBle = document.getElementById('scoreble');
userBle.addEventListener("input", multiplyBle);
function multiplyBle() {
  let one = parseFloat(userBle.value) || 0;
  let ccble = parseFloat(one * blecc).toFixed(2);
  scoreBle.innerHTML = ccble;
  totAlim()
}


// field carotte
let userCarotte = document.getElementById('userCarotte');
const carottecc = 0.0706
const scoreCarotte = document.getElementById('scoreCarotte');
userCarotte.addEventListener("input", multiplyCarotte);
function multiplyCarotte() {
  let one = parseFloat(userCarotte.value) || 0;
  let cccarotte = parseFloat(one * carottecc).toFixed(2);
  scoreCarotte.innerHTML = cccarotte;
  totAlim()
}

// field riz
let userRiz = document.getElementById('userRiz');
const rizcc = 3.59
const scoreRiz = document.getElementById('scoreRiz');
userRiz.addEventListener("input", multiplyRiz);
function multiplyRiz() {
  let one = parseFloat(userRiz.value) || 0;
  let ccriz = parseFloat(one * rizcc).toFixed(2);
  scoreRiz.innerHTML = ccriz;
  totAlim()
}

// field pomme de terre fr
let userPommeDeTerre = document.getElementById('userPommeDeTerre');
const pommedeterrecc = 0.0861
const scorePommedeterre = document.getElementById('scorePommeDeTerre');
userPommeDeTerre.addEventListener("input", multiplyPatate);
function multiplyPatate() {
  let one = parseFloat(userPommeDeTerre.value) || 0;
  let pommedeterre = parseFloat(one * pommedeterrecc).toFixed(2);
  scorePommedeterre.innerHTML = pommedeterre;
  totAlim()
}






// energie
// field electricité
let userElectricite = document.getElementById('userElectricite');
const elecricitecc = 0.0571
let resultElectricite = document.getElementById('scoreelec');
userElectricite.addEventListener("input", multiplyElec);
function multiplyElec() {
  let one = parseFloat(userElectricite.value) || 0;
  let cc = parseFloat(one * elecricitecc).toFixed(2);
  resultElectricite.innerHTML =  cc;
  totAlim()
};
// Autre valeur
// Autres moyens de déplacement
// voitur
