const Employee = require('../lib/Employee');

describe('Employee', () => {
 //all tests will be here
    describe('Initialization', () => {

        it('object of employee class', () => {

            const employee = new Employee();

            expect(employee instanceof Employee).tobeTruthy()
        } );

        it ('sets name property based on contructor argument', () => {
            const name = "John";
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        });

        it ('it sets id property based on contructor argument', () => {
            const id = 1;
            const employee = new Employee("", id);

            expect(employee.id).toBe(id);
        });


        it ('it sets email property based on contructor argument', () => {
            const email = 'test@gmail.com';
            const employee = new Employee("",0, email);

            expect(employee.email).toBe(email);
        });
    });

        describe('getName', () => {
            it('returns name when getName() is used', () => {
                    const name = "John";
                    const employee = new Employee(name);

                    expect(employee.getName()).toBe(name);
            });
        });

        describe('getId', () => {
            it('returns id when getId() is used', () => {        
                const id = 1;
                const employee = new Employee('', id);

                expect(employee.getId()).toBe(id);

        });
    });

    describe('getEmail', () => {
            it('returns email when getEmail() is used', () => {
                const email = 'test@gmail.com';
                const employee = new Employee('', 0, email);

                expect(employee.getEmail()).toBe(email);
            });
        });

        describe('getRole', () => {
            it('it sets role property based on constructor argument', () => {
                const  role = 'role';
                const employee = new Employee("", role);
    
                expect(employee.role).toBe(role);
    
            });
        )};