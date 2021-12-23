/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/calculations.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/calculations.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/calculations.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// sticky total categ
// total Bilan
var totalBilan = document.getElementById('total');
var totalPerson = document.getElementById('total-personne');
var userPerson = document.getElementById('userPerson');
userPerson.addEventListener("input", divide);

function divide() {
  person = parseFloat(userPerson.value) || 1;
  var scorePerson = (Number(totalBilan.textContent) / person).toFixed(2);
  totalPerson.innerHTML = scorePerson;
}

function total() {
  var numberVoiture = Number(totalVoiture.textContent);
  var numberTransport = Number(totalTransport.textContent);
  var numberEnergie = Number(totalEnergie.textContent);
  var numberAlim = Number(totalAlimBox.textContent);
  var numberVetements = Number(totalVetement.textContent);
  var numberAutre = Number(totalAutre.textContent);
  var numberValeur = Number(totalValeur.textContent);
  var sumTotal = numberVoiture + numberAlim + numberTransport + numberEnergie + numberAutre + numberValeur + numberVetements;
  totalBilan.innerHTML = sumTotal.toFixed(2);
  divide();
} // total category voiture


var totalVoiture = document.getElementById('totalVoiture');

function totVoiture() {
  var numberEssence = Number(scoreEssence.textContent);
  var numberGazole = Number(scoreGazole.textContent);
  var numberGpl = Number(scoreGpl.textContent);
  var numberE85 = Number(scoreE85.textContent);
  var numberGaz = Number(scoreGaz.textContent);
  var numberElectrique = Number(scoreElectrique.textContent);
  var numberEssencel = Number(scoreEssencel.textContent);
  var numberGazolel = Number(scoreGazolel.textContent);
  var numberLgpl = Number(scoreLgpl.textContent);
  var numberLe85 = Number(scoreLe85.textContent);
  var numberLGaz = Number(scoreLgaz.textContent);
  var numberLelectrique = Number(scoreLelectrique.textContent);
  var sumVoiture = numberEssence + numberGazole + numberGpl + numberE85 + numberElectrique + numberEssencel + numberGazolel + numberLgpl + numberLe85 + numberLelectrique + numberGaz + numberLGaz;
  totalVoiture.innerText = sumVoiture.toFixed(2);
  total();
} // function to refacto
// function field (userField, scoreCarbon, scoreField, callback) {
//   console.log('infield')
//   const userValue = document.getElementById(userField)
//   const carbonMultiplier = document.getElementById(scoreCarbon)
//   const scoreValue = scoreField
//   const defaultValue = (userValue.value * carbonMultiplier).toFixed(2)
//   scoreValue.innerHTML = defaultValue
//   userValue.addEventListener("input", multiplyField );
//   function multiplyField() {
//     console.log('hello')
//     let one = parseFloat(userValue.value) || 0
//     let ccfield = parseFloat(one * carbonMultiplier).toFixed(2)
//     scoreValue.innerHTML = ccfield;
//     callback()
//   }
// }
// (field('userEssence',2.8,'scoreEssence', totVoiture()))()


var userEssence = document.getElementById('userEssence');
var essencecc = 2.8;
var scoreEssence = document.getElementById('scoreEssence');
var defaultEssence = (userEssence.value * essencecc).toFixed(2);
scoreEssence.innerHTML = defaultEssence;
userEssence.addEventListener("input", multiplyEssence);

function multiplyEssence() {
  var one = parseFloat(userEssence.value) || 0;
  var ccessence = parseFloat(one * essencecc).toFixed(2);
  scoreEssence.innerHTML = ccessence;
  totVoiture();
} // field essence litre


var userEssencel = document.getElementById('userEssencel');
var userKmessencel = document.getElementById('userKmessencel');
var scoreEssencel = document.getElementById('scoreEssencel');
var defaultEssencel = (userEssencel.value / 100 * userKmessencel.value * essencecc).toFixed(2);
scoreEssencel.innerHTML = defaultEssencel;
userEssencel.addEventListener("input", changConsoEssencel);

function changConsoEssencel() {
  var one = parseFloat(userEssencel.value) / 100 || 0;
  var consoEssencel = parseFloat(one * essencecc * userKmessencel.value).toFixed(2);
  scoreEssencel.innerHTML = consoEssencel;
  totVoiture();
}

userKmessencel.addEventListener("input", changeConsoKmessencel);

function changeConsoKmessencel() {
  var one = parseFloat(userKmessencel.value) || 0;
  var consoEssencel = parseFloat(one * essencecc * (userEssencel.value / 100)).toFixed(2);
  scoreEssencel.innerHTML = consoEssencel;
  totVoiture();
} // field gazole


var userGazole = document.getElementById('userGazole');
var gazolecc = 3.16;
var scoreGazole = document.getElementById('scoreGazole');
var defaultGazole = (userGazole.value * gazolecc).toFixed(2);
scoreGazole.innerHTML = defaultGazole;
userGazole.addEventListener("input", multiplyGazole);

function multiplyGazole() {
  var one = parseFloat(userGazole.value) || 0;
  var ccgazole = parseFloat(one * gazolecc).toFixed(2);
  scoreGazole.innerHTML = ccgazole;
  totVoiture();
}

var userGazolel = document.getElementById('userGazolel');
var userKmgazolel = document.getElementById('userKmgazolel');
var scoreGazolel = document.getElementById('scoreGazolel');
var defaultGazolel = (userGazolel.value / 100 * userKmgazolel.value * gazolecc).toFixed(2);
scoreGazolel.innerHTML = defaultGazolel;
userGazolel.addEventListener("input", changConsoGazolel);

function changConsoGazolel() {
  var one = parseFloat(userGazolel.value) / 100 || 0;
  var consoGazolel = parseFloat(one * gazolecc * userKmgazolel.value).toFixed(2);
  scoreGazolel.innerHTML = consoGazolel;
  totVoiture();
}

userKmgazolel.addEventListener("input", changeConsoKmgazolel);

function changeConsoKmgazolel() {
  var one = parseFloat(userKmgazolel.value) || 0;
  var consoGazolel = parseFloat(one * gazolecc * (userGazolel.value / 100)).toFixed(2);
  scoreGazolel.innerHTML = consoGazolel;
  totVoiture();
} // field gpl


var userGpl = document.getElementById('userGpl');
var gplcc = 1.86;
var scoreGpl = document.getElementById('scoreGpl');
var defaultGPL = (userGpl.value * gplcc).toFixed(2);
scoreGpl.innerHTML = defaultGPL;
userGpl.addEventListener("input", multiplyGpl);

function multiplyGpl() {
  var one = parseFloat(userGpl.value) || 0;
  var ccgpl = parseFloat(one * gplcc).toFixed(2);
  scoreGpl.innerHTML = ccgpl;
  totVoiture();
}

var userLgpl = document.getElementById('userLgpl');
var userKmgpl = document.getElementById('userKmgpl');
var scoreLgpl = document.getElementById('scoreLgpl');
var defaultLgpl = (userLgpl.value / 100 * userKmgpl.value * gplcc).toFixed(2);
scoreLgpl.innerHTML = defaultLgpl;
userLgpl.addEventListener("input", changConsoLgpl);

