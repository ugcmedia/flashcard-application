function BasicCard(front, back) {
  if (!(this instanceof BasicCard)) {
    return new BasicCard(front, back);
  }
  this.front = front;
  this.back = back;
}

BasicCard.prototype.getResult = function () {
  console.log(`${this.front} ${this.back}`);
};

module.exports = {
  BasicCard
};