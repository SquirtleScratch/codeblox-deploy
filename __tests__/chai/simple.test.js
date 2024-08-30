/**
 * path:  __tests__/chai/simple.test.js
 */

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('Simple Test', function() {
  it('should resolve a promise', async function() {
    const promise = Promise.resolve(true);
    await expect(promise).to.eventually.be.true;
  });
});