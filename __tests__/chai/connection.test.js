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
    // Log the environment variables
    console.log('Database Configuration:');
    console.log('POSTGRES_USER:', process.env.POSTGRES_USER);
    console.log('DB_HOST:', process.env.POSTGRES_HOST_ALIAS || 'localhost');
    console.log('POSTGRES_DB:', process.env.POSTGRES_DB);
    console.log('POSTGRES_PASSWORD:', process.env.POSTGRES_PASSWORD);
    console.log('DB_PORT:', process.env.DB_PORT || 5432);

    // Database connection configuration
    const client = new Client({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST_ALIAS || 'localhost',  // or the Docker service name
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.DB_PORT || 5432,  
    });

    // Connect to the database
    await client.connect();
   
    const res = await client.query('SELECT NOW()');
    await client.end();

    expect(res).to.have.property('rows').that.is.not.empty;
  });
});