function changConsoLgpl() {
  var one = parseFloat(userLgpl.value) / 100 || 0;
  var consoLgpl = parseFloat(one * gplcc * userKmgpl.value).toFixed(2);
  scoreLgpl.innerHTML = consoLgpl;
  totVoiture();
}

userKmgpl.addEventListener("input", changeConsoKmgpl);

function changeConsoKmgpl() {
  var one = parseFloat(userKmgpl.value) || 0;
  var consoLgpl = parseFloat(one * gplcc * (userLgpl.value / 100)).toFixed(2);
  scoreLgpl.innerHTML = consoLgpl;
  totVoiture();
} // field e85


var userE85 = document.getElementById('userE85');
var e85cc = 1.68;
var scoreE85 = document.getElementById('scoreE85');
var defaultE85 = (userE85.value * e85cc).toFixed(2);
scoreE85.innerHTML = defaultE85;
userE85.addEventListener("input", multiplyE85);

function multiplyE85() {
  var one = parseFloat(userE85.value) || 0;
  var cce85 = parseFloat(one * e85cc).toFixed(2);
  scoreE85.innerHTML = cce85;
  totVoiture();
}

var userLe85 = document.getElementById('userLe85');
var userKme85 = document.getElementById('userKme85');
var scoreLe85 = document.getElementById('scoreLe85');
var defaultLe85 = (userLe85.value / 100 * userKme85.value * e85cc).toFixed(2);
scoreLe85.innerHTML = defaultLe85;
userLe85.addEventListener("input", changConsoLe85);

function changConsoLe85() {
  var one = parseFloat(userLe85.value) / 100 || 0;
  var consoLe85 = parseFloat(one * e85cc * userKme85.value).toFixed(2);
  scoreLe85.innerHTML = consoLe85;
  totVoiture();
}

userKme85.addEventListener("input", changeConsoKme85);

function changeConsoKme85() {
  var one = parseFloat(userKme85.value) || 0;
  var consoLe85 = parseFloat(one * e85cc * (userLe85.value / 100)).toFixed(2);
  scoreLe85.innerHTML = consoLe85;
  totVoiture();
} // field gaz nat


var userGaznat = document.getElementById('userGaznat');
var gazcc = 3.35;
var scoreGaz = document.getElementById('scoreGaz');
var defaultGaz = (userGaznat.value * gazcc).toFixed(2);
scoreGaz.innerHTML = defaultGaz;
userGaznat.addEventListener("input", multiplyGaznat);

function multiplyGaznat() {
  var one = parseFloat(userGaznat.value) || 0;
  var cce85 = parseFloat(one * gazcc).toFixed(2);
  scoreGaz.innerHTML = cce85;
  totVoiture();
}

var userLGaz = document.getElementById('userLGaz');
var userKGaz = document.getElementById('userKGaz');
var scoreLgaz = document.getElementById('scoreLgaz');
var defaultLgaz = (userLGaz.value / 100 * userKGaz.value * gazcc).toFixed(2);
scoreLgaz.innerHTML = defaultLgaz;
userLGaz.addEventListener("input", changConsoLgaz);

function changConsoLgaz() {
  var one = parseFloat(userLGaz.value) / 100 || 0;
  var consoLgaz = parseFloat(one * gazcc * userKGaz.value).toFixed(2);
  scoreLgaz.innerHTML = consoLgaz;
  totVoiture();
}

userKGaz.addEventListener("input", changeConsoKmgaz);

function changeConsoKmgaz() {
  var one = parseFloat(userKGaz.value) || 0;
  var consoLgaz = parseFloat(one * gazcc * (userLGaz.value / 100)).toFixed(2);
  scoreLgaz.innerHTML = consoLgaz;
  totVoiture();
} // field electrique


var userElectrique = document.getElementById('userElectrique');
var electriquecc = 0.0571;
var scoreElectrique = document.getElementById('scoreElectrique');
var defaultElectrique = (userElectrique.value * electriquecc).toFixed(2);
scoreElectrique.innerHTML = defaultElectrique;
userElectrique.addEventListener("input", multiplyElectrique);

function multiplyElectrique() {
  var one = parseFloat(userElectrique.value) || 0;
  var ccelectrique = parseFloat(one * electriquecc).toFixed(2);
  scoreElectrique.innerHTML = ccelectrique;
  totVoiture();
}

var userLelectrique = document.getElementById('userLelectrique');
var userKmelectrique = document.getElementById('userKmelectrique');
var scoreLelectrique = document.getElementById('scoreLelectrique');
var defaultLelectrique = (userLelectrique.value / 100 * userKmelectrique.value * electriquecc).toFixed(2);
scoreLelectrique.innerHTML = defaultLelectrique;
userLelectrique.addEventListener("input", changConsoLelectrique);

function changConsoLelectrique() {
  var one = parseFloat(userLelectrique.value) / 100 || 0;
  var consoLelectrique = parseFloat(one * electriquecc * userKmelectrique.value).toFixed(2);
  scoreLelectrique.innerHTML = consoLelectrique;
  totVoiture();
}

userKmelectrique.addEventListener("input", changeConsoKmelectrique);

function changeConsoKmelectrique() {
  var one = parseFloat(userKmelectrique.value) || 0;
  var consoLelectrique = parseFloat(one * electriquecc * (userLelectrique.value / 100)).toFixed(2);
  scoreLelectrique.innerHTML = consoLelectrique;
  totVoiture();
} // to display values on edit footprint


var defaultVoiture = (Number(defaultEssence) + Number(defaultGazole) + Number(defaultGPL) + Number(defaultE85) + Number(defaultElectrique) + Number(defaultGaz) + Number(defaultEssencel) + Number(defaultGazolel) + Number(defaultLgpl) + Number(defaultLe85) + Number(defaultLelectrique) + Number(defaultLgaz)).toFixed(2);
totalVoiture.innerHTML = defaultVoiture; // transport Energie Logement / autres
// fin de category voiture
// category transport

var totalTransport = document.getElementById('totalTransport');

function totTransport() {
  var numberTgv = Number(scoreTgv.textContent);
  var numberTerelec = Number(scoreTerelec.textContent);
  var numberIntercite = Number(scoreIntercite.textContent);
  var numberMetro = Number(scoreMetro.textContent);
  var numberBus = Number(scoreBus.textContent);
  var numberAvion = Number(scoreAvion.textContent);
  var numberAvionregional = Number(scoreAvionregional.textContent);
  var sumTransport = numberTgv + numberTerelec + numberIntercite + numberMetro + numberBus + numberAvion + numberAvionregional; //  bus avion avion régional

  totalTransport.innerText = sumTransport.toFixed(2);
  total();
} // field tgv


var userTgv = document.getElementById('userTgv');
var tgvcc = 0.00173;
var scoreTgv = document.getElementById('scoreTgv');
var defaultTgv = (userTgv.value * tgvcc).toFixed(2);
scoreTgv.innerHTML = defaultTgv;
userTgv.addEventListener("input", multiplyTgv);

function multiplyTgv() {
  var one = parseFloat(userTgv.value) || 0;
  var cctgv = parseFloat(one * tgvcc).toFixed(3);
  scoreTgv.innerHTML = cctgv;
  totTransport();
} // field ter elec


