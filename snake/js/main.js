var View = require("./view.js");
var Board = require("./board.js");

$(function () {
  var rootEl = $('.snake');
  var board = new Board();
  new View(board,rootEl);
});
