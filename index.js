const inquirer = require("inquirer")

const employees = [];

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
          teamArray.push(engineer);
          createTeam();
        });
    
      }
    
  ])
  .then((response) =>{
    console.log(response.name);
    console.log(response.ID);
    console.log(response.email);
    console.log(response.officeNumber);
    const aManager = new Manager(response.name, response.ID, response.email, response.officeNumber)
    employees.push(aManager)

    // Call another function that uses inquirer 
    // That inquirer will have a LIST of choices: engineer, intern
    // Then based on the user choice, you call another inquirer function that asks engineer or intern questions, then you push `new Engineer` or `new Intern` to employees array
    // Once user chooses "Finish building my team", do a FOR loop through employees array creating the html file
}








);
  
