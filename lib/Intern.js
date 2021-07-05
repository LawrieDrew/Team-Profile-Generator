const Employee = require("./Employee");

    class Intern extends Employee {
        constructor(name, id, email, school){
        super(name, id, email, 'Intern');
        this.school = school;
    }

    //gets the Intern's school
    getSchool() {
        //returns name of the school
        return this.school;
    }
   
}
module.exports = Intern;