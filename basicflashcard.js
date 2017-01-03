var inquirer = require('inquirer');

var fs = require('fs');

var cardResults = [];


var constructAFlashCard = function(){

function BasicFlashCard(category, question, answer){
	this.category = category;
	this.question = question;
	this.answer = answer;

}

BasicFlashCard.prototype.printCard = function(){
		console.log('Category: ' + this.category + '\nQuestion: ' + this.question + '\nAnswer: ' + this.answer);
};

BasicFlashCard.prototype.askAQuestion = function(){
		console.log('Question: ' + this.question);
};

BasicFlashCard.prototype.revealAnswer = function(){
		console.log('Answer: ' + this.answer);
};
	var count = 0;
	var createObject = function(){
		
		if(count < 3){
			inquirer.prompt([
			{	
				name: 'category',
				message: 'Please enter a category for your flash card.'
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
			var newBasicFlashCard = new BasicFlashCard(response.category, response.userQuestion, response.userAnswer);

			cardResults.push(newBasicFlashCard);
			
			console.log(cardResults);

			count++;
			createObject();
		});
		} else {
			console.log('Flash cards made.');
		}
	};	
	createObject();
};


module.exports = constructAFlashCard;


