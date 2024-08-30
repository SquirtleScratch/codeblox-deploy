/**
 * path:  __tests__/chai/connection.test.js
 */

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { Client } = require('pg');

chai.use(chaiAsPromised);
const { expect } = chai;

describe('Database Connection', function() {
  it('should connect to the PostgreSQL database', async function() {
    // Database connection configuration
    const client = new Client({
      user: 'postgres',
      host: '3.145.185.234',  // or the Docker service name
      database: 'codeblox',
      password: 'SquirtleScratch',
      port: 5432,  
    });

    // Connect to the database
    await client.connect();
   
    const res = await client.query('SELECT NOW()');
    await client.end();

    expect(res).to.have.property('rows').that.is.not.empty;
  });
});
