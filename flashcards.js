var basicflashcard = require('./basicflashcard.js');

var clozecard = require('./clozecard.js');

var inquirer = require('inquirer');

var fs = require('fs');








// ---------------------node front end code--------------------------------------------
inquirer.prompt([

	{	
		type: 'list',
		message: 'Choose basic or cloze-deleted flash cards.',
		choices: ['basic', 'cloze-deleted'],
		name: 'choice'
	}

	]).then(function(user){
		if(user.choice === 'basic'){
				basicflashcard();
		} else if(user.choice === 'cloze-deleted'){
			clozecard();
		}
	});

