var clozeCards = [];
var constructAClozeCard = function(){
function ClozeFlashCard(category, partialText, answer){
	this.category = category;
	this.partialText = partialText;
	this.answer = answer;
}

ClozeFlashCard.prototype.combine = function(answer, partialText) {
	console.log('The answer is: ' + this.answer + this.partialText);
};

var clozeFlashCard1 = new ClozeFlashCard('Philosophy', '...is whom the Socratic Method is named after.', 'Socrates');
var clozeFlashCard2 = new ClozeFlashCard('Music', '...was a famous composer who composed his 9th Symphony when he became deaf in his later years.', 'Beethoven');

clozeCards.push(clozeFlashCard1, clozeFlashCard2);

clozeFlashCard1.combine();

clozeFlashCard2.combine();

console.log(clozeFlashCard2.category);

};

module.exports = constructAClozeCard;