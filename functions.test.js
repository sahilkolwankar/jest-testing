// The test file should have the same name as the file it's
// testing + .test.js
const functions = require('./functions');


// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

// 'Adds 2 + 2 to equal 4' is just the name of the test
// toBe() => matcher
test('Adds 2 + 2 to equal 4', () => {
    // expect(received value).toBe(expected value)
    expect(functions.add(2, 2)).toBe(4);
});

// toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// Types of matchers:
/*
    - toBeNull matches only null
    - toBeUndefined matches only undefined
    - toBeDefined is the opposite of toBeUndefined
    - toBeTruthy matches anything that an if statement treats as true
    - toBeFalsy matches anything that an if statement treats as false
*/

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull;
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// createUser
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

// Less than and greater than
// You can write your function inside the test too
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
    // i => case insensitive
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// **** ASYNCHRONOUS ****

// Promise
test('Promise: User fetched name should be Leanne Graham', () => {
    // assertions(1) => Number of assertions we expect
    // If we don't fill it with the number, the test will
    // give undesired results
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

// Async Await
test('Async/Await: User fetched name should be Leanne Graham', async () => {
    // assertions(1) => Number of assertions we expect
    // If we don't fill it with the number, the test will
    // give undesired results
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});