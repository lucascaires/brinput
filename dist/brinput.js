(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * brinput.js
 * @version: v1.0.3
 * @author: Lucas Caires
 *
 * Plugin utilizado em projetos pessoais para adicionar máscaras em campos de formulário
 */
var brInput =
/*#__PURE__*/
function () {
  //Constructor
  function brInput(args) {
    _classCallCheck(this, brInput);

    this.default = {
      telefone: '[br-input=telefone]',
      cpf: '[br-input=cpf]',
      cnpj: '[br-input=cnpj]',
      cep: '[br-input=cep]'
    };
    this.config = args || {};
    this.config.inputs = args && args.inputs || this.default;
    this.init();
  } //Init


  _createClass(brInput, [{
    key: "init",
    value: function init() {
      var _this = this;

      var inputs = this.config.inputs;
      Object.keys(inputs).forEach(function (key) {
        var nodes = document.querySelectorAll(inputs[key]);

        if (nodes.length > 1) {
          nodes.forEach(function (node) {
            return _this.listen(key, node);
          });
        } else {
          _this.listen(key, nodes[0]);
        }
      });
    } //Listen keyup

  }, {
    key: "listen",
    value: function listen(key, node) {
      var _this2 = this;

      node.addEventListener('keyup', function () {
        _this2.mask(key, node);
      });
    } //Set mask

  }, {
    key: "mask",
    value: function mask(key, node) {
      if ("telefone" === key) this.telefoneMask(node);
      if ("cep" === key) this.cepMask(node);
      if ("cpf" === key) this.cpfMask(node);
      if ("cnpj" === key) this.cnpjMask(node);
    } //Set the max length of the input

  }, {
    key: "setMaxlen",
    value: function setMaxlen(el, size) {
      el.setAttribute('maxlength', size);
    } //Set mask for brazilian phone: (00) 0000-0000

  }, {
    key: "telefoneMask",
    value: function telefoneMask(k) {
      this.setMaxlen(k, 15);
      var a = k.value;
      a = a.replace(/\D/g, "");
      a = a.replace(/^(\d{2})(\d)/g, "($1) $2");
      if (a.length > 12) a = a.replace(/(\d)(\d{4})$/, "$1-$2");
      k.value = a;
    } //Mask for brazilian zip-code (CEP): 000000-000

  }, {
    key: "cepMask",
    value: function cepMask(k) {
      this.setMaxlen(k, 9);
      var a = k.value;
      a = a.replace(/\D/g, "");
      a = a.replace(/^(\d{5})(\d)/g, "$1-$2");
      k.value = a;
    } //Mask for brazilian social security number: 000.000.000-00

  }, {
    key: "cpfMask",
    value: function cpfMask(k) {
      this.setMaxlen(k, 14);
      var a = k.value;
      a = a.replace(/\D/g, "");
      a = a.replace(/(\d{3})(\d)/, "$1.$2");
      a = a.replace(/(\d{3})(\d)/, "$1.$2");
      a = a.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      k.value = a;
    } //Mask for brazilian national registry of companies: 00.000.000/0000-00

  }, {
    key: "cnpjMask",
    value: function cnpjMask(k) {
      this.setMaxlen(k, 18);
      var a = k.value;
      a = a.replace(/\D/g, "");
      a = a.replace(/(\d{2})(\d)/, "$1.$2");
      a = a.replace(/(\d{3})(\d)/, "$1.$2");
      a = a.replace(/(\d{3})(\d)/, "$1/$2");
      a = a.replace(/(\d{4})(\d)/, "$1-$2");
      k.value = a;
    }
  }]);

  return brInput;
}();

exports.default = brInput;

/***/ })
/******/ ]);
});