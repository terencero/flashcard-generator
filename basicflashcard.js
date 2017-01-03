var inquirer = require('inquirer');

var fs = require('fs');

var cardResults = [];

var loop = 0;


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

var defaultPhilosophyFlashCard = new BasicFlashCard('philosophy', 'What was the name of the school Aristotle founded?', 'Lyceum');

var defaultMusicFlashCard = new BasicFlashCard('music', 'Which genre of music is the pianist, Bill Evans, most famous for?', 'Jazz');

cardResults.push(defaultPhilosophyFlashCard, defaultMusicFlashCard);

inquirer.prompt([
	{	
		type: 'list',
		name: 'choice',
		message: 'Would you like to review or create a basic flash card?',
		choices: ['review', 'create']
	}
]).then(function(user){
	if(user.choice === 'review'){
		reviewFlashCards(loop);		
	} else if(user.choice === 'create'){
		createObject();
	}
});

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
	// createObject();

	var reviewFlashCards = function(){
		inquirer.prompt([
			{	
				type: 'list',
				message: 'Choose a category.',
				choices: ['philosophy', 'music'],
				name: 'userChoice'
			},
		]).then(function(response){
			console.log(cardResults[i].response.userChoice);
		});		
	};
};


module.exports = constructAFlashCard;