var userTerelec = document.getElementById('userTerelec');
var tereleccc = 0.00248;
var scoreTerelec = document.getElementById('scoreTerelec');
var defaultTerelec = (userTerelec.value * tereleccc).toFixed(2);
scoreTerelec.innerHTML = defaultTerelec;
userTerelec.addEventListener("input", multiplyTerelec);

function multiplyTerelec() {
  var one = parseFloat(userTerelec.value) || 0;
  var ccterelec = parseFloat(one * tereleccc).toFixed(3);
  scoreTerelec.innerHTML = ccterelec;
  totTransport();
} // field ter thermique
// const userTertherm = document.getElementById('userTertherm');
// const terthermcc = 0.0798
// const scoreTertherm = document.getElementById('scoreTertherm');
// const defaultTerTherm = (userTertherm.value * terthermcc).toFixed(2)
// scoreTertherm.innerHTML = defaultTerTherm
// userTertherm.addEventListener("input", multiplyTertherm);
// function multiplyTertherm() {
//   let one = parseFloat(userTertherm.value) || 0;
//   let cctertherm = parseFloat(one * terthermcc).toFixed(3);
//   scoreTertherm.innerHTML = cctertherm;
//   totTransport();
// }
// field intercite


var userIntercite = document.getElementById('userIntercite');
var intercitecc = 0.0056;
var scoreIntercite = document.getElementById('scoreIntercite');
var defaultIntercite = (userIntercite.value * intercitecc).toFixed(2);
scoreIntercite.innerHTML = defaultIntercite;
userIntercite.addEventListener("input", multiplyIntercite);

function multiplyIntercite() {
  var one = parseFloat(userIntercite.value) || 0;
  var ccintercite = parseFloat(one * intercitecc).toFixed(3);
  scoreIntercite.innerHTML = ccintercite;
  totTransport();
} // field metro / RER


var userMetro = document.getElementById('userMetro');
var metrocc = 0.0057;
var scoreMetro = document.getElementById('scoreMetro');
var defaultMetro = (userMetro.value * metrocc).toFixed(2);
scoreMetro.innerHTML = defaultMetro;
userMetro.addEventListener("input", multiplyMetro);

function multiplyMetro() {
  var one = parseFloat(userMetro.value) || 0;
  var ccmetro = parseFloat(one * metrocc).toFixed(3);
  scoreMetro.innerHTML = ccmetro;
  totTransport();
} // field bus


var userBus = document.getElementById('userBus');
var buscc = 0.0921666666666667;
var scoreBus = document.getElementById('scoreBus');
var defaultBus = (userBus.value * buscc).toFixed(2);
scoreBus.innerHTML = defaultBus;
userBus.addEventListener("input", multiplyBus);

function multiplyBus() {
  var one = parseFloat(userBus.value) || 0;
  var ccbus = parseFloat(one * buscc).toFixed(3);
  scoreBus.innerHTML = ccbus;
  totTransport();
} // field avion


var userAvion = document.getElementById('userAvion');
var avioncc = 0.258;
var scoreAvion = document.getElementById('scoreAvion');
var defaultAvion = (userAvion.value * avioncc).toFixed(2);
scoreAvion.innerHTML = defaultAvion;
userAvion.addEventListener("input", multiplyAvion);

function multiplyAvion() {
  var one = parseFloat(userAvion.value) || 0;
  var ccavion = parseFloat(one * avioncc).toFixed(3);
  scoreAvion.innerHTML = ccavion;
  totTransport();
} // field avion regional


var userAvionregional = document.getElementById('userAvionregional');
var avionregionalcc = 0.453;
var scoreAvionregional = document.getElementById('scoreAvionregional');
var defaultAvionregional = (userAvionregional.value * avionregionalcc).toFixed(2);
scoreAvionregional.innerHTML = defaultAvionregional;
userAvionregional.addEventListener("input", multiplyAvionregional);

function multiplyAvionregional() {
  var one = parseFloat(userAvionregional.value) || 0;
  var ccavionregional = parseFloat(one * avionregionalcc).toFixed(3);
  scoreAvionregional.innerHTML = ccavionregional;
  totTransport();
} // to display values on edit footprint


var defaultTransport = (Number(defaultTgv) + Number(defaultTerelec) + Number(defaultIntercite) + Number(defaultMetro) + Number(defaultBus) + Number(defaultAvion) + Number(defaultAvionregional)).toFixed(2);
totalTransport.innerHTML = defaultTransport; // category logement / energie

var totalEnergie = document.getElementById('totalEnergie');

function totEnergie() {
  var numberElectricite = Number(scoreElectricite.textContent);
  var numberGazkwh = Number(scoreGazkwh.textContent);
  var numberGazm = Number(scoreGazm.textContent);
  var numberFioul = Number(scoreFioul.textContent);
  var numberGranulebois = Number(scoreGranulebois.textContent);
  var numberBuchebois = Number(scoreBuchebois.textContent);
  var numberEau = Number(scoreEau.textContent);
  var numberEauusee = Number(scoreEauusee.textContent);
  var numberDechet = Number(scoreDechet.textContent);
  var numberStreaming = Number(scoreStreaming.textContent);
  var numberTweet = Number(scoreTweet.textContent);
  var numberMail = Number(scoreMail.textContent);
  var sumEnergie = numberDechet + numberElectricite + numberGazkwh + numberGazm + numberFioul + numberGranulebois + numberBuchebois + numberEau + numberStreaming + numberTweet + numberMail + numberEauusee;
  totalEnergie.innerText = sumEnergie.toFixed(2);
  total();
} // field electricité


var userElectricite = document.getElementById('userElectricite');
var elecricitecc = 0.0571;
var scoreElectricite = document.getElementById('scoreelec');
var defaultElectricite = (userElectricite.value * elecricitecc).toFixed(2);
scoreElectricite.innerHTML = defaultElectricite;
userElectricite.addEventListener("input", multiplyElec);

function multiplyElec() {
  var one = parseFloat(userElectricite.value) || 0;
  var cc = parseFloat(one * elecricitecc).toFixed(2);
  scoreElectricite.innerHTML = cc;
  totEnergie();
} // field gazkwh


var userGazkwh = document.getElementById('userGaz');
var gazkwhcc = 0.205;
var scoreGazkwh = document.getElementById('scoreGazkwh');
var defaultGazkwh = (userGazkwh.value * gazkwhcc).toFixed(2);
scoreGazkwh.innerHTML = defaultGazkwh;
userGaz.addEventListener("input", multiplyGazkwh);

function multiplyGazkwh() {
  var one = parseFloat(userGaz.value) || 0;
  var cc = parseFloat(one * gazkwhcc).toFixed(2);
  scoreGazkwh.innerHTML = cc;
  totEnergie();
} // field gazm


var userGazm = document.getElementById('userGazm');
var gazm = 2.2;
var scoreGazm = document.getElementById('scoreGazm');
var defaultGazm = (userGazm.value * gazm).toFixed(2);
scoreGazm.innerHTML = defaultGazm;
userGazm.addEventListener("input", multiplyGazm);

