const inquirer = require('inquirer');
const createLease = require('./createLease')
const input = [
    {
        type: "input",
        name: "GH",
        message: "Please type your GitHub username?",
        default: 'iampopov'
      },
      {
        type: "input",
        name: "fName",
        message: "Please provide the name for a .md file?",
        default: 'README'
      },
      //note for validation you can use either npm packages e.g. joi or your own finction (this is optional)
      {
        type: "input",
        name: "email",
        message: "Please type your email?",
        default: "ivantsar@gmail.com",
        validate: validateEmail
      },
      {
        type: "input",
        name: "URL",
        message: "the URL to your project?",
        default: 'goodReadMe'
      },
      {
        type: "input",
        name: "title",
        message: "Please type your project's name?",
        default: "Good README.md generator"
      },
       {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
        default: 'this is an app I developed so I can automate read me file development'
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "list",
        name: "color",
        message: "What's your favorite color?",
        choices: ["red", "green", "purple", "black", "magenta"]
      },
      {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
        default: "It is an open project and everyone can contribute - please send and email requesting to be added as a contributor!"
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
        default: 'this is an open source app - anyone can contribute'
      }
]