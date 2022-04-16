const validator = require('validator');
const chalk = require('chalk');

// ==== VALIDATOR
// const cek = validator.isEmail('hello@gmail.c');
// console.log(validator.isMobilePhone('082252245600', 'id-ID'));
// console.log(validator.isNumeric('08225224560T0'));

// ==== CHALK
console.log(chalk.blue('Hello world!'));
const message = chalk`lorem10, heloo {bgBlack.italic developer} jakdklko eopppp eeeaeaeskl klskllsklklk`;
console.log(message);