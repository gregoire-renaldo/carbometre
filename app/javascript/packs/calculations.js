// ajouter bouton hide en bas de chaque categ
// sticky total categ


// total Bilan
const totalBilan = document.getElementById('total');
function total() {
  const numberVoiture = Number(totalVoiture.textContent);
  const numberTransport = Number(totalTransport.textContent);
  const numberEnergie = Number(totalEnergie.textContent);
  const numberAlim = Number(totalAlimBox.textContent);
  const sumTotal = numberVoiture + numberAlim + numberTransport + numberEnergie
  totalBilan.innerHTML = sumTotal.toFixed(2)
}



// total category voiture
const totalVoiture = document.getElementById('totalVoiture')
function totVoiture() {
  const numberEssence = Number(scoreEssence.textContent);
  const numberGazole = Number(scoreGazole.textContent);
  const numberGpl = Number(scoreGpl.textContent);
  const numberE85 = Number(scoreE85.textContent);
  const numberElectrique = Number(scoreElectrique.textContent);
  const sumVoiture = numberEssence + numberGazole + numberGpl + numberE85 + numberElectrique
  totalVoiture.innerText = sumVoiture.toFixed(2);
  total();
}


// field essence
const userEssence = document.getElementById('userEssence');
const essencecc = 2.8
const scoreEssence = document.getElementById('scoreEssence');
userEssence.addEventListener("input", multiplyEssence);
function multiplyEssence() {
  let one = parseFloat(userEssence.value) || 0;
  let ccessence = parseFloat(one * essencecc).toFixed(2);
  scoreEssence.innerHTML = ccessence;
  totVoiture();
}

// field gazole
const userGazole = document.getElementById('userGazole');
const gazolecc = 3.16
const scoreGazole = document.getElementById('scoreGazole');
userGazole.addEventListener("input", multiplyGazole);
function multiplyGazole() {
  let one = parseFloat(userGazole.value) || 0;
  let ccgazole = parseFloat(one * gazolecc).toFixed(2);
  scoreGazole.innerHTML = ccgazole;
  totVoiture()
}

// field gpl
const userGpl = document.getElementById('userGpl');
const gplcc = 1.86
const scoreGpl = document.getElementById('scoreGpl');
userGpl.addEventListener("input", multiplyGpl);
function multiplyGpl() {
  let one = parseFloat(userGpl.value) || 0;
  let ccgpl = parseFloat(one * gplcc).toFixed(2);
  scoreGpl.innerHTML = ccgpl;
  totVoiture()
}

// field e85
const userE85 = document.getElementById('userE85');
const e85cc = 1.68
const scoreE85 = document.getElementById('scoreE85');
userE85.addEventListener("input", multiplyE85);
function multiplyE85() {
  let one = parseFloat(userE85.value) || 0;
  let cce85 = parseFloat(one * e85cc).toFixed(2);
  scoreE85.innerHTML = cce85;
  totVoiture()
}

// field electrique
const userElectrique = document.getElementById('userElectrique');
const electriquecc = 0.0571
const scoreElectrique = document.getElementById('scoreElectrique');
userElectrique.addEventListener("input", multiplyElectrique);
function multiplyElectrique() {
  let one = parseFloat(userElectrique.value) || 0;
  let ccelectrique = parseFloat(one * electriquecc).toFixed(2);
  scoreElectrique.innerHTML = ccelectrique;
  totVoiture()
}

// fin de category voiture

// category transport
const totalTransport = document.getElementById('totalTransport')
function totTransport() {
  const numberTgv = Number(scoreTgv.textContent);
  const numberTerelec = Number(scoreTerelec.textContent);
  const numberTertherm = Number(scoreTertherm.textContent);
  const numberIntercite = Number(scoreIntercite.textContent);
  const numberMetro = Number(scoreMetro.textContent);
  const numberBus = Number(scoreBus.textContent);
  const numberAvion = Number(scoreAvion.textContent);
  const numberAvionregional = Number(scoreAvionregional.textContent);
  const sumTransport = numberTgv + numberTerelec + numberTertherm + numberIntercite + numberMetro + numberBus + numberAvion + numberAvionregional
  //  bus avion avion régional
  totalTransport.innerText = sumTransport.toFixed(2);
  total();
}


