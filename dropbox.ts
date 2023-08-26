import inquirer from "inquirer";

inquirer
    .prompt([{
        type:'checkbox',
        name: 'cars',
        message:'what is your favorite car?',
        choices:[
            'lamborghini', 'lexus','rollsRoyce'
         ],
      },
      {
        type: 'checkbox',
        name: 'bikes',
        message: 'which is your favorite bike?',
        choices: [
            'hayabusa', 'ducati', 'CD-70'
        ],
    },
    {
        type: 'checkbox',
        name: 'country',
        message: 'what is your favorite country?',
        choices: [
            'USA', 'Turkey', 'Dubai'
        ],
    },

    ]
)

    .then(ansers =>{
        console.info('Anwers', ansers.cars.bikes.country);
    })