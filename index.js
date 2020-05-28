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
        name: "parties",
        message: "Who are the lessees?",
        default: "John Smith",
     },
     {
        type: "input",
        name: "bdate",
        message: "What is the first date of the lease",
        default: '09/01/2020'
     },
     {
        type: "input",
        name: "edate",
        message: "What is the last date of the lease",
        default: '08/31/2021'
     },
     {
        type: "input",
        name: "rent",
        message: "How much is the monthly rent?",
        default: "1000"
     },
     {
      type: "input",
      name: "landlordAddress",
      message: "Please enter landlord's mailing address",
      default: '3740 Jay St, Wheat Ridge, CO 80033'
    },
       
]

function makeLease(name, data) {
  return fs.writeFileSync(path.join(process.cwd(), name), data);
};

function launchGenerator() {
  inquirer.prompt(input).then(r => makeLease('leaseName.md', createLease(r)))
};