// field tgv
const userTgv = document.getElementById('userTgv');
const tgvcc = 0.00369
const scoreTgv = document.getElementById('scoreTgv');
userTgv.addEventListener("input", multiplyTgv);
function multiplyTgv() {
  let one = parseFloat(userTgv.value) || 0;
  let cctgv = parseFloat(one * tgvcc).toFixed(3);
  scoreTgv.innerHTML = cctgv;
  totTransport();
}

// field ter elec
const userTerelec = document.getElementById('userTerelec');
const tereleccc = 0.00891
const scoreTerelec = document.getElementById('scoreTerelec');
userTerelec.addEventListener("input", multiplyTerelec);
function multiplyTerelec() {
  let one = parseFloat(userTerelec.value) || 0;
  let ccterelec = parseFloat(one * tereleccc).toFixed(3);
  scoreTerelec.innerHTML = ccterelec;
  totTransport();
}

// field ter thermique
const userTertherm = document.getElementById('userTertherm');
const terthermcc = 0.0798
const scoreTertherm = document.getElementById('scoreTertherm');
userTertherm.addEventListener("input", multiplyTertherm);
function multiplyTertherm() {
  let one = parseFloat(userTertherm.value) || 0;
  let cctertherm = parseFloat(one * terthermcc).toFixed(3);
  scoreTertherm.innerHTML = cctertherm;
  totTransport();
}

// field intercite
const userIntercite = document.getElementById('userIntercite');
const intercitecc = 0.0056
const scoreIntercite = document.getElementById('scoreIntercite');
userIntercite.addEventListener("input", multiplyIntercite);
function multiplyIntercite() {
  let one = parseFloat(userIntercite.value) || 0;
  let ccintercite = parseFloat(one * intercitecc).toFixed(3);
  scoreIntercite.innerHTML = ccintercite;
  totTransport();
}

// field metro / RER
const userMetro = document.getElementById('userMetro');
const metrocc = 0.0057
const scoreMetro = document.getElementById('scoreMetro');
userMetro.addEventListener("input", multiplyMetro);
function multiplyMetro() {
  let one = parseFloat(userMetro.value) || 0;
  let ccmetro = parseFloat(one * metrocc).toFixed(3);
  scoreMetro.innerHTML = ccmetro;
  totTransport();
}

// field bus
const userBus = document.getElementById('userBus');
const buscc = 0.0921666666666667
const scoreBus = document.getElementById('scoreBus');
userBus.addEventListener("input", multiplyBus);
function multiplyBus() {
  let one = parseFloat(userBus.value) || 0;
  let ccbus = parseFloat(one * buscc).toFixed(3);
  scoreBus.innerHTML = ccbus;
  totTransport();
}

// field avion
const userAvion = document.getElementById('userAvion');
const avioncc = 0.258
const scoreAvion = document.getElementById('scoreAvion');
userAvion.addEventListener("input", multiplyAvion);
function multiplyAvion() {
  let one = parseFloat(userAvion.value) || 0;
  let ccavion = parseFloat(one * avioncc).toFixed(3);
  scoreAvion.innerHTML = ccavion;
  totTransport();
}

// field avion regional
const userAvionregional = document.getElementById('userAvionregional');
const avionregionalcc = 0.453
const scoreAvionregional = document.getElementById('scoreAvionregional');
userAvionregional.addEventListener("input", multiplyAvionregional);
function multiplyAvionregional() {
  let one = parseFloat(userAvionregional.value) || 0;
  let ccavionregional = parseFloat(one * avionregionalcc).toFixed(3);
  scoreAvionregional.innerHTML = ccavionregional;
  totTransport();
}