function multiplyGazm() {
  var one = parseFloat(userGazm.value) || 0;
  var cc = parseFloat(one * gazm).toFixed(2);
  scoreGazm.innerHTML = cc;
  totEnergie();
} // field fioul


var userFioul = document.getElementById('userFioul');
var fioulcc = 3.25;
var scoreFioul = document.getElementById('scoreFioul');
var defaultFioul = (userFioul.value * fioulcc).toFixed(2);
scoreFioul.innerHTML = defaultFioul;
userFioul.addEventListener("input", multiplyFioul);

function multiplyFioul() {
  var one = parseFloat(userFioul.value) || 0;
  var cc = parseFloat(one * fioulcc).toFixed(2);
  scoreFioul.innerHTML = cc;
  totEnergie();
} // field granule bois


var userGranulebois = document.getElementById('userGranulebois');
var granulebois = 0.111;
var scoreGranulebois = document.getElementById('scoreGranulebois');
var defaultGranulebois = (userGranulebois.value * granulebois).toFixed(2);
scoreGranulebois.innerHTML = defaultGranulebois;
userGranulebois.addEventListener("input", multiplyGranulebois);

function multiplyGranulebois() {
  var one = parseFloat(userGranulebois.value) || 0;
  var cc = parseFloat(one * granulebois).toFixed(2);
  scoreGranulebois.innerHTML = cc;
  totEnergie();
} // field buche bois


var userBuche = document.getElementById('userBuche');
var bucheboiscc = 0.114;
var scoreBuchebois = document.getElementById('scoreBuchebois');
var defaultBuchebois = (userBuche.value * bucheboiscc).toFixed(2);
scoreBuchebois.innerHTML = defaultBuchebois;
userBuche.addEventListener("input", multiplyBuche);

function multiplyBuche() {
  var one = parseFloat(userBuche.value) || 0;
  var cc = parseFloat(one * bucheboiscc).toFixed(2);
  scoreBuchebois.innerHTML = cc;
  totEnergie();
} // field eau


var userEau = document.getElementById('userEau');
var eaucc = 0.132;
var scoreEau = document.getElementById('scoreEau');
var defaultEau = (userEau.value * eaucc).toFixed(2);
scoreEau.innerHTML = defaultEau;
userEau.addEventListener("input", multiplyEau);

function multiplyEau() {
  var one = parseFloat(userEau.value) || 0;
  var cc = parseFloat(one * eaucc).toFixed(2);
  scoreEau.innerHTML = cc;
  totEnergie();
} // field eau usee


var userEauusee = document.getElementById('userEauusee');
var eauuseecc = 0.262;
var scoreEauusee = document.getElementById('scoreEauusee');
var defaultEauusee = (userEauusee.value * eauuseecc).toFixed(2);
scoreEauusee.innerHTML = defaultEauusee;
userEauusee.addEventListener("input", multiplyEauusee);

function multiplyEauusee() {
  var one = parseFloat(userEauusee.value) || 0;
  var cc = parseFloat(one * eauuseecc).toFixed(2);
  scoreEauusee.innerHTML = cc;
  totEnergie();
} // field dechet OM


var userDechet = document.getElementById('userDechet');
var dechetcc = 0.172;
var scoreDechet = document.getElementById('scoreDechet');
var defaultdechet = (userDechet.value * dechetcc).toFixed(2);
scoreDechet.innerHTML = defaultdechet;
userDechet.addEventListener("input", multiplyDechet);

function multiplyDechet() {
  var one = parseFloat(userDechet.value) || 0;
  var cc = parseFloat(one * dechetcc).toFixed(2);
  scoreDechet.innerHTML = cc;
  totEnergie();
} // field streaming


var userStreaming = document.getElementById('userStreaming');
var streamingcc = 0.25;
var scoreStreaming = document.getElementById('scoreStreaming');
var defaultStreaming = (userStreaming.value * streamingcc).toFixed(2);
scoreStreaming.innerHTML = defaultStreaming;
userStreaming.addEventListener("input", multiplyStreaming);

function multiplyStreaming() {
  var one = parseFloat(userStreaming.value) || 0;
  var cc = parseFloat(one * streamingcc).toFixed(2);
  scoreStreaming.innerHTML = cc;
  totEnergie();
} // field tweet


var userTweet = document.getElementById('userTweet');
var tweetcc = 0.00002;
var scoreTweet = document.getElementById('scoreTweet');
var defaultTweet = (userTweet.value * tweetcc).toFixed(2);
scoreTweet.innerHTML = defaultTweet;
userTweet.addEventListener("input", multiplyTweet);

function multiplyTweet() {
  var one = parseFloat(userTweet.value) || 0;
  var cc = parseFloat(one * tweetcc).toFixed(4);
  scoreTweet.innerHTML = cc;
  totEnergie();
} // field mail


var userMail = document.getElementById('userMail');
var mailcc = 0.035;
var scoreMail = document.getElementById('scoreMail');
var defaultMail = (userMail.value * mailcc).toFixed(2);
scoreMail.innerHTML = defaultMail;
userMail.addEventListener("input", multiplyMail);

function multiplyMail() {
  var one = parseFloat(userMail.value) || 0;
  var cc = parseFloat(one * mailcc).toFixed(2);
  scoreMail.innerHTML = cc;
  totEnergie();
} // dipslay values on update page


var defaultEnergie = (Number(defaultElectricite) + Number(defaultGazkwh) + Number(defaultGazm) + Number(defaultFioul) + Number(defaultGranulebois) + Number(defaultBuchebois) + Number(defaultEau) + Number(defaultStreaming) + Number(defaultTweet) + Number(defaultMail)).toFixed(2);
totalEnergie.innerHTML = defaultEnergie; // total category alimentaire

var totalAlimBox = document.getElementById('totalAlimBox');

function totAlim() {
  var numberble = Number(scoreBle.textContent);
  var numbercarotte = Number(scoreCarotte.textContent);
  var numberriz = Number(scoreRiz.textContent);
  var numberPomedeterre = Number(scorePommedeterre.textContent);
  var numberSaladesaison = Number(scoreSaladeSaison.textContent);
  var numberSaladeSs = Number(scoreSaladeSs.textContent);
  var numberTomates = Number(scoreTomates.textContent);
  var numberTomatesFrss = Number(scoreTomatesFRss.textContent);
  var numberBoeuf = Number(scoreBoeuf.textContent);
  var numberVeau = Number(scoreVeau.textContent);
  var numberLaitvache = Number(scoreLaitvache.textContent);
  var numberPoulet = Number(scorePoulet.textContent);
  var numberOeufs = Number(scoreOeufs.textContent);
  var numberAgneau = Number(scoreAgneau.textContent);
  var numberTruite = Number(scoreTruite.textContent);
  var numberCrevette = Number(scoreCrevette.textContent);
  var numberPecheeuro = Number(scorePecheeuro.textContent);
  var numberPechetropico = Number(scorePechetropico.textContent);
  var numberPomme = Number(scorePomme.textContent);
  var sum = numberble + numbercarotte + numberriz + numberPomedeterre + numberSaladesaison + numberSaladeSs + numberTomates + numberTomatesFrss + numberVeau + numberBoeuf + numberLaitvache + numberPoulet + numberOeufs + numberAgneau + numberTruite + numberCrevette + numberPecheeuro + numberPechetropico + numberPomme;
  totalAlimBox.innerText = sum.toFixed(2);
  total();
} // field ble


