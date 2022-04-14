// core module
// filesystem

const fs = require('fs');
console.log(fs);

// menuliskan file secara syncronous
// try {
//     fs.writeFileSync('data/text.txt', 'hello Developer - syncronous');
// } catch (e) {
//     console.log('Silakan cek : '+e);
// }



// === MENULISKAN FIEL ASYNCRONOUS
// fs.writeFile('data/text.txt', 'hello asyncronous', (err)=> {
//     console.log(err);
// })


// Membaca ISI FILE SYNCRONOUS
// const data = fs.readFileSync('data/text.txt');
// console.log(data.toString());

// const data1 = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(data1);

// Membaca ISI FILE ASYNCRONOUS
fs.readFile('data/text.txt', (e, data) => {
    if(e) throw e;
    console.log(data.toString());
})

fs.readFile('data/text.txt', 'utf-8', (e, data) => {
    if(e) throw e;
    console.log(data);
})