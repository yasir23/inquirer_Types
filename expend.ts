import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type:'expend',
            name:'car',
            message:'Which is better?',
            choices:[{
                key:'a',
                value:'lamborghini',
            },
            {
                key:'c',
                value:'buggati',
            },
          ],
        },
    ])

        .then(answers =>{
            console.info('Answers:', answers.car );
        });