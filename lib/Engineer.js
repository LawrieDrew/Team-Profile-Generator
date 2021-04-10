const Employee = require("./Employee");

    class Engineer extends Employee {
        constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
//gets the Engineer's Github page
    getGithub() {
        //and brings it back 
        return this.github;
    }
// gets the invididuals role i.e. Engineer
    getRole() {
        //brings it back
        return "Engineer";
    }
}

module.exports = Engineer;