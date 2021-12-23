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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hide_fields.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hide_fields.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/hide_fields.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// bouton + -  voiture
var buttonVoiture = document.getElementById("hideShowVoiture");
var arrayVoiture = Array.from(document.getElementsByClassName("voiture"));
var voitureplusmoins = document.getElementById("voitureplusmoins");
buttonVoiture.addEventListener("click", function (event) {
  arrayVoiture.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      voitureplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      voitureplusmoins.innerHTML = "-";
    }
  });
}); // bouton + - transport

var buttonTransport = document.getElementById("hideShowTransport");
var arrayTransport = Array.from(document.getElementsByClassName("transport"));
var transportplusmoins = document.getElementById("transportplusmoins");
buttonTransport.addEventListener("click", function (event) {
  arrayTransport.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      transportplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      transportplusmoins.innerHTML = "-";
    }
  });
}); // bouton + - energie

var buttonEnergie = document.getElementById("hideShowEnergie");
var arrayEnergie = Array.from(document.getElementsByClassName("energie"));
var energieplusmoins = document.getElementById("energieplusmoins");
buttonEnergie.addEventListener("click", function (event) {
  arrayEnergie.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      energieplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      energieplusmoins.innerHTML = "-";
    }
  });
}); // bouton + - alimentation

var buttonBle = document.getElementById("hideShowBle");
var arrayAlim = Array.from(document.getElementsByClassName("alim"));
var alimplusmoins = document.getElementById("alimplusmoins");
buttonBle.addEventListener("click", function (event) {
  arrayAlim.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      alimplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      alimplusmoins.innerHTML = "-";
    }
  });
}); // bouton + - alimentation

var buttonVetement = document.getElementById("hideShowVetements");
var arrayVetement = Array.from(document.getElementsByClassName("vetement"));
var vetementplusmoins = document.getElementById("vetementplusmoins");
buttonVetement.addEventListener("click", function (event) {
  arrayVetement.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      vetementplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      vetementplusmoins.innerHTML = "-";
    }
  });
}); // bouton + - autre

var buttonAutre = document.getElementById("hideShowAutre");
var arrayAutre = Array.from(document.getElementsByClassName("autre"));
var autreplusmoins = document.getElementById("autreplusmoins");
buttonAutre.addEventListener("click", function (event) {
  arrayAutre.forEach(function (element) {
    if (element.style.display === "block") {
      element.style.display = "none";
      autreplusmoins.innerHTML = "+";
    } else {
      element.style.display = "block";
      autreplusmoins.innerHTML = "-";
    }
  });
}); // bouton + - valuers

var buttonValeur = document.getElementById("hideShowValeur");
var arrayValeur = Array.from(document.getElementsByClassName("valeur"));
var valeurplusmoins = document.getElementById("valeurplusmoins");
buttonValeur.addEventListener("click", function (event) {
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

/***/ })

/******/ });
//# sourceMappingURL=hide_fields-fccfd3739f0a3e0a3045.js.map