// category logement / energie
const totalEnergie = document.getElementById('totalEnergie')
function totEnergie() {
  const numberElectricite = Number(scoreElectricite.textContent);
  const numberGazkwh = Number(scoreGazkwh.textContent);
  const numberGazm = Number(scoreGazm.textContent);
  const numberFioul = Number(scoreFioul.textContent);
  const numberGranulebois = Number(scoreGranulebois.textContent);
  const numberBuchebois = Number(scoreBuchebois.textContent);
  const numberEau = Number(scoreEau.textContent);
  const sumEnergie = numberElectricite + numberGazkwh + numberGazm + numberFioul + numberGranulebois + numberBuchebois + numberEau
  totalEnergie.innerText = sumEnergie.toFixed(2);
  total();
}
// field electricité
let userElectricite = document.getElementById('userElectricite');
const elecricitecc = 0.0571
let scoreElectricite = document.getElementById('scoreelec');
userElectricite.addEventListener("input", multiplyElec);
function multiplyElec() {
  let one = parseFloat(userElectricite.value) || 0;
  let cc = parseFloat(one * elecricitecc).toFixed(2);
  scoreElectricite.innerHTML = cc;
  totEnergie()
}
// field gazkwh
let userGaz = document.getElementById('userGaz');
const gazkwhcc = 0.205
let scoreGazkwh = document.getElementById('scoreGazkwh');
userGaz.addEventListener("input", multiplyGazkwh);
function multiplyGazkwh() {
  let one = parseFloat(userGaz.value) || 0;
  let cc = parseFloat(one * gazkwhcc).toFixed(2);
  scoreGazkwh.innerHTML = cc;
  totEnergie()
}

// field gazm
let userGazm = document.getElementById('userGazm');
const gazm = 2.2
let scoreGazm = document.getElementById('scoreGazm');
userGazm.addEventListener("input", multiplyGazm);
function multiplyGazm() {
  let one = parseFloat(userGazm.value) || 0;
  let cc = parseFloat(one * gazm).toFixed(2);
  scoreGazm.innerHTML = cc;
  totEnergie()
}

// field fioul
let userFioul = document.getElementById('userFioul');
const fioul = 3.25
let scoreFioul = document.getElementById('scoreFioul');
userFioul.addEventListener("input", multiplyFioul);
function multiplyFioul() {
  let one = parseFloat(userFioul.value) || 0;
  let cc = parseFloat(one * fioul).toFixed(2);
  scoreFioul.innerHTML = cc;
  totEnergie()
}

// field granule bois
let userGranulebois = document.getElementById('userGranulebois');
const granulebois = 0.111
let scoreGranulebois = document.getElementById('scoreGranulebois');
userGranulebois.addEventListener("input", multiplyGranulebois);
function multiplyGranulebois() {
  let one = parseFloat(userGranulebois.value) || 0;
  let cc = parseFloat(one * granulebois).toFixed(2);
  scoreGranulebois.innerHTML = cc;
  totEnergie()
}


// field buche bois
let userBuche = document.getElementById('userBuche');
const buchebois = 0.114
let scoreBuchebois = document.getElementById('scoreBuchebois');
userBuche.addEventListener("input", multiplyBuche);
function multiplyBuche() {
  let one = parseFloat(userBuche.value) || 0;
  let cc = parseFloat(one * buchebois).toFixed(2);
  scoreBuchebois.innerHTML = cc;
  totEnergie()
}

// field eau
let userEau = document.getElementById('userEau');
const eau = 0.132
let scoreEau = document.getElementById('scoreEau');
userEau.addEventListener("input", multiplyEau);
function multiplyEau() {
  let one = parseFloat(userEau.value) || 0;
  let cc = parseFloat(one * eau).toFixed(2);
  scoreEau.innerHTML = cc;
  totEnergie()
}





