function ClozeCard(text, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze);
  }
  this.cloze = cloze;
  this.text = text;
}

ClozeCard.prototype = {
  partial: function () {
    var regString = `\\b(${this.cloze})\\b`;
    var reg = new RegExp(regString, 'g');
    if(this.text.match(reg)){
      let myStr = this.text.replace(this.cloze, '...')
      return myStr
      console.log(myStr);
    } else {
      return `Sorry, '${this.cloze}' doesnt appear in '${this.text}'`;
    }
  },
  fullText: function () {
    var regString = `\\b(${this.cloze})\\b`;
    var reg = new RegExp(regString, 'g');
    if(this.text.match(reg)){
      return this.text;
    } else {
      return `Sorry, '${this.cloze}' doesnt appear in '${this.text}'`;
    }
  }
};

module.exports = {
  ClozeCard
};