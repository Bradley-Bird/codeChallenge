// IMPORT MODULES under test here:
import { addExclamationPoints, multiplyBySeven } from '../functions.js';


const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

test('this test should return undefined', (expect) => {
    const expected = false;
    const actual = addExclamationPoints('');

    expect.equal(actual, expected);
});

test('this test should return "hello!!!"', (expect) => {
    const expected = 'hello!!!';
    const actual = addExclamationPoints('hello');

    expect.equal(actual, expected);
});

test('this test should return "false"', (expect) => {
    const expected = false;

    const actual = addExclamationPoints(0);

    expect.equal(actual, expected);
});




test('this test should pass', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});
test('this test should pass', (expect) => {
    const expected = 0;

    const actual = multiplyBySeven(0);

    expect.equal(actual, expected);
});
test('this test should pass', (expect) => {
    const expected = 1.75;

    const actual = multiplyBySeven(.25);

    expect.equal(actual, expected);
});