var Board = require('./board');

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
