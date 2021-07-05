const Employee = require("./Employee");

    class Manager extends Employee {
        constructor(name, id, email, officeNumber){
        super(name, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }
//gets Manager's office number
    getOfficeNumber() {
        //returns office number
        return this.officeNumber;
    }
}
module.exports = Manager;

