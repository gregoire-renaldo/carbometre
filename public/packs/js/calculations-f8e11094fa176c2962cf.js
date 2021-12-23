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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/greg/code/carbometre/app/javascript/packs/calculations.js: Identifier 'numberVoitElecMoins' has already been declared (1106:8)\n\n  1104 |     + numberMicroonde + numberSmartphone + numberOrdinateur + numberAutofr\n  1105 |     + numberVelo + numberVeloelec + numberAutofrelec + numberJeanmonde + numberJeanfr + numberAppartementneuf\n> 1106 |   const numberVoitElecMoins = Number(scoreVoitureElecMoins.textContent);\n       |         ^\n  1107 |     + numberAutoasie + numberAutoasieelec \n  1108 |   totalAutre.innerText = sum.toFixed(2);\n  1109 |   total();\n    at Parser._raise (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:754:17)\n    at Parser.raiseWithData (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:747:17)\n    at Parser.raise (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:741:17)\n    at ScopeHandler.checkRedeclarationInScope (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:4813:12)\n    at ScopeHandler.declareName (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:4779:12)\n    at Parser.checkLVal (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:9298:22)\n    at Parser.parseVarId (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11874:10)\n    at Parser.parseVar (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11849:12)\n    at Parser.parseVarStatement (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11661:10)\n    at Parser.parseStatementContent (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11260:21)\n    at Parser.parseStatement (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11193:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11768:25)\n    at Parser.parseBlockBody (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11754:10)\n    at Parser.parseBlock (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11738:10)\n    at Parser.parseFunctionBody (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:10745:24)\n    at Parser.parseFunctionBodyAndFinish (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:10728:10)\n    at /home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11908:12\n    at Parser.withTopicForbiddingContext (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11068:14)\n    at Parser.parseFunction (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11907:10)\n    at Parser.parseFunctionStatement (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11539:17)\n    at Parser.parseStatementContent (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11231:21)\n    at Parser.parseStatement (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11193:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11768:25)\n    at Parser.parseBlockBody (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11754:10)\n    at Parser.parseTopLevel (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:11124:10)\n    at Parser.parse (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:12826:10)\n    at parse (/home/greg/code/carbometre/node_modules/@babel/parser/lib/index.js:12879:38)\n    at parser (/home/greg/code/carbometre/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/greg/code/carbometre/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)");

/***/ })

/******/ });
//# sourceMappingURL=calculations-f8e11094fa176c2962cf.js.map