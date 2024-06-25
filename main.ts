#! /users/bin/env node
// OOP Console -Project 

//first install npm 
//and types 

//install chalk


//STEP : 01 Create Object 
import inquirer from 'inquirer';
import chalk from 'chalk';

//STEP :02 Create class 
class person {
    private _personality: string;
    constructor (){
        this._personality = "Mystery";
    }


//STEP :03 user Input

userInput ( input : string ) {

    //if /else statement 
    if (input.includes ('talk to other about yourself openly')){
        this._personality = "Talk happily";

    }else if (input.includes ('keep your words to yourself ')){
       this._personality = "Talk rudely";

    }
}

//STEP : 04 Return Function

get personality (){
    return this._personality;

}
}

//STEP : 05 Create object
class Main{
    public async Main(){
        //await called out
        const ans = await inquirer.prompt({
            //object create
            type : "list",
            name :"choices",
            message :chalk.yellow('tell your behavior?'),
            choices : [
                '1:Talk to others about my self.',
                '2:keep quiet and do not ask questions.'
            ]
        })

        //STEP : 06 Create a personal class
        let myPerson = new person()

        myPerson.userInput(ans.choices);

        //output response 
        console.log (`you are ${myPerson.personality}`)
    }

}

const myObject = new Main();
myObject.Main();