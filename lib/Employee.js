class Employee {
    constructor(name, id, email = 'Employee') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//gets name of the employee
    getName(){
        //returns said name of employee
        return this.name;
    }
//gets id of the employee
    getId() {
        //returns with the id and controlled substances
        return this.id;
    }
//gets email of the employee
    getEmail() {
        //returns employee email 
        return this.email;
    }
//gets the role of the individual 
    getRole() {
        //returns their role i.e. employee
        return "Employee";
    }
}
//woo!
module.exports = Employee;