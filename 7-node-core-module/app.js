// core module
// filesystem

const fs = require('fs');
// console.log(fs);

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
// fs.readFile('data/text.txt', (e, data) => {
//     if(e) throw e;
//     console.log(data.toString());
// })

// fs.readFile('data/text.txt', 'utf-8', (e, data) => {
//     if(e) throw e;
//     console.log(data);
// })


//========READLINE
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('What is your name : ', (name) => {
//     rl.question('Enter you\'re age : ', (age) => {
//         console.log(`My name is : ${name}, My age is : ${age}`);
//         rl.close;
//     });
// });

// ============ SAVE DATA TO JSON
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is your name : ', (name) => {
    rl.question('Enter you\'re age : ', (age) => {
            const contact = {name, age};
            const file = fs.readFileSync('data/contacts.json', 'utf-8');
            const contacts = JSON.parse(file);

            contacts.push(contact);

            // console.log(data);
            fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
            rl.close;
    });
});
