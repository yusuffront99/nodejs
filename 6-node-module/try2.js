// const printName = (name) => 
//     `hello, ${name}`;

// console.log(printName("ahmad"));

const getUser = require('./try');

const userDua = getUser(3, (hasil) => {
    console.log(hasil)
});