var userBle = document.getElementById('userBle');
var blecc = 0.439;
var scoreBle = document.getElementById('scoreble');
var defaultBle = (userBle.value * blecc).toFixed(2);
scoreBle.innerHTML = defaultBle;
userBle.addEventListener("input", multiplyBle);

function multiplyBle() {
  var one = parseFloat(userBle.value) || 0;
  var ccble = parseFloat(one * blecc).toFixed(2);
  scoreBle.innerHTML = ccble;
  totAlim();
} // field carotte


var userCarotte = document.getElementById('userCarotte');
var carottecc = 0.0706;
var scoreCarotte = document.getElementById('scoreCarotte');
var defaultCarotte = (userCarotte.value * carottecc).toFixed(2);
scoreCarotte.innerHTML = defaultCarotte;
userCarotte.addEventListener("input", multiplyCarotte);

function multiplyCarotte() {
  var one = parseFloat(userCarotte.value) || 0;
  var cccarotte = parseFloat(one * carottecc).toFixed(2);
  scoreCarotte.innerHTML = cccarotte;
  totAlim();
} // field riz


var userRiz = document.getElementById('userRiz');
var rizcc = 3.59;
var scoreRiz = document.getElementById('scoreRiz');
var defaultRiz = (userRiz.value * rizcc).toFixed(2);
scoreRiz.innerHTML = defaultRiz;
userRiz.addEventListener("input", multiplyRiz);

function multiplyRiz() {
  var one = parseFloat(userRiz.value) || 0;
  var ccriz = parseFloat(one * rizcc).toFixed(2);
  scoreRiz.innerHTML = ccriz;
  totAlim();
} // field pomme de terre fr


var userPommeDeTerre = document.getElementById('userPommeDeTerre');
var pommedeterrecc = 0.0861;
var scorePommedeterre = document.getElementById('scorePommeDeTerre');
var defaultPommeDeTerre = (userPommeDeTerre.value * pommedeterrecc).toFixed(2);
scorePommeDeTerre.innerHTML = defaultPommeDeTerre;
userPommeDeTerre.addEventListener("input", multiplyPatate);

function multiplyPatate() {
  var one = parseFloat(userPommeDeTerre.value) || 0;
  var pommedeterre = parseFloat(one * pommedeterrecc).toFixed(2);
  scorePommedeterre.innerHTML = pommedeterre;
  totAlim();
} // field salade saison


var userSaladeSaison = document.getElementById('userSaladeSaison');
var saladesaisoncc = 0.326;
var scoreSaladeSaison = document.getElementById('scoreSaladeSaison');
var defaultSaladeSaison = (userSaladeSaison.value * saladesaisoncc).toFixed(2);
scoreSaladeSaison.innerHTML = defaultSaladeSaison;
userSaladeSaison.addEventListener("input", multiplySalade);

function multiplySalade() {
  var one = parseFloat(userSaladeSaison.value) || 0;
  var saladesaison = parseFloat(one * saladesaisoncc).toFixed(2);
  scoreSaladeSaison.innerHTML = saladesaison;
  totAlim();
} // field salade sous serre


var userSaladeSs = document.getElementById('userSaladeSs');
var saladesscc = 11.05;
var scoreSaladeSs = document.getElementById('scoreSaladeSs');
var defaultSaladeSs = (userSaladeSs.value * saladesscc).toFixed(2);
scoreSaladeSs.innerHTML = defaultSaladeSs;
userSaladeSs.addEventListener("input", multiplySaladeSs);

function multiplySaladeSs() {
  var one = parseFloat(userSaladeSs.value) || 0;
  var saladeSs = parseFloat(one * saladesscc).toFixed(2);
  scoreSaladeSs.innerHTML = saladeSs;
  totAlim();
} // field tomates fr


var userTomates = document.getElementById('userTomates');
var tomatesscc = 0.177;
var scoreTomates = document.getElementById('scoreTomates');
var defaultTomates = (userTomates.value * tomatesscc).toFixed(2);
scoreTomates.innerHTML = defaultTomates;
userTomates.addEventListener("input", multiplyTomates);

function multiplyTomates() {
  var one = parseFloat(userTomates.value) || 0;
  var tomates = parseFloat(one * tomatesscc).toFixed(2);
  scoreTomates.innerHTML = tomates;
  totAlim();
} // field tomates frss


var userTomatesFRss = document.getElementById('userTomatesFRss');
var tomatesFRsscc = 2.23;
var scoreTomatesFRss = document.getElementById('scoreTomatesFRss');
var defaultTomatesFRss = (userTomatesFRss.value * tomatesFRsscc).toFixed(2);
scoreTomatesFRss.innerHTML = defaultTomatesFRss;
userTomatesFRss.addEventListener("input", multiplyTomatesFRss);

function multiplyTomatesFRss() {
  var one = parseFloat(userTomatesFRss.value) || 0;
  var tomatesss = parseFloat(one * tomatesFRsscc).toFixed(2);
  scoreTomatesFRss.innerHTML = tomatesss;
  totAlim();
} // field boeuf


var userBoeuf = document.getElementById('userBoeuf');
var boeufcc = 15;
var scoreBoeuf = document.getElementById('scoreBoeuf');
var defaultBoeuf = (userBoeuf.value * boeufcc).toFixed(2);
scoreBoeuf.innerHTML = defaultBoeuf;
userBoeuf.addEventListener("input", multiplyBoeuf);

function multiplyBoeuf() {
  var one = parseFloat(userBoeuf.value) || 0;
  var boeuf = parseFloat(one * boeufcc).toFixed(2);
  scoreBoeuf.innerHTML = boeuf;
  totAlim();
} // field veau


var userVeau = document.getElementById('userVeau');
var veaucc = 6.5;
var scoreVeau = document.getElementById('scoreVeau');
var defaultVeau = (userVeau.value * veaucc).toFixed(2);
scoreVeau.innerHTML = defaultVeau;
userVeau.addEventListener("input", multiplyVeau);

function multiplyVeau() {
  var one = parseFloat(userVeau.value) || 0;
  var veau = parseFloat(one * veaucc).toFixed(2);
  scoreVeau.innerHTML = veau;
  totAlim();
} // field laitvache


var userLaitvache = document.getElementById('userLaitvache');
var laitvachecc = 0.9;
var scoreLaitvache = document.getElementById('scoreLaitvache');
var defaultLaitDeVache = (userLaitvache.value * laitvachecc).toFixed(2);
scoreLaitvache.innerHTML = defaultLaitDeVache;
userLaitvache.addEventListener("input", multiplyLaitvache);

function multiplyLaitvache() {
  var one = parseFloat(userLaitvache.value) || 0;
  var laitvache = parseFloat(one * laitvachecc).toFixed(2);
  scoreLaitvache.innerHTML = laitvache;
  totAlim();
} // field poulet


