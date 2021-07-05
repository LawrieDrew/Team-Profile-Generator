const Employee = require("./Employee");

    class Engineer extends Employee {
        constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
    }
//gets the Engineer's Github page
    getGithub() {
        //and brings it back 
        return this.github;
    }

}

module.exports = Engineer;