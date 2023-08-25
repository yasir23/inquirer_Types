import inquirer from "inquirer";
inquirer.prompt([
    {
        type: 'input',
        name: 'faveraptile',
        message: 'what is your favorite reptile?'
    },
])
    .then((answers) => {
    console.info('Answer:', answers.faveraptile);
});
