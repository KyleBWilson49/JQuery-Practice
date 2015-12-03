
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
