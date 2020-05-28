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
      name: "landlordName",
      message: "Please enter landlord's name",
      default: 'Ivan Popov'
    },
     {
      type: "input",
      name: "landlordAddress",
      message: "Please enter landlord's mailing address",
      default: '3740 Jay St, Wheat Ridge, CO 80033'
    },
    {
      type: "input",
      name: "adults",
      message: "How many adults are going to occupy this property?",
      default: '1'
    },
    {
      type: "input",
      name: "kids",
      message: "How many kids are going to occupy this property?",
      default: '1'
    },
    {
      type: "input",
      name: "kidss",
      message: "Names of all occupants not signing this lease:",
      default: 'none'
    },
    {
      type: "input",
      name: "emName",
      message: "What is the emergency contact name?",
      default: 'John Smith'
    },
    {
      type: "input",
      name: "emPhone",
      message: "What is the emergency contact phone?",
      default: 'none'
    },
    {
      type: "confirm",
      name: "cosigner",
      message: "Is there a cosigner?",
      default: false
    },
    {
      when: function (res) {
        return res.cosigner
      },
      type: 'input',
      name: 'cosignerName',
      message: "What is the cosigner's name?",
      default: 'John Smith'
    },
    {
      when: function (res) {
        return res.cosigner
      },
      type: 'input',
      name: 'cosignerPhone',
      message: "What is the cosigner's phone number?",
      default: '303-303-3030'
    },
    {
      type: "input",
      name: "vehicle",
      message: "What is year, make, model and licence plate of the vehicle that will be parked on premisses?",
      default: 'none'
    },
    {
      type: "input",
      name: "additional",
      message: "Any additional provisions?",
      default: 'none'
    },
]

function makeLease(name, data) {
  return fs.writeFileSync(path.join(process.cwd(), name), data);
};

function launchGenerator() {
  inquirer.prompt(input).then(r => makeLease('leaseName.md', createLease(r)))
};