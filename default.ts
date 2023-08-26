import inquirer from "inquirer";


inquirer
    .prompt([{
        name:'favlaptop',
        message:'what is your favorite laptop?',
        default:'apple'
    }])

   
        .then(answers => {
            console.info('Answer', answers.favlaptop);
        });
  