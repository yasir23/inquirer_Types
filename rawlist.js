import inquirer from "inquirer";
inquirer
    .prompt([{
        type: 'rawlist',
        name: 'bikes',
        message: 'which is the best bike',
        choices: ['hayabusa', 'ducati', 'motor']
    }])
    .then(answers => {
    console.info('Answer:', answers.bikes);
});
