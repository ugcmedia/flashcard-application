var { BasicCard } = require('./BasicCard');
var { ClozeCard } = require('./ClozeCard');

var firstPresident = BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial());

// George Washington was the first president of the United States

console.log(firstPresidentCloze.fullText());