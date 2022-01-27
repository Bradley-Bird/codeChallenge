// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
} from '../functions.js';

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

    const actual = multiplyBySeven(0.25);

    expect.equal(actual, expected);
});

test('this test should pass 12', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});
test('this test should pass 12', (expect) => {
    const expected = 0;

    const actual = multiplyBy12ThenHalve(0);

    expect.equal(actual, expected);
});
test('this test should pass 12', (expect) => {
    const expected = 1.5;

    const actual = multiplyBy12ThenHalve(0.25);

    expect.equal(actual, expected);
});

test('this test should pass div them m', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
});
test('this test should pass div them m', (expect) => {
    const expected = 0;

    const actual = divideThenMultiply(0, 4, 100);

    expect.equal(actual, expected);
});
test('this test should pass div them m', (expect) => {
    const expected = 5;

    const actual = divideThenMultiply(0.25, 0.45, 9);

    expect.equal(actual, expected);
});
test('this test should pass div them m', (expect) => {
    const expected = 5;

    const actual = divideThenMultiply(0.25, 0.45, 9);

    expect.equal(actual, expected);
});
test('this test should pass div them m', (expect) => {
    const expected = 5;

    const actual = divideThenMultiply(0.25, 0.45, 9);

    expect.equal(actual, expected);
});
test('this test should pass div them m', (expect) => {
    const expected = 5;

    const actual = divideThenMultiply(0.25, 0.45, 9);

    expect.equal(actual, expected);
});

test('this test should pass array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);
});
test('this test should pass array', (expect) => {
    const expected = [0, 4, 100];

    const actual = returnAsAnArray(0, 4, 100);

    expect.deepEqual(actual, expected);
});
test('this test should pass array', (expect) => {
    const expected = [0.25, 0.45, 9];

    const actual = returnAsAnArray(0.25, 0.45, 9);

    expect.deepEqual(actual, expected);
});

test('this test should return a greeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);
});
test('this test should return a greeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 4.';

    const actual = makeLuckyGreeting(0, 4);

    expect.equal(actual, expected);
});
test('this test should return a greeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 0.7.';

    const actual = makeLuckyGreeting(0.25, 0.45);

    expect.equal(actual, expected);
});

test('this test should get second item', (expect) => {
    const expected = 4;

    const actual = getSecondItem([0, 4, 5]);

    expect.equal(actual, expected);
});

test('this test should pass get second item', (expect) => {
    const expected = 2;

    const actual = getSecondItem([1, 2, 3]);

    expect.equal(actual, expected);
});

test('this test should pass get second item', (expect) => {
    const expected = 'cat';

    const actual = getSecondItem(['dog', 'cat', 'cow']);

    expect.equal(actual, expected);
});