var userPoulet = document.getElementById('userPoulet');
var pouletcc = 2.14;
var scorePoulet = document.getElementById('scorePoulet');
var defaultPoulet = (userPoulet.value * pouletcc).toFixed(2);
scorePoulet.innerHTML = defaultPoulet;
userPoulet.addEventListener("input", multiplyPoulet);

function multiplyPoulet() {
  var one = parseFloat(userPoulet.value) || 0;
  var poulet = parseFloat(one * pouletcc).toFixed(2);
  scorePoulet.innerHTML = poulet;
  totAlim();
} // field oeufs


var userOeufs = document.getElementById('userOeufs');
var oeufscc = 1.72;
var scoreOeufs = document.getElementById('scoreOeufs');
var defaultOeufs = (userOeufs.value * oeufscc).toFixed(2);
scoreOeufs.innerHTML = defaultOeufs;
userOeufs.addEventListener("input", multiplyOeufs);

function multiplyOeufs() {
  var one = parseFloat(userOeufs.value) || 0;
  var oeufs = parseFloat(one * oeufscc).toFixed(2);
  scoreOeufs.innerHTML = oeufs;
  totAlim();
} // field agneau


var userAgneau = document.getElementById('userAgneau');
var agneaucc = 6;
var scoreAgneau = document.getElementById('scoreAgneau');
var defaultAgneau = (userAgneau.value * agneaucc).toFixed(2);
scoreAgneau.innerHTML = defaultAgneau;
userAgneau.addEventListener("input", multiplyAgneau);

function multiplyAgneau() {
  var one = parseFloat(userAgneau.value) || 0;
  var agneau = parseFloat(one * agneaucc).toFixed(2);
  scoreAgneau.innerHTML = agneau;
  totAlim();
} // field truite


var userTruite = document.getElementById('userTruite');
var truitecc = 3.08;
var scoreTruite = document.getElementById('scoreTruite');
var defaultTruite = (userTruite.value * truitecc).toFixed(2);
scoreTruite.innerHTML = defaultTruite;
userTruite.addEventListener("input", multiplyTruite);

function multiplyTruite() {
  var one = parseFloat(userTruite.value) || 0;
  var truite = parseFloat(one * truitecc).toFixed(2);
  scoreTruite.innerHTML = truite;
  totAlim();
} // field crevette


var userCrevette = document.getElementById('userCrevette');
var crevettecc = 9.03;
var scoreCrevette = document.getElementById('scoreCrevette');
var defaultCrevette = (userCrevette.value * crevettecc).toFixed(2);
scoreCrevette.innerHTML = defaultCrevette;
userCrevette.addEventListener("input", multiplyCrevette);

function multiplyCrevette() {
  var one = parseFloat(userCrevette.value) || 0;
  var crevette = parseFloat(one * crevettecc).toFixed(2);
  scoreCrevette.innerHTML = crevette;
  totAlim();
} // field peche euro


var userPecheeuro = document.getElementById('userPecheeuro');
var pecheeurocc = 1.9;
var scorePecheeuro = document.getElementById('scorePecheeuro');
var defaultPecheeuro = (userPecheeuro.value * pecheeurocc).toFixed(2);
scorePecheeuro.innerHTML = defaultPecheeuro;
userPecheeuro.addEventListener("input", multiplyPecheeuro);

function multiplyPecheeuro() {
  var one = parseFloat(userPecheeuro.value) || 0;
  var pecheeuro = parseFloat(one * pecheeurocc).toFixed(2);
  scorePecheeuro.innerHTML = pecheeuro;
  totAlim();
} // field peche tropico


var userPechetropico = document.getElementById('userPechetropico');
var pechetropicocc = 3.8;
var scorePechetropico = document.getElementById('scorePechetropico');
var defaultPecheTropico = (userPechetropico.value * pechetropicocc).toFixed(2);
scorePechetropico.innerHTML = defaultPecheTropico;
userPechetropico.addEventListener("input", multiplyPechetropico);

function multiplyPechetropico() {
  var one = parseFloat(userPechetropico.value) || 0;
  var pechetropico = parseFloat(one * pechetropicocc).toFixed(2);
  scorePechetropico.innerHTML = pechetropico;
  totAlim();
} // field pomme


var userPomme = document.getElementById('userPomme');
var pommecc = 0.0675;
var scorePomme = document.getElementById('scorePomme');
var defaultPomme = (userPomme.value * pommecc).toFixed(2);
scorePomme.innerHTML = defaultPomme;
userPomme.addEventListener("input", multiplyPomme);

function multiplyPomme() {
  var one = parseFloat(userPomme.value) || 0;
  var pomme = parseFloat(one * pommecc).toFixed(2);
  scorePomme.innerHTML = pomme;
  totAlim();
} // to display values on update form


var defaultAlim = (Number(defaultBle) + Number(defaultCarotte) + Number(defaultRiz) + Number(defaultPommeDeTerre) + Number(defaultSaladeSaison) + Number(defaultSaladeSs) + Number(defaultTomates) + Number(defaultTomatesFRss) + Number(defaultBoeuf) + Number(defaultVeau) + Number(defaultLaitDeVache) + Number(defaultPoulet) + Number(defaultOeufs) + Number(defaultAgneau) + Number(defaultTruite) + Number(defaultCrevette) + Number(defaultPecheeuro) + Number(defaultPecheTropico) + Number(defaultPomme)).toFixed(2);
totalAlimBox.innerHTML = defaultAlim; // category vetement

var totalVetement = document.getElementById('totalVetements');

function totVetements() {
  var numberChemiseCoton = Number(scoreChemiseCoton.textContent);
  var sum = numberChemiseCoton;
  totalAutre.innerText = sum.toFixed(2);
  total();
} // field chemise coton


var userChemisecoton = document.getElementById('userChemisecoton');
var chemisecotoncc = 11;
var scoreChemisecoton = document.getElementById('scoreChemisecoton');
var defaultChemiseCoton = (userChemisecoton.value * chemisecotoncc).toFixed(2);
scoreChemisecoton.innerHTML = defaultChemiseCoton;
userChemisecoton.addEventListener("input", multiplyChemiseCoton);

function multiplyChemiseCoton() {
  var one = parseFloat(userChemisecoton.value) || 0;
  var cc = parseFloat(one * chemisecotoncc).toFixed(2);
  scoreChemisecoton.innerHTML = cc;
  totVetements();
} // category autre


var totalAutre = document.getElementById('totalAutre');

function totAutre() {
  var numberAspirateur = Number(scoreAspirateur.textContent);
  var numberCongelateur = Number(scoreCongelateur.textContent);
  var numberRefrigerateur = Number(scoreRefrigerateur.textContent);
  var numberFourelec = Number(scoreFourelec.textContent);
  var numberLavelinge = Number(scoreLavelinge.textContent);
  var numberMicroonde = Number(scoreMicroonde.textContent);
  var numberSmartphone = Number(scoreSmartphone.textContent);
  var numberOrdinateur = Number(scoreOrdinateur.textContent);
  var numberVelo = Number(scoreVelo.textContent);
  var numberVeloelec = Number(scoreVeloelectrique.textContent);
  var numberAutofr = Number(scoreAutofr.textContent);
  var numberAutofrelec = Number(scoreAutofrelec.textContent);
  var numberJeanmonde = Number(scoreJeanmonde.textContent);
  var numberJeanfr = Number(scoreJeanfr.textContent);
  var numberAutoasie = Number(scoreAutoasie.textContent);
  var numberAutoasieelec = Number(scoreAutoasieelec.textContent);
  var numberAppartementneuf = Number(scoreAppartementneuf.textContent);
  var sum = numberAspirateur + numberCongelateur + numberRefrigerateur + numberFourelec + numberLavelinge + numberMicroonde + numberSmartphone + numberOrdinateur + numberAutofr + numberVelo + numberVeloelec + numberAutofrelec + numberJeanmonde + numberJeanfr + numberAppartementneuf + numberAutoasie + numberAutoasieelec;
  totalAutre.innerText = sum.toFixed(2);
  total();
} // field aspi


