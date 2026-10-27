// PRAKTIK 1
// 1. Membuat function panggilNama
// function panggilNama(nomor) {
//   console.log(nomor + ". Ahmad Widhi Praditya");
// }

// 2. Memanggil function tersebut sebanyak 10 kali menggunakan perulangan for
// for (let i = 1; i <= 10; i++) {
//   panggilNama(i); 
// }


// PRAKTIK 2
// function penjumlahan(nilai1, nilai2, nilai3) {
//   return nilai1 + nilai2 + nilai3;
// }

// const hasil = penjumlahan(10, 20, 5);
// console.log(hasil); // 35


// PRAKTIK 3
// 1. Membuat function kuadrat(angka)
// function kuadrat(angka) {
//   return angka * angka;
// }

// // 2. Membuat dua variabel untuk menampung hasil uji angka 13 dan 43
// const hasil13 = kuadrat(13);
// const hasil43 = kuadrat(43);

// // 3. Menampilkan hasil kuadrat
// console.log("Hasil kuadrat 13 adalah:", hasil13);
// console.log("Hasil kuadrat 43 adalah:", hasil43);

// // 4. Menampilkan hasil penjumlahan dari kedua nilai yang sudah dikuadratkan
// const jumlahTotal = hasil13 + hasil43;
// console.log("Hasil penjumlahan keduanya adalah:", jumlahTotal);


// PRAKTIK 4
// Membuat arrow function dengan default parameter "XI RPL" pada parameter kelas
const perkenalan = (nama, umur, kelas = "XI RPL") => {
  console.log(`Halo, nama saya ${nama}, umur ${umur}, kelas ${kelas}`);
};

// 1. Menguji dengan nama sendiri (argumen lengkap)
perkenalan("Ahmad Widhi Praditya", "16", "XI RPL");

// 2. Menguji dengan nama bestie (memanfaatkan default parameter)
perkenalan("Radhitya Ramadhan", "17");