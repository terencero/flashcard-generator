// require basiclashcard.js to access Basic Flash Card constructor
var basicflashcard = require('./basicflashcard.js');
// require clozecard.js to access Cloze-deleted Card constructor
var clozecard = require('./clozecard.js');
// inquirer to prompt user to choose basic or cloze
var inquirer = require('inquirer');


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

