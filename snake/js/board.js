var Snake = require("./snake");

var Board = function() {
    this.snake = new Snake('E', [[1,0], [0,0]]);
};

module.exports = Board;
