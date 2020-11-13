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
        default: 'papa-sean-dev',
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
        
    }
]