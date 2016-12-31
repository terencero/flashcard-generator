var inquirer = require('inquirer');

var fs = require('fs');

var cardResults = [];


function BasicFlashCard(title, question, answer){
	this.title = title;
	this.question = question;
	this.answer = answer;

}
BasicFlashCard.prototype.printCard = function(){
	console.log('Question: ' + this.question + '\nAnswer: ' + this.answer);
};

BasicFlashCard.prototype.askAQuestion = function(){
	console.log('Question: ' + this.question);
};

BasicFlashCard.prototype.revealAnswer = function(){
	console.log('Answer: ' + this.answer);
};

// var createBasicFlashCard = function() {

	inquirer.prompt([
		{	
			name: 'title',
			message: 'Please enter a title for your flash card.'
		},

		{
			name: 'userQuestion',
			message: 'Please enter the question for your flash card.'
		},

		{
			name: 'userAnswer',
			message: 'Please enter the answer for your flash card.'
		}

	]).then(function(response){
		var newBasicFlashCard = new BasicFlashCard(response.title, response.userQuestion, response.userAnswer);

		// newBasicFlashCard.printCard();
		cardResults.push(newBasicFlashCard.title, newBasicFlashCard.question, newBasicFlashCard.answer);
		fs.appendFile('log.txt', '-----------------Basic Flash Card--------------------' + '\n\n' + cardResults + '\n\n');
		newBasicFlashCard.askAQuestion();
	});
// };
// createBasicFlashCard();


