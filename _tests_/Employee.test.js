const Employee = require('../lib/Employee');

describe('Employee', () => {
 //all tests will be here
    describe('Initialization', () => {

        it('object of employee class', () => {

            const employee = new Employee();

            expect(employee instanceof Employee).tobeTruthy()
        } );

        it ('it sets name property based on contructor argument', () => {
            const name = "Name";
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });

        it ('it sets name property based on contructor argument', () => {
            const id = 1;
            const employee = new Employee("", id);

            expect(employee.id).toBe(id);
        });


        it ('it sets name property based on contructor argument', () => {
            const email = 'test';
            const employee = new Employee("", email);

            expect(employee.email).toBe(email);
        });



    })

});