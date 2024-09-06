/**
 * path:  .configs/for_tests/jest.setup.js
 */

import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import dotenv from 'dotenv';

// Load environment variables from the env.test file
dotenv.config({ path: '../env.test' });

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;