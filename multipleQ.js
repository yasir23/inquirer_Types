import inquirer from "inquirer";
inquirer
    .prompt([
    {
        name: 'favcar',
        message: 'what is your favorite car?',
    },
    {
        name: 'favcolor',
        message: 'what is your favorite color?'
    }
])
    .then(anwers => {
    console.info('Answer:', anwers);
});
