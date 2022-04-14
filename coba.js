function cetakNama(name){
    return `Halo, nama saya ${name}`
}

const PI = 3.14;

const mahasiswa = {
    'name' : 'Ahmad',
    'age' : 22,
    printName() {
        return `Halo, my name is ${this.name} my age is ${this.age} years`;
    }
}

class Orang {
    constructor(){
        console.log('Objek orang telah dibuat');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

// ====== Notasi ES6
module.exports = {cetakNama, PI, mahasiswa, Orang};