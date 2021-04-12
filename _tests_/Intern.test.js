const { it, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Intern');

describe('Intern', () => {
 //all tests will be here
    describe('Initialization', () => {

        it('object of Intern class', () => {

            const intern = new Intern();

            expect(intern instanceof Intern).tobeTruthy()
        } );

        it ('sets name property based on contructor argument', () => {
            const name = "John";
            const Intern = new Intern(name);

            expect(intern.name).toBe(name);
        });

        it ('it sets id property based on contructor argument', () => {
            const id = 1;
            const intern = new Intern("", id);

            expect(intern.id).toBe(id);
        });


        it ('it sets email property based on contructor argument', () => {
            const email = 'test@gmail.com';
            const intern = new intern("",0, email);

            expect(intern.email).toBe(email);
        });
    });

        describe('getName', () => {
            it('returns name when getName() is used', () => {
                    const name = "John";
                    const intern = new Intern(name);

                    expect(intern.getName()).toBe(name);
            });
        });

        describe('getId', () => {
            it('returns id when getId() is used', () => {        
                const id = 1;
                const intern = new Intern('', id);

                expect(intern.getId()).toBe(id);

        });
    });

    describe('getEmail', () => {
            it('returns email when getEmail() is used', () => {
                const email = 'test@gmail.com';
                const intern = new Intern('', 0, email);

                expect(intern.getEmail()).toBe(email);
            });
        });

        describe('getRole', () => {
            it('it sets role property based on constructor argument', () => {
                const  role = 'role';
                const intern = new Intern("", role);
    
                expect(intern.role).toBe(role);
    
            });
        });

        describe('getSchool', () => {
            it('returns Interns school name when getSchool() is called', () => {
                const school = 'Not A Thing University';
                const intern = new Intern("", 1, 'test@gmail.com', school);

                expect(intern.getSchool()).toBe(school);

            });

        });