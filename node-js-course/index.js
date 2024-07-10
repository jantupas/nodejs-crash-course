// const { generateRandomNumber, celsiusToFarenheit } = require('./utils');

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Farenheit: ${celsiusToFarenheit(5)}`);

import getPosts, { getPostsLength } from './postController.js'

console.log(getPosts());
console.log(`Post Length: ${getPostsLength()}`);