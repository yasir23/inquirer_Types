import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type:'list',
            name:'car',
            message:'which car is better',
            choices:['lamborghini', 'buggati', 'ferrari']
        }
    ])

        .then(anwers => {
            console.info('Answer:', anwers.car);
        })