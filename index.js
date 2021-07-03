const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamprofile.html");

let team = [];

function init() {
    inquirer.prompt({
        type: 'list',
        message: 'What type of employee would you like to add?',
        name: 'switch',
        choices: ['Manager', 'Engineer', 'Intern', 'Exit']
    }) .then(answer =>{
        if(answer.switch === 'Manager' ){
            askManager()
        } else if(answer.switch === 'Engineer'){
            askEngineer()
        } else if(answer.switch === 'Intern'){
            askIntern()
        } else{
            buildTeam()
        }
    })

}
const managerQues = [
    {
        type: 'input',
        message: 'What is the managers name',
        name: 'manName',
    },
    {
        type: 'input',
        message: 'What is the managers email',
        name: 'manEmail',
    },
    {
        type: 'input',
        message: 'What is the managers ID',
        name: 'manID',
    },
    {
        type: 'input',
        message: 'What is the managers office number',
        name: 'manOffNum',
    }
];
const engineerQues = [
    {
        type: 'input',
        message: 'What is the engineer name',
        name: 'engName',
    },
    {
        type: 'input',
        message: 'What is the engineer email',
        name: 'engEmail',
    },
    {
        type: 'input',
        message: 'What is the engineer ID',
        name: 'engID',
    },
    {
        type: 'input',
        message: 'What is the engineer Github',
        name: 'engGitHub',
    }
];
const internQues = [
    {
        type: 'input',
        message: 'What is the intern name',
        name: 'intName',
    },
    {
        type: 'input',
        message: 'What is the intern email',
        name: 'intEmail',
    },
    {
        type: 'input',
        message: 'What is the intern ID',
        name: 'intID',
    },
    {
        type: 'input',
        message: 'What is the interns school',
        name: 'intSchool',
    }
];
function askManager(){
    inquirer.prompt(managerQues).then(answers =>{
         const manager = new Manager(answers.manName, answers.manID, answers.manEmail, answers.manOffNum);
        team.push(manager)
        console.log(team);
        init();
    })
}

function askEngineer(){
    inquirer.prompt(engineerQues).then(answers =>{
         const engineer = new Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGitHub);
        team.push(engineer)
        console.log(team);
        init();
    })
}
function askIntern(){
    inquirer.prompt(internQues).then(answers =>{
         const intern = new Intern (answers.intName, answers.intID, answers.intEmail, answers.intSchool);
        team.push(intern)
        console.log(team);
        init();
    })
}
//do this for the other guys 
//loop over these dudes with get role method to fig out what ee they are (askRob)
//dont leave dangling problems

function buildTeam(){
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, renderHTML(team), "utf8")    
}

function renderHTML(team){
    console.log(team);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        
        <title>Team-Profile-Generator</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid .bg-primary text-center">
            <div class="container">
              <h1 class="display-4">Corporate Office Roster</h1>
            </div>
          </div>
         
            
    </body>
    </html>`
    
}
init()