/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var View = __webpack_require__(1);
	var Board = __webpack_require__(2);
	
	$(function () {
	  var rootEl = $('.snake');
	  var board = new Board();
	  new View(board,rootEl);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Board = __webpack_require__(2);
	
	var View = function (board, $el) {
	  this.$el = $el;
	  this.board = board;
	  this.createGrid();
	};
	
	View.prototype.createGrid = function () {
	  var $box = $('<ul>');
	  this.$el.append($box);
	
	  for (var i = 0; i < 400; i++) {
	    var $square = $('<li>');
	    $box.append($square);
	  }
	};
	
	module.exports = View;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Snake = __webpack_require__(3);
	
	var Board = function() {
	    this.snake = new Snake('E', [[1,0], [0,0]]);
	};
	
	module.exports = Board;


/***/ },
/* 3 */
/***/ function(module, exports) {

	
	var Snake = function(direction, segments) {
	  this.direction = direction;
	  this.segments = segments;
	};
	
	Snake.prototype.move = function() {
	  var moveDirections = {
	    N: [0,1],
	    S: [0,-1],
	    E: [1,0],
	    W: [-1,0]
	  };
	
	  var newSegment = [this.segments[0] + moveDirections[this.direction][0],
	    this.segment[1] + moveDirections[this.direction][1]];
	
	  this.segments.shift(newSegment);
	  this.segments.pop();
	
	};
	
	Snake.prototype.turn = function(newDirection) {
	  this.direction = newDirection;
	};
	
	module.exports = Snake;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map