var userAspirateur = document.getElementById('userAspirateur');
var aspirateurcc = 52;
var scoreAspirateur = document.getElementById('scoreAspirateur');
var defaultAspirateur = (userAspirateur.value * aspirateurcc).toFixed(2);
scoreAspirateur.innerHTML = defaultAspirateur;
userAspirateur.addEventListener("input", multiplyAspirateur);

function multiplyAspirateur() {
  var one = parseFloat(userAspirateur.value) || 0;
  var cc = parseFloat(one * aspirateurcc).toFixed(2);
  scoreAspirateur.innerHTML = cc;
  totAutre();
} // field congélateur


var userCongelateur = document.getElementById('userCongelateur');
var congelateurcc = 415;
var scoreCongelateur = document.getElementById('scoreCongelateur');
var defaultCongelateur = (userCongelateur.value * congelateurcc).toFixed(2);
scoreCongelateur.innerHTML = defaultCongelateur;
userCongelateur.addEventListener("input", multiplyCongelateur);

function multiplyCongelateur() {
  var one = parseFloat(userCongelateur.value) || 0;
  var cc = parseFloat(one * congelateurcc).toFixed(2);
  scoreCongelateur.innerHTML = cc;
  totAutre();
} // field refrigerateur 250 l


var userRefrigerateur = document.getElementById('userRefrigerateur');
var refrigerateurcc = 300;
var scoreRefrigerateur = document.getElementById('scoreRefrigerateur');
var defaultRefrigerateur = (userRefrigerateur.value * refrigerateurcc).toFixed(2);
scoreRefrigerateur.innerHTML = defaultRefrigerateur;
userRefrigerateur.addEventListener("input", multiplyRefrigerateur);

function multiplyRefrigerateur() {
  var one = parseFloat(userRefrigerateur.value) || 0;
  var cc = parseFloat(one * refrigerateurcc).toFixed(2);
  scoreRefrigerateur.innerHTML = cc;
  totAutre();
} // field four electrique


var userFourelec = document.getElementById('userFourelec');
var foureleccc = 217;
var scoreFourelec = document.getElementById('scoreFourelec');
var defaultFourelec = (userFourelec.value * foureleccc).toFixed(2);
scoreFourelec.innerHTML = defaultFourelec;
userFourelec.addEventListener("input", multiplyFourelec);

function multiplyFourelec() {
  var one = parseFloat(userFourelec.value) || 0;
  var cc = parseFloat(one * foureleccc).toFixed(2);
  scoreFourelec.innerHTML = cc;
  totAutre();
} // field lave linge


var userLavelinge = document.getElementById('userLavelinge');
var lavelingecc = 315;
var scoreLavelinge = document.getElementById('scoreLavelinge');
var defaultLavelinge = (userLavelinge.value * lavelingecc).toFixed(2);
scoreLavelinge.innerHTML = defaultLavelinge;
userLavelinge.addEventListener("input", multiplyLavelinge);

function multiplyLavelinge() {
  var one = parseFloat(userLavelinge.value) || 0;
  var cc = parseFloat(one * lavelingecc).toFixed(2);
  scoreLavelinge.innerHTML = cc;
  totAutre();
} // field micro-onde


var userMicroonde = document.getElementById('userMicroonde');
var microondecc = 100;
var scoreMicroonde = document.getElementById('scoreMicroonde');
var defaultMicroonde = (userMicroonde.value * microondecc).toFixed(2);
scoreMicroonde.innerHTML = defaultMicroonde;
userMicroonde.addEventListener("input", multiplyMicroonde);

function multiplyMicroonde() {
  var one = parseFloat(userMicroonde.value) || 0;
  var cc = parseFloat(one * microondecc).toFixed(2);
  scoreMicroonde.innerHTML = cc;
  totAutre();
} // field smartphone


var userSmartphone = document.getElementById('userSmartphone');
var smartphonecc = 15;
var scoreSmartphone = document.getElementById('scoreSmartphone');
var defaultSmartphone = (userSmartphone.value * smartphonecc).toFixed(2);
scoreSmartphone.innerHTML = defaultSmartphone;
userSmartphone.addEventListener("input", multiplySmartphone);

function multiplySmartphone() {
  var one = parseFloat(userSmartphone.value) || 0;
  var cc = parseFloat(one * smartphonecc).toFixed(2);
  scoreSmartphone.innerHTML = cc;
  totAutre();
} // field ordinateur


var userOrdinateur = document.getElementById('userOrdinateur');
var ordinateurcc = 150;
var scoreOrdinateur = document.getElementById('scoreOrdinateur');
var defaultOrdinateur = (userOrdinateur.value * ordinateurcc).toFixed(2);
scoreOrdinateur.innerHTML = defaultOrdinateur;
userOrdinateur.addEventListener("input", multiplyOrdinateur);

function multiplyOrdinateur() {
  var one = parseFloat(userOrdinateur.value) || 0;
  var cc = parseFloat(one * ordinateurcc).toFixed(2);
  scoreOrdinateur.innerHTML = cc;
  totAutre();
} // field velo


var userVelo = document.getElementById('userVelo');
var velocc = 60;
var scoreVelo = document.getElementById('scoreVelo');
var defaultVelo = (userVelo.value * velocc).toFixed(2);
scoreVelo.innerHTML = defaultVelo;
userVelo.addEventListener("input", multiplyVelo);

function multiplyVelo() {
  var one = parseFloat(userVelo.value) || 0;
  var cc = parseFloat(one * velocc).toFixed(2);
  scoreVelo.innerHTML = cc;
  totAutre();
} // field velo éléctrique


var userVeloelectrique = document.getElementById('userVeloelectrique');
var veloelectriquecc = 160;
var scoreVeloelectrique = document.getElementById('scoreVeloelectrique');
var defaultVeloelectrique = (userVeloelectrique.value * veloelectriquecc).toFixed(2);
scoreVeloelectrique.innerHTML = defaultVeloelectrique;
userVeloelectrique.addEventListener("input", multiplyVeloelec);

function multiplyVeloelec() {
  var one = parseFloat(userVeloelectrique.value) || 0;
  var cc = parseFloat(one * veloelectriquecc).toFixed(2);
  scoreVeloelectrique.innerHTML = cc;
  totAutre();
} // field auto fr


