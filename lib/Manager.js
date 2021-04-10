const Employee = require("./Employee");

    class Manager extends Employee {
        constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
//gets Manager's office number
    getOfficeNumber() {
        //returns office number
        return this.officeNumber;
    }
//gets individuals role 
    getRole() {
        //returns individuals role i.e. Manager 
        return "Manager";
    }
}
module.exports = Manager;

