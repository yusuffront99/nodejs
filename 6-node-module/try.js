//***************** SYNCRONOUS *****************************
// const getUserSync = (id) => {

//     const name = id === 1 ? 'ahmad' : 'sholeh';
//     return {id, name}
// }

// const userSatu = getUserSync(1);
// console.log(userSatu);


// const userDua = getUserSync(2);
// console.log(userDua);

// const call = "hello Developer";
// console.log(call);

//***************** ASYNCRONOUS *****************************
const getUser = (id, cb) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(()=> {
        const name = id === 1 ? 'ahmad' : 'sholeh'

        // Executer
        cb({id, name})
    }, time);
}

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});


const say = "hello world";
console.log(say);

module.exports = getUser;