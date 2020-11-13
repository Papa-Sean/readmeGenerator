const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const api = require('.api.js');
const generateMarkdown = require('.generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: "GitHub Username?",
        name: 'username',
        default: 'Papa-Sean',
        validate: function (answer){
            if (answer.length < 1){
                return console.log("GitHub username required");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Name your GitHub repo",
        name: 'repo',
        default: 'readmeGenerator',
        validate: function (answer){
            if (answer.length <1){
                return console.log("Valid GitHub repo required");
            }
            return true;
        }

    },
    {
        type: 'input',
        message: "Project Title",
        name: 'title',
        default: 'Project Title',
        validate: function (answer){
            if(answer.length < 1){
                return console.log("Project Title Required");
            }
            return true;
        }

    },
    {
        type: 'input',
        message: "Project Description",
        name: 'description',
        default: 'Project Description',
        validate: function (answer){
            if (answer.length <1){
                return console.log("Project description required");
            }
            return true;
        }
    },
    {
        type:'input',
        message: "Installation Instructions",
        name: 'installation'


    },
    {
        type:'input',
        message:"Project Instructions / Examples of project in use",
        name: 'usage'
    },
    {
        type: 'input',
        message: "How can developer contribute?",
        name:'contributing'
    },
    {
        type: 'input',
        message: "Tests written for your app / examples of how to run them",
        name: 'tests'
    },
    {
        type: 'list',
        message:"Choose a license",
        choices: ['MSU','Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name:'license'
    }
];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, err => {
        if(err){
            return console.log(err);
        }
        console.log("Success! README.me generated!")
    });
}

const writeFileAsync = util.promisify(writeToFile);

async function init(){
    try{
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you, fetching GitHub data next...");

        const userInfo = await api.getUser(userResponses);
        console.log("GitHub user info: ", userInfo);

        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        await writeFileAsync('ExampleREADMES.md', markdown);

    }catch (error){
        console.log(error);
    }
};

init()