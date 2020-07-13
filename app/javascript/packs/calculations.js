// ajouter bouton hide en bas de chaque categ
// sticky total categ


// total Bilan


const totalBilan = document.getElementById('total');
function total() {
  const numberVoiture = Number(totalVoiture.textContent);
  const numberTransport = Number(totalTransport.textContent);
  const numberEnergie = Number(totalEnergie.textContent);
  const numberAlim = Number(totalAlimBox.textContent);
  const numberAutre = Number(totalAutre.textContent);
  const sumTotal = numberVoiture + numberAlim + numberTransport + numberEnergie + numberAutre
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
const defaultEssence = (userEssence.value * essencecc).toFixed(2)
scoreEssence.innerHTML = defaultEssence
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
const defaultGazole = (userGazole.value * gazolecc).toFixed(2)
scoreGazole.innerHTML = defaultGazole
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
const defaultGPL = (userGpl.value * gplcc).toFixed(2)
scoreGpl.innerHTML = defaultGPL
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
const defaultE85 = (userE85.value * e85cc).toFixed(2)
scoreE85.innerHTML = defaultE85
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
const defaultElectrique = (userElectrique.value * electriquecc).toFixed(2)
scoreElectrique.innerHTML = defaultElectrique
userElectrique.addEventListener("input", multiplyElectrique);
function multiplyElectrique() {
  let one = parseFloat(userElectrique.value) || 0;
  let ccelectrique = parseFloat(one * electriquecc).toFixed(2);
  scoreElectrique.innerHTML = ccelectrique;
  totVoiture()
}

// to display values on edit footprint
const defaultVoiture = (Number(defaultEssence) + Number(defaultGazole) + Number(defaultGPL) + Number(defaultE85) + Number(defaultElectrique))
totalVoiture.innerHTML = defaultVoiture

// transport Energie Logement / autres
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
const defaultTgv = (userTgv.value * electriquecc).toFixed(2)
scoreTgv.innerHTML = defaultTgv
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
const defaultTerelec = (userTerelec.value * tereleccc).toFixed(2)
scoreTerelec.innerHTML = defaultTerelec
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
const defaultTerTherm = (userTertherm.value * terthermcc).toFixed(2)
scoreTertherm.innerHTML = defaultTerTherm
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
const defaultIntercite = (userIntercite.value * intercitecc).toFixed(2)
scoreIntercite.innerHTML = defaultIntercite
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
const defaultMetro = (userMetro.value * metrocc).toFixed(2)
scoreMetro.innerHTML = defaultMetro
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
const defaultBus = (userBus.value * buscc).toFixed(2)
scoreBus.innerHTML = defaultBus
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
const defaultAvion = (userAvion.value * avioncc).toFixed(2)
scoreAvion.innerHTML = defaultAvion
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
const defaultAvionregional = (userAvionregional.value * avionregionalcc).toFixed(2)
scoreAvionregional.innerHTML = defaultAvionregional
userAvionregional.addEventListener("input", multiplyAvionregional);
function multiplyAvionregional() {
  let one = parseFloat(userAvionregional.value) || 0;
  let ccavionregional = parseFloat(one * avionregionalcc).toFixed(3);
  scoreAvionregional.innerHTML = ccavionregional;
  totTransport();
}
// to display values on edit footprint
const defaultTransport = (Number(defaultTgv) + Number(defaultTerelec) + Number(defaultTerTherm)
+ Number(defaultIntercite) + Number(defaultMetro) + Number(defaultBus)
+ Number(defaultAvion) + Number(defaultAvionregional));
totalTransport.innerHTML = defaultTransport

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
const userElectricite = document.getElementById('userElectricite');
const elecricitecc = 0.0571
const scoreElectricite = document.getElementById('scoreelec');
const defaultElectricite = (userElectricite.value * elecricitecc).toFixed(2)
scoreElectricite.innerHTML = defaultElectricite
userElectricite.addEventListener("input", multiplyElec);
function multiplyElec() {
  let one = parseFloat(userElectricite.value) || 0;
  let cc = parseFloat(one * elecricitecc).toFixed(2);
  scoreElectricite.innerHTML = cc;
  totEnergie()
}
// field gazkwh
const userGazkwh = document.getElementById('userGaz');
const gazkwhcc = 0.205
const scoreGazkwh = document.getElementById('scoreGazkwh');
const defaultGazkwh = (userGazkwh.value * gazkwhcc).toFixed(2)
scoreGazkwh.innerHTML = defaultGazkwh
userGaz.addEventListener("input", multiplyGazkwh);
function multiplyGazkwh() {
  let one = parseFloat(userGaz.value) || 0;
  let cc = parseFloat(one * gazkwhcc).toFixed(2);
  scoreGazkwh.innerHTML = cc;
  totEnergie()
}

// field gazm
const userGazm = document.getElementById('userGazm');
const gazm = 2.2
const scoreGazm = document.getElementById('scoreGazm');
const defaultGazm = (userGazm.value * gazm).toFixed(2)
scoreGazm.innerHTML = defaultGazm
userGazm.addEventListener("input", multiplyGazm);
function multiplyGazm() {
  let one = parseFloat(userGazm.value) || 0;
  let cc = parseFloat(one * gazm).toFixed(2);
  scoreGazm.innerHTML = cc;
  totEnergie()
}

// field fioul
const userFioul = document.getElementById('userFioul');
const fioulcc = 3.25
const scoreFioul = document.getElementById('scoreFioul');
const defaultFioul = (userFioul.value * fioulcc).toFixed(2)
scoreFioul.innerHTML = defaultFioul
userFioul.addEventListener("input", multiplyFioul);
function multiplyFioul() {
  let one = parseFloat(userFioul.value) || 0;
  let cc = parseFloat(one * fioulcc).toFixed(2);
  scoreFioul.innerHTML = cc;
  totEnergie()
}

// field granule bois
const userGranulebois = document.getElementById('userGranulebois');
const granulebois = 0.111
const scoreGranulebois = document.getElementById('scoreGranulebois');
const defaultGranulebois = (userGranulebois.value * granulebois).toFixed(2)
scoreGranulebois.innerHTML = defaultGranulebois
userGranulebois.addEventListener("input", multiplyGranulebois);
function multiplyGranulebois() {
  let one = parseFloat(userGranulebois.value) || 0;
  let cc = parseFloat(one * granulebois).toFixed(2);
  scoreGranulebois.innerHTML = cc;
  totEnergie()
}


// field buche bois
const userBuche = document.getElementById('userBuche');
const bucheboiscc = 0.114
const scoreBuchebois = document.getElementById('scoreBuchebois');
const defaultBuchebois = (userBuche.value * bucheboiscc).toFixed(2)
scoreBuchebois.innerHTML = defaultBuchebois
userBuche.addEventListener("input", multiplyBuche);
function multiplyBuche() {
  let one = parseFloat(userBuche.value) || 0;
  let cc = parseFloat(one * bucheboiscc).toFixed(2);
  scoreBuchebois.innerHTML = cc;
  totEnergie()
}

// field eau
const userEau = document.getElementById('userEau');
const eaucc = 0.132
const scoreEau = document.getElementById('scoreEau');
const defaultEau = (userEau.value * eaucc).toFixed(2)
scoreEau.innerHTML = defaultEau
userEau.addEventListener("input", multiplyEau);
function multiplyEau() {
  let one = parseFloat(userEau.value) || 0;
  let cc = parseFloat(one * eaucc).toFixed(2);
  scoreEau.innerHTML = cc;
  totEnergie()
}
// dipslay values on update page
const defaultEnergie = (Number(defaultElectricite) + Number(defaultGazkwh) + Number(defaultGazm)
  + Number(defaultFioul) + Number(defaultGranulebois) + Number(defaultBuchebois) + Number(defaultEau)).toFixed(2);
totalEnergie.innerHTML = defaultEnergie

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
const defaultBle = (userBle.value * blecc).toFixed(2)
scoreBle.innerHTML = defaultBle
userBle.addEventListener("input", multiplyBle);
function multiplyBle() {
  let one = parseFloat(userBle.value) || 0;
  let ccble = parseFloat(one * blecc).toFixed(2);
  scoreBle.innerHTML = ccble;
  totAlim()
}


// field carotte
const userCarotte = document.getElementById('userCarotte');
const carottecc = 0.0706
const scoreCarotte = document.getElementById('scoreCarotte');
const defaultCarotte = (userCarotte.value * carottecc).toFixed(2)
scoreCarotte.innerHTML = defaultCarotte
userCarotte.addEventListener("input", multiplyCarotte);
function multiplyCarotte() {
  let one = parseFloat(userCarotte.value) || 0;
  let cccarotte = parseFloat(one * carottecc).toFixed(2);
  scoreCarotte.innerHTML = cccarotte;
  totAlim()
}

// field riz
const userRiz = document.getElementById('userRiz');
const rizcc = 3.59
const scoreRiz = document.getElementById('scoreRiz');
const defaultRiz = (userRiz.value * rizcc).toFixed(2)
scoreRiz.innerHTML = defaultRiz
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
const defaultPommeDeTerre = (userPommeDeTerre.value * pommedeterrecc).toFixed(2)
scorePommeDeTerre.innerHTML = defaultPommeDeTerre
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
const defaultSaladeSaison = (userSaladeSaison.value * saladesaisoncc).toFixed(2)
scoreSaladeSaison.innerHTML = defaultSaladeSaison
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
const defaultSaladeSs = (userSaladeSs.value * saladesscc).toFixed(2)
scoreSaladeSs.innerHTML = defaultSaladeSs
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
const defaultTomates = (userTomates.value * tomatesscc).toFixed(2)
scoreTomates.innerHTML = defaultTomates
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
const defaultTomatesFRss = (userTomatesFRss.value * tomatesFRsscc).toFixed(2)
scoreTomatesFRss.innerHTML = defaultTomatesFRss
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
const defaultBoeuf = (userBoeuf.value * boeufcc).toFixed(2)
scoreBoeuf.innerHTML = defaultBoeuf
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
const defaultVeau = (userVeau.value * veaucc).toFixed(2)
scoreVeau.innerHTML = defaultVeau
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
const defaultLaitDeVache = (userLaitvache.value * laitvachecc).toFixed(2)
scoreLaitvache.innerHTML = defaultLaitDeVache
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
const defaultPoulet = (userPoulet.value * pouletcc).toFixed(2)
scorePoulet.innerHTML = defaultPoulet
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
const defaultOeufs = (userOeufs.value * oeufscc).toFixed(2)
scoreOeufs.innerHTML = defaultOeufs
userOeufs.addEventListener("input", multiplyOeufs);
function multiplyOeufs() {
  let one = parseFloat(userOeufs.value) || 0;
  let oeufs = parseFloat(one * oeufscc).toFixed(2);
  scoreOeufs.innerHTML = oeufs;
  totAlim()
}
// to display values on update form
const defaultAlim = (Number(defaultBle) + Number(defaultCarotte)
  + Number(defaultRiz) + Number(defaultPommeDeTerre) + Number(defaultSaladeSaison)
  + Number(defaultSaladeSs) + Number(defaultTomates) + Number(defaultTomatesFRss)
  + Number(defaultBoeuf) + Number(defaultVeau) + Number(defaultLaitDeVache)
  + Number(defaultPoulet) + Number(defaultOeufs)).toFixed(2)
totalAlimBox.innerHTML = defaultAlim

// category autre
const totalAutre = document.getElementById('totalAutre')
function totAutre() {
  const numberAspirateur = Number(scoreAspirateur.textContent);
  const numberCongelateur = Number(scoreCongelateur.textContent);
  const numberRefrigerateur = Number(scoreRefrigerateur.textContent);
  const numberFourelec = Number(scoreFourelec.textContent);
  const numberLavelinge = Number(scoreLavelinge.textContent);
  const numberMicroonde = Number(scoreMicroonde.textContent);
  const numberSmartphone = Number(scoreSmartphone.textContent);
  const numberOrdinateur = Number(scoreOrdinateur.textContent);
  const sum = numberAspirateur + numberCongelateur + numberRefrigerateur + numberFourelec + numberLavelinge
    + numberMicroonde + numberSmartphone + numberOrdinateur
  totalAutre.innerText = sum.toFixed(2);
  total();
}
// field aspi
let userAspirateur = document.getElementById('userAspirateur');
const aspirateurcc = 52
const scoreAspirateur = document.getElementById('scoreAspirateur');
userAspirateur.addEventListener("input", multiplyAspirateur);
function multiplyAspirateur() {
  let one = parseFloat(userAspirateur.value) || 0;
  let cc = parseFloat(one * aspirateurcc).toFixed(2);
  scoreAspirateur.innerHTML = cc;
  totAutre()
}
// field congélateur
let userCongelateur = document.getElementById('userCongelateur');
const congelateurcc = 415
const scoreCongelateur = document.getElementById('scoreCongelateur');
userCongelateur.addEventListener("input", multiplyCongelateur);
function multiplyCongelateur() {
  let one = parseFloat(userCongelateur.value) || 0;
  let cc = parseFloat(one * congelateurcc).toFixed(2);
  scoreCongelateur.innerHTML = cc;
  totAutre()
}
// field refrigerateur 250 l
let userRefrigerateur = document.getElementById('userRefrigerateur');
const refrigerateurcc = 300
const scoreRefrigerateur = document.getElementById('scoreRefrigerateur');
userRefrigerateur.addEventListener("input", multiplyRefrigerateur);
function multiplyRefrigerateur() {
  let one = parseFloat(userRefrigerateur.value) || 0;
  let cc = parseFloat(one * refrigerateurcc).toFixed(2);
  scoreRefrigerateur.innerHTML = cc;
  totAutre()
}
// field four electrique
let userFourelec = document.getElementById('userFourelec');
const foureleccc = 217
const scoreFourelec = document.getElementById('scoreFourelec');
userFourelec.addEventListener("input", multiplyFourelec);
function multiplyFourelec() {
  let one = parseFloat(userFourelec.value) || 0;
  let cc = parseFloat(one * foureleccc).toFixed(2);
  scoreFourelec.innerHTML = cc;
  totAutre()
}
// field lave linge
let userLavelinge = document.getElementById('userLavelinge');
const lavelingecc = 217
const scoreLavelinge = document.getElementById('scoreLavelinge');
userLavelinge.addEventListener("input", multiplyLavelinge);
function multiplyLavelinge() {
  let one = parseFloat(userLavelinge.value) || 0;
  let cc = parseFloat(one * lavelingecc).toFixed(2);
  scoreLavelinge.innerHTML = cc;
  totAutre()
}
// field micro-onde
let userMicroonde = document.getElementById('userMicroonde');
const microondecc = 100
const scoreMicroonde = document.getElementById('scoreMicroonde');
userMicroonde.addEventListener("input", multiplyMicroonde);
function multiplyMicroonde() {
  let one = parseFloat(userMicroonde.value) || 0;
  let cc = parseFloat(one * microondecc).toFixed(2);
  scoreMicroonde.innerHTML = cc;
  totAutre()
}
// field smartphone
let userSmartphone = document.getElementById('userSmartphone');
const smartphonecc = 15
const scoreSmartphone = document.getElementById('scoreSmartphone');
userSmartphone.addEventListener("input", multiplySmartphone);
function multiplySmartphone() {
  let one = parseFloat(userSmartphone.value) || 0;
  let cc = parseFloat(one * smartphonecc).toFixed(2);
  scoreSmartphone.innerHTML = cc;
  totAutre()
}
// field smartphone
let userOrdinateur = document.getElementById('userOrdinateur');
const ordinateurcc = 150
const scoreOrdinateur = document.getElementById('scoreOrdinateur');
userOrdinateur.addEventListener("input", multiplyOrdinateur);
function multiplyOrdinateur() {
  let one = parseFloat(userOrdinateur.value) || 0;
  let cc = parseFloat(one * ordinateurcc).toFixed(2);
  scoreOrdinateur.innerHTML = cc;
  totAutre()
}


