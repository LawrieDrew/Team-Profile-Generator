const Manager = require('../lib/Manager');

describe('Manager', () => {
 //all tests will be here
    describe('Initialization', () => {

        it('object of Manager class', () => {

            const manager = new Manager();

            expect(manager instanceof Manager).tobeTruthy()
        } );

        it ('sets name property based on contructor argument', () => {
            const name = "John";
            const manager = new Manager(name);

            expect(manager.name).toBe(name);
        });

        it ('it sets id property based on contructor argument', () => {
            const id = 1;
            const manager = new Manager("", id);

            expect(manager.id).toBe(id);
        });


        it ('it sets email property based on contructor argument', () => {
            const email = 'test@gmail.com';
            const manager = new Manager("",0, email);

            expect(manager.email).toBe(email);
        });
    });

        describe('getName', () => {
            it('returns name when getName() is used', () => {
                    const name = "John";
                    const manager = new Manager(name);

                    expect(manager.getName()).toBe(name);
            });
        });

        describe('getId', () => {
            it('returns id when getId() is used', () => {        
                const id = 1;
                const manager = new Manager('', id);

                expect(manager.getId()).toBe(id);

        });
    });

    describe('getEmail', () => {
            it('returns email when getEmail() is used', () => {
                const email = 'test@gmail.com';
                const manager = new Manager('', 0, email);

                expect(manager.getEmail()).toBe(email);
            });
        });

        describe('getRole', () => {
            it('it sets role property based on constructor argument', () => {
                const  role = 'role';
                const manager = Manager("", role);
    
                expect(manager.role).toBe(role);
    
            });
        });

        describe('getOfficeNumber', () => {
            it('returns managers office number when getOfficeNumber() is called', () => {
                const officenumber = 'Not A Thing University';
                const manager = new Manager("", 1, 'test@gmail.com', officenumber);

                expect(manager.getOfficeNumber()).toBe(officenumber);

            });

        });

    })