var userAutofr = document.getElementById('userAutofr');
var autofrcc = 5.5;
var scoreAutofr = document.getElementById('scoreAutofr');
var defaultAutofr = (userAutofr.value * autofrcc).toFixed(2);
scoreAutofr.innerHTML = defaultAutofr;
userAutofr.addEventListener("input", multiplyAutofr);

function multiplyAutofr() {
  var one = parseFloat(userAutofr.value) || 0;
  var cc = parseFloat(one * autofrcc).toFixed(2);
  scoreAutofr.innerHTML = cc;
  totAutre();
} // field auto fr elec


var userAutofrelec = document.getElementById('userAutofrelec');
var autofreleccc = 7.6;
var scoreAutofrelec = document.getElementById('scoreAutofrelec');
var defaultAutofrelec = (userAutofrelec.value * autofreleccc).toFixed(2);
scoreAutofrelec.innerHTML = defaultAutofrelec;
userAutofrelec.addEventListener("input", multiplyAutofrelec);

function multiplyAutofrelec() {
  var one = parseFloat(userAutofrelec.value) || 0;
  var cc = parseFloat(one * autofreleccc).toFixed(2);
  scoreAutofrelec.innerHTML = cc;
  totAutre();
} // field jean monde


var userJeanmonde = document.getElementById('userJeanmonde');
var jeanmondecc = 23;
var scoreJeanmonde = document.getElementById('scoreJeanmonde');
var defaultJeanmonde = (userJeanmonde.value * jeanmondecc).toFixed(2);
scoreJeanmonde.innerHTML = defaultJeanmonde;
userJeanmonde.addEventListener("input", multiplyJeanmonde);

function multiplyJeanmonde() {
  var one = parseFloat(userJeanmonde.value) || 0;
  var cc = parseFloat(one * jeanmondecc).toFixed(2);
  scoreJeanmonde.innerHTML = cc;
  totAutre();
} // field jean fr


var userJeanfr = document.getElementById('userJeanfr');
var jeanfrcc = 15;
var scoreJeanfr = document.getElementById('scoreJeanfr');
var defaultJeanfr = (userJeanfr.value * jeanfrcc).toFixed(2);
scoreJeanfr.innerHTML = defaultJeanfr;
userJeanfr.addEventListener("input", multiplyJeanfr);

function multiplyJeanfr() {
  var one = parseFloat(userJeanfr.value) || 0;
  var cc = parseFloat(one * jeanfrcc).toFixed(2);
  scoreJeanfr.innerHTML = cc;
  totAutre();
} // field auto asie


var userAutoasie = document.getElementById('userAutoasie');
var autoasiecc = 11;
var scoreAutoasie = document.getElementById('scoreAutoasie');
var defaultAutoasie = (userAutoasie.value * autoasiecc).toFixed(2);
scoreAutoasie.innerHTML = defaultAutoasie;
userAutoasie.addEventListener("input", multiplyAutoasie);

function multiplyAutoasie() {
  var one = parseFloat(userAutoasie.value) || 0;
  var cc = parseFloat(one * autoasiecc).toFixed(2);
  scoreAutoasie.innerHTML = cc;
  totAutre();
} // field auto asie electrique


var userAutoasieelec = document.getElementById('userAutoasieelec');
var autoasieelec = 15;
var scoreAutoasieelec = document.getElementById('scoreAutoasieelec');
var defaultAutoasieelec = (userAutoasieelec.value * autoasieelec).toFixed(2);
scoreAutoasieelec.innerHTML = defaultAutoasieelec;
userAutoasieelec.addEventListener("input", multiplyAutoasieelec);

function multiplyAutoasieelec() {
  var one = parseFloat(userAutoasieelec.value) || 0;
  var cc = parseFloat(one * autoasieelec).toFixed(2);
  scoreAutoasieelec.innerHTML = cc;
  totAutre();
} // field appartement neuf


var userAppartementneuf = document.getElementById('userAppartementneuf');
var appartementneufcc = 500;
var scoreAppartementneuf = document.getElementById('scoreAppartementneuf');
var defaultAppartementneuf = (userAppartementneuf.value * appartementneufcc).toFixed(2);
scoreAppartementneuf.innerHTML = defaultAppartementneuf;
userAppartementneuf.addEventListener("input", multiplyAppartementneuf);

function multiplyAppartementneuf() {
  var one = parseFloat(userAppartementneuf.value) || 0;
  var cc = parseFloat(one * appartementneufcc).toFixed(2);
  scoreAppartementneuf.innerHTML = cc;
  totAutre();
}

var defaultAutre = (Number(defaultAspirateur) + Number(defaultCongelateur) + Number(defaultRefrigerateur) + Number(defaultFourelec) + Number(defaultLavelinge) + Number(defaultMicroonde) + Number(defaultSmartphone) + Number(defaultOrdinateur) + Number(defaultVelo) + Number(defaultVeloelectrique) + Number(defaultAutofr) + Number(defaultAutofrelec) + Number(defaultJeanmonde) + Number(defaultJeanfr) + Number(defaultAutoasie) + Number(defaultAutoasieelec) + Number(defaultAppartementneuf)).toFixed(2);
totalAutre.innerHTML = defaultAutre; // category valeur additionnelle

var totalValeur = document.getElementById('totalValeur');

function totValeur() {
  var numberValeur1 = Number(scoreValeur1.textContent);
  var numberValeur2 = Number(scoreValeur2.textContent);
  var sum = numberValeur1 + numberValeur2;
  totalValeur.innerText = sum.toFixed(2);
  total();
} // field valeur 1


var userValeur1 = document.getElementById('userValeur1');
var valeur1cc = 1;
var scoreValeur1 = document.getElementById('scoreValeur1');
var defaultValeur1 = (userValeur1.value * valeur1cc).toFixed(2);
scoreValeur1.innerHTML = defaultValeur1;
userValeur1.addEventListener("input", multiplyValeur1);

function multiplyValeur1() {
  var one = parseFloat(userValeur1.value) || 0;
  var cc = parseFloat(one * valeur1cc).toFixed(2);
  scoreValeur1.innerHTML = cc;
  totValeur();
} // field valeur 2


var userValeur2 = document.getElementById('userValeur2');
var valeur2cc = 1;
var scoreValeur2 = document.getElementById('scoreValeur2');
var defaultValeur2 = (userValeur2.value * valeur2cc).toFixed(2);
scoreValeur2.innerHTML = defaultValeur2;
userValeur2.addEventListener("input", multiplyValeur2);

function multiplyValeur2() {
  var one = parseFloat(userValeur2.value) || 0;
  var cc = parseFloat(one * valeur2cc).toFixed(2);
  scoreValeur2.innerHTML = cc;
  totValeur();
}

var defaultValeur = (Number(defaultValeur1) + Number(defaultValeur2)).toFixed(2);
totalValeur.innerHTML = defaultValeur;
totalBilan.innerHTML = (Number(defaultVoiture) + Number(defaultTransport) + Number(defaultEnergie) + Number(defaultAlim) + Number(defaultAutre) + Number(defaultValeur)).toFixed(2);
var defaultTotPerson = (totalBilan.textContent / userPerson.value).toFixed(2);
totalPerson.innerHTML = defaultTotPerson;

/***/ })

/******/ });
//# sourceMappingURL=calculations-d370fb4a35a9431d8f91.js.map