// total category alimentaire
const totalAlimBox = document.getElementById('totalAlimBox')
function totAlim() {
  const numberble = Number(scoreBle.textContent);
  const numbercarotte = Number(scoreCarotte.textContent);
  const numberriz = Number(scoreRiz.textContent);
  const numberPomedeterre = Number(scorePommedeterre.textContent);
  const numberSaladesaison = Number(scoreSaladeSaison.textContent);
  const numberSaladeSs = Number(scoreSaladeSs.textContent);
  const numberTomates = Number(scoreTomates.textContent);
  const numberTomatesFrss = Number(scoreTomatesFRss.textContent);
  const numberBoeuf = Number(scoreBoeuf.textContent);
  const numberVeau = Number(scoreVeau.textContent);
  const numberLaitvache = Number(scoreLaitvache.textContent);
  const numberPoulet = Number(scorePoulet.textContent);
  const numberOeufs = Number(scoreOeufs.textContent);
  const sum = numberble + numbercarotte + numberriz + numberPomedeterre + numberSaladesaison + numberSaladeSs + numberTomates + numberTomatesFrss + numberVeau + numberBoeuf
    + numberLaitvache + numberPoulet + numberOeufs;
  totalAlimBox.innerText = sum.toFixed(2);
  total();
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

// field salade saison
let userSaladeSaison = document.getElementById('userSaladeSaison');
const saladesaisoncc = 0.326
const scoreSaladeSaison = document.getElementById('scoreSaladeSaison');
userSaladeSaison.addEventListener("input", multiplySalade);
function multiplySalade() {
  let one = parseFloat(userSaladeSaison.value) || 0;
  let saladesaison = parseFloat(one * pommedeterrecc).toFixed(2);
  scoreSaladeSaison.innerHTML = saladesaison;
  totAlim()
}

// field salade sous serre
let userSaladeSs = document.getElementById('userSaladeSs');
const saladesscc = 11.05
const scoreSaladeSs = document.getElementById('scoreSaladeSs');
userSaladeSs.addEventListener("input", multiplySaladeSs);
function multiplySaladeSs() {
  let one = parseFloat(userSaladeSs.value) || 0;
  let saladeSs = parseFloat(one * saladesscc).toFixed(2);
  scoreSaladeSs.innerHTML = saladeSs;
  totAlim()
}

// field tomates fr
let userTomates = document.getElementById('userTomates');
const tomatesscc = 0.177
const scoreTomates = document.getElementById('scoreTomates');
userTomates.addEventListener("input", multiplyTomates);
function multiplyTomates() {
  let one = parseFloat(userTomates.value) || 0;
  let tomates = parseFloat(one * tomatesscc).toFixed(2);
  scoreTomates.innerHTML = tomates;
  totAlim()
}

// field tomates frss
let userTomatesFRss = document.getElementById('userTomatesFRss');
const tomatesFRsscc = 2.23
const scoreTomatesFRss = document.getElementById('scoreTomatesFRss');
userTomatesFRss.addEventListener("input", multiplyTomatesFRss);
function multiplyTomatesFRss() {
  let one = parseFloat(userTomatesFRss.value) || 0;
  let tomatesss = parseFloat(one * tomatesFRsscc).toFixed(2);
  scoreTomatesFRss.innerHTML = tomatesss;
  totAlim()
}

// field boeuf
let userBoeuf = document.getElementById('userBoeuf');
const boeufcc = 15
const scoreBoeuf = document.getElementById('scoreBoeuf');
userBoeuf.addEventListener("input", multiplyBoeuf);
function multiplyBoeuf() {
  let one = parseFloat(userBoeuf.value) || 0;
  let boeuf = parseFloat(one * boeufcc).toFixed(2);
  scoreBoeuf.innerHTML = boeuf;
  totAlim()
}

// field veau
let userVeau = document.getElementById('userVeau');
const veaucc = 6.5
const scoreVeau = document.getElementById('scoreVeau');
userVeau.addEventListener("input", multiplyVeau);
function multiplyVeau() {
  let one = parseFloat(userVeau.value) || 0;
  let veau = parseFloat(one * veaucc).toFixed(2);
  scoreVeau.innerHTML = veau;
  totAlim()
}

// field laitvache
let userLaitvache = document.getElementById('userLaitvache');
const laitvachecc = 0.9
const scoreLaitvache = document.getElementById('scoreLaitvache');
userLaitvache.addEventListener("input", multiplyLaitvache);
function multiplyLaitvache() {
  let one = parseFloat(userLaitvache.value) || 0;
  let laitvache = parseFloat(one * laitvachecc).toFixed(2);
  scoreLaitvache.innerHTML = laitvache;
  totAlim()
}

// field poulet
let userPoulet = document.getElementById('userPoulet');
const pouletcc = 2.14
const scorePoulet = document.getElementById('scorePoulet');
userPoulet.addEventListener("input", multiplyPoulet);
function multiplyPoulet() {
  let one = parseFloat(userPoulet.value) || 0;
  let poulet = parseFloat(one * pouletcc).toFixed(2);
  scorePoulet.innerHTML = poulet;
  totAlim()
}

// field oeufs
let userOeufs = document.getElementById('userOeufs');
const oeufscc = 1.72
const scoreOeufs = document.getElementById('scoreOeufs');
userOeufs.addEventListener("input", multiplyOeufs);
function multiplyOeufs() {
  let one = parseFloat(userOeufs.value) || 0;
  let oeufs = parseFloat(one * oeufscc).toFixed(2);
  scoreOeufs.innerHTML = oeufs;
  totAlim()
}




