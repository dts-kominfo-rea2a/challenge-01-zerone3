// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
//SET MONICA
const colorMonica = ['Yellow', 'Pink', 'White', 'Purple'];
const setColorMonica = new Set(colorMonica);
const restoMonica = ['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'];
const setRestoMonica = new Set(restoMonica);

//SET WENDY
const colorWendy = ['Blue', 'Black', 'Grey'];
const setColorWendy = new Set(colorWendy);
const restoWendy = ['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy'];
const setRestoWendy = new Set(restoWendy);

const firstUser = {
    nama: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    faviriteColor: setColorMonica,
    isHavePet: "Yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019
        },
        {
            name: "SMA 03",
            city: "Tangerang"
        }
    ],
    favouriteRestaurant: setRestoMonica
};


const secondUser = {
    nama: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    faviriteColor: setColorWendy,
    isHavePet: "No",
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: 2010
        },
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: 2013
        },
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: 2016
        },
        {
            name: "Universitas Maju",
            city: "Tangerang"
        }
    ],
    favouriteRestaurant: setRestoWendy
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};