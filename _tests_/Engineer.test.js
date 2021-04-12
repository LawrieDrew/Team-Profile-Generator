const { it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
 //all tests will be here
    describe('Initialization', () => {

        it('object of Engineer class', () => {

            const engineer = new Engineer();

            expect(engineer instanceof Engineer).tobeTruthy()
        } );

        it ('sets name property based on contructor argument', () => {
            const name = "John";
            const engineer = new Engineer(name);

            expect(engineer.name).toBe(name);
        });

        it ('it sets id property based on contructor argument', () => {
            const id = 1;
            const engineer = new Engineer("", id);

            expect(engineer.id).toBe(id);
        });


        it ('it sets email property based on contructor argument', () => {
            const email = 'test@gmail.com';
            const engineer = new engineer("",0, email);

            expect(engineer.email).toBe(email);
        });
    });

        describe('getName', () => {
            it('returns name when getName() is used', () => {
                    const name = "John";
                    const engineer = new Engineer(name);

                    expect(engineer.getName()).toBe(name);
            });
        });

        describe('getId', () => {
            it('returns id when getId() is used', () => {        
                const id = 1;
                const engineer = new Engineer('', id);

                expect(engineer.getId()).toBe(id);

        });
    });

    describe('getEmail', () => {
            it('returns email when getEmail() is used', () => {
                const email = 'test@gmail.com';
                const engineer = new Engineer('', 0, email);

                expect(engineer.getEmail()).toBe(email);
            });
        });

        describe('getRole', () => {
            it('it sets role property based on constructor argument', () => {
                const  role = 'role';
                const engineer = new Engineer("", role);
    
                expect(engineer.role).toBe(role);
    
            });
        });

        describe('getGitHub', () => {
            it('returns Engineers Github page when Github() is called', () => {
                const github = 'https://www.github.com/';
                const engineer = new Engineer("", 1, 'test@gmail.com', github);

                expect(engineer.getGithub()).toBe(github);

            });

        });