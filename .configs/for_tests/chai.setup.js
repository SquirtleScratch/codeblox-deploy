/**
 * path: .configs/for_tests/chai.setup.js
 */

const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from the env.test file
dotenv.config({ path: path.resolve(__dirname, '../env.test') });

// Any additional global setup for Chai can be done here
// After dotenv.config()
console.log('CHAI: Loaded environment variables:');
console.log('CHAI: POSTGRES_USER:', process.env.POSTGRES_USER);
console.log('DB_HOST:', process.env.POSTGRES_HOST_ALIAS || 'localhost');
console.log('CHAI: POSTGRES_DB:', process.env.POSTGRES_DB);
console.log('CHAI: POSTGRES_PASSWORD:', process.env.POSTGRES_PASSWORD);
console.log('CHAI: ORGANIZATION:', process.env.ORGANIZATION);