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
        
    }
]