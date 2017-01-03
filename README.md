# flashcard-generator

A flash card tool to help you create and review your trivia.  There are two types of flash cards to choose from: Basic and Cloze-deleted.  You can access the two types by requiring the basic and cloze card js files (see the example below).  Use inquirer to allow a user to choose through node.js.

<code>
// require basicflashcard.js to access Basic Flash Card constructor
var basicflashcard = require('./basicflashcard.js');
// require clozecard.js to access Cloze-deleted Card constructor
var clozecard = require('./clozecard.js');
// inquirer to prompt user to choose basic or cloze
var inquirer = require('inquirer');
</code>

