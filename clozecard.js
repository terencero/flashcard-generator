var inquirer = require('inquirer');
var clozeCards = [];
var constructAClozeCard = function(){
function ClozeFlashCard(category, partialText, answer){
	this.category = category;
	this.partialText = partialText;
	this.answer = answer;
}
// Method to combine the cloze-deleted and partial text to reveal answer
ClozeFlashCard.prototype.combine = function(answer, partialText) {
	console.log('The answer is: ' + this.answer + this.partialText);
};
// Method to reveal just the partial text
ClozeFlashCard.prototype.partial = function(){
	console.log('Cloze partial text: '+ this.partialText);
};
// Method to reveal just the cloze deleted portion
ClozeFlashCard.prototype.clozedeleted = function(){
	console.log('Cloze-deleted text is: ' + this.answer);
};

// new cloze-deleted flash cards constructed
var clozeFlashCard1 = new ClozeFlashCard('Philosophy', '...is whom the Socratic Method is named after.', 'Socrates');
var clozeFlashCard2 = new ClozeFlashCard('Music', '...was a famous composer who composed his 9th Symphony when he became deaf in his later years.', 'Beethoven');

// push cloze flash cards to an array to retrieve later
clozeCards.push(clozeFlashCard1, clozeFlashCard2);

};

module.exports = constructAClozeCard;