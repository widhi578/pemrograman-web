// TUGAS 1
// const panjang = 20;
// const lebar = 10;

// const luas = panjang * lebar;   
// const keliling = 2 * (panjang + lebar);

// console.log(`Panjang: ${panjang}cm, Lebar: ${lebar}cm`);
// console.log(`Luas: ${luas}cm²`);
// console.log(`Keliling: ${keliling}cm`);

// TUGAS 2
// const hargaNasi = 12000;
// const hargaEsTeh = 4000;
// const hargaKerupuk = 2500;

// const jumlahNasi = 2;
// const jumlahEsTeh = 3;
// const jumlahKerupuk = 4;

// const uangBayar = 40000;

// const subtotalNasi = hargaNasi * jumlahNasi;
// const subtotalEsTeh = hargaEsTeh * jumlahEsTeh;
// const subtotalKerupuk = hargaKerupuk * jumlahKerupuk;
// const totalHarga = subtotalNasi + subtotalEsTeh + subtotalKerupuk;
// const kembalian = uangBayar - totalHarga;
// const uangCukup = uangBayar >= totalHarga;

// console.log("====== STRUK PEMBELIAN ======");
// console.log(`
// Nasi   : ${jumlahNasi} x Rp${hargaNasi} = Rp${subtotalNasi}
// Es Teh : ${jumlahEsTeh} x Rp${hargaEsTeh} = Rp${subtotalEsTeh}
// Kerupuk: ${jumlahKerupuk} x Rp${hargaKerupuk} = Rp${subtotalKerupuk}`);

// console.log(`\nTotal harga: Rp${totalHarga}
// Uang bayar: Rp${uangBayar}
// Kembalian: Rp${kembalian}
// Uang cukup: ${uangCukup}`);

// TUGAS 3
// let saldo = 200000;

// saldo += 50000;
// saldo -= 75000;
// saldo /= 5;

// let saldoPos1 = saldo;
// saldoPos1 *= 2;
// const saldoPos2 = saldo;
// const saldoPos3 = saldo;
// const saldoPos4 = saldo;
// const saldoPos5 = saldo;

// console.log("====== SALDO 5 POS TABUNGAN ======");
// console.log(`Pos 1: Rp${saldoPos1}`);
// console.log(`Pos 2: Rp${saldoPos2}`);
// console.log(`Pos 3: Rp${saldoPos3}`);
// console.log(`Pos 4: Rp${saldoPos4}`);
// console.log(`Pos 5: Rp${saldoPos5}`);

// TUGAS 4
// const totalMenit = 59;
// const sisaMenit = totalMenit % 60;
// const jumlahJam = (totalMenit - sisaMenit) / 60;

// console.log(`${totalMenit} menit = ${jumlahJam} jam ${sisaMenit} menit.`);

// TUGAS 5
const nilaiBudi = 82;
const nilaiAni = 90;
const kkm = 75;
const inputKkm = "75";   // data dari form, bertipe string

console.log("====== PERBANDINGAN NILAI ======");
console.log(`1. Nilai Budi >= KKM: ${nilaiBudi >= kkm} (82 >= 75)`);
console.log(`2. Nilai Ani > nilai Budi: ${nilaiAni > nilaiBudi} (90 > 82)`);
console.log(`3. Nilai Budi === nilai Ani: ${nilaiBudi === nilaiAni} (82 tidak sama dengan 90)`);
console.log(`4. Nilai Budi !== nilai Ani: ${nilaiBudi !== nilaiAni} (82 berbeda dari 90)`);
console.log(`5. Selisih nilai Ani dan Budi === 8: ${nilaiAni - nilaiBudi === 8} (90 - 82 = 8)`);
console.log(`6. KKM == inputKkm: ${kkm == inputKkm} (nilai sama setelah konversi tipe)`);
console.log(`7. KKM === inputKkm: ${kkm === inputKkm} (false karena tipe datanya berbeda)`);
console.log("Nomor 6 dan 7 berbeda karena == membandingkan nilai dengan konversi tipe, sedangkan === membandingkan nilai sekaligus tipe data.");