const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const createLease = require('./createLease');
const input = [
    {
      type: "input",
      name: "subj",
      message: "Please enter subject property address",
      default: '3740 Jay St, Wheat Ridge, CO 80033'
    },
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
      //note for validation you can use either npm packages e.g. joi or your own function (this is optional)
      {
        type: "input",
        name: "parties",
        message: "Who are the lessees?",
        default: "John Smith",
      },
      {
        type: "input",
        name: "dates",
        message: "What are the dates for the lease?",
        default: '09/01/2020 - 08/31/2021'
      },
      {
        type: "input",
        name: "rent",
        message: "How much is the monthly rent?",
        default: "1000"
      },
       
]

function makeLease(name, data) {
  return fs.writeFileSync(path.join(process.cwd(), name), data);
};

function launchGenerator() {
  inquirer.prompt(input).then(r => makeLease('leaseName.md', createLease(r)))
};