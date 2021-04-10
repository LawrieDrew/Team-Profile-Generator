const Employee = require("./Employee");

    class Intern extends Employee {
        constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    //gets the Intern's school
    getSchool() {
        //returns name of the school
        return this.school;
    }
    //gets the individuals role 
    getRole() {
        //returns the individuals role i.e. Intern
        return "Intern";
    }
}
module.exports = Intern;