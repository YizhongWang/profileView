const inquirer = require("inquirer")
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const employees = [];
const fs = require("fs");
const generateHTML = (workers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
    ${workers.map(worker => (`<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${worker.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${worker.getName()}</li>
      <li class="list-group-item">${worker.getId()}</li>
      <li class="list-group-item">${worker.getEmail()}</li>
    </ul>
  </div>
  `)).join("")}
    </div>
  </header>
</body>
</html>`;


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your ID?',
      name: 'ID',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your office number?',
      name: 'officeNumber',
    },
  ])
  .then((response) => {
    console.log(response.name);
    console.log(response.ID);
    console.log(response.email);
    console.log(response.officeNumber);
    const aManager = new Manager(response.name, response.ID, response.email, response.officeNumber)
    employees.push(aManager)
    addEngineer();

  });
// Call another function that uses inquirer 
// That inquirer will have a LIST of choices: engineer, intern
// Then based on the user choice, you call another inquirer function that asks engineer or intern questions, then you push `new Engineer` or `new Intern` to employees array

// Once user chooses "Finish building my team", do a FOR loop through employees array creating the html file
function addEngineer() {
  inquirer.prompt([

    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },

    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's employee ID number?"
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address?"
    },

    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?"
    }

  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    employees.push(engineer);
    addIntern();

  });

}
function addIntern() {
  inquirer.prompt([

    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    },

    {
      type: "input",
      name: "internId",
      message: "What is the intern's employee ID number?"
    },

    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address?"
    },

    {
      type: "input",
      name: "internSchool",
      message: "What school does the intern attend?"
    }

  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    employees.push(intern);
    
    const htmlPageContent = generateHTML(employees);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

}













