#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
    return new Promise ((res) =>{
        setTimeout(res,3000);
    })
}

async function Ready(){
    let rainbow = chalkAnimation.rainbow("Welcome! \n Ready to dive into the calculations?");
    await sleep();
    rainbow.stop();
    console.log(chalk.magenta  `                
     _____________________
    |  _________________  |
    | | JO            0. ||
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
   \n `)
}
await Ready();


async function giveAQuestion()
{
  const answers = await inquirer.prompt([

        {
            type:"list",
            name:"operator",
            message:chalk.underline.yellowBright("Select the Operator"),
            choices: (["Addition","Subtraction", "Multiplication", "Division"]),
        },
        {
            type:"input",
            name:"num1",
            message :chalk.green.bold("Enter your number 1:"),
            validate: (input) => {
                if (isNaN(input)) {
                  return "Please enter a valid number";
                }
                return true;
              },
        
        },
        {
            type:"input",
            name:"num2",
            message:chalk.green.bold("Enter your number 2:"),
            validate: (input) => {
                if (isNaN(input)) {
                  return "Please enter a valid number";
                }
                return true;
              },
        
        }
    ]);
    if 
    (answers.operator === "Addition"){
        console.log(chalk.yellow(`Sum of ${answers.num1} + ${answers.num2} is = ${Number(answers.num1) + Number(answers.num2)}`));
    }
    else if    
    (answers.operator === "Subtraction"){
        console.log(chalk.yellow (`Subtraction of  ${answers.num1} - ${answers.num2} is = ${Number(answers.num1) - Number(answers.num2)}`));
    }
    else if    
    (answers.operator === "Multiplication"){
        console.log(chalk.yellow(`Multiplication of ${answers.num1} * ${answers.num2}  is = ${Number(answers.num1) * Number(answers.num2)}`));
    }
    else if    
    (answers.operator === "Division"){
        console.log(chalk.yellow(`Division of ${answers.num1} / ${answers.num2} is = ${Number(answers.num1) / Number(answers.num2)}\n`));
    }

};

async function startAgain(){
    do{
        await giveAQuestion();
        var again =await
        inquirer.prompt({
            type:"input",
            name:"restart",
            message :"Do you want to continue? press y or n: "
        })
    }while(again.restart == "Y" || again.restart == "yes" || again.restart == "YES" || again.restart == "y")

}   
startAgain();




