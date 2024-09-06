/**
 * path:  __tests__/cucumberjs/step_definitions/steps.js
 */

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

let number1, number2, result;

Given('I have the numbers {int} and {int}', function (int1, int2) {
  number1 = int1;
  number2 = int2;
});

When('I add them together', function () {
  result = number1 + number2;
});

Then('the result should be {int}', function (expectedResult) {
  expect(result).to.equal(expectedResult);
});