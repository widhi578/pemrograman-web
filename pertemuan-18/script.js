// STUDI KASUS

// const setoranBulanan = 1500000;
// const targetTabungan = 32000000;
// const bonusSemester = 1000000;

// let saldo = 0;
// let bulan = 0;
// let totalBonusDiterima = 0;

// console.log("===== SIMULASI TABUNGAN IMPIAN =====");

// while (saldo < targetTabungan) {
//     bulan++;
    
//     saldo += setoranBulanan;
    
//     let keteranganBonus = "";

//     if (bulan % 6 === 0) {
//         saldo += bonusSemester;
//         totalBonusDiterima += bonusSemester;
//         keteranganBonus = ` (+ bonus semester Rp${bonusSemester.toLocaleString('id-ID')})`;
//     }

//     console.log(`Bulan ${bulan}: Rp${saldo.toLocaleString('id-ID')}${keteranganBonus}`);
// }

// console.log("===================================");
// console.log(`Target Rp${targetTabungan.toLocaleString('id-ID')} tercapai dalam ${bulan} bulan`);
// console.log(`Total bonus semester: Rp${totalBonusDiterima.toLocaleString('id-ID')}`);


// PRAKTIK 1

// 1. Tampilkan teks "Halo, {nama}. Ini adalah iterasi ke-{i}" sebanyak 15 kali.
console.log("--- SOAL 1 ---");
let nama = "Widhi"; // Anda bisa mengubah nama sesuai keinginan
for (let i = 1; i <= 15; i++) {
    console.log(`Halo, ${nama}. Ini adalah iterasi ke-${i}`);
}

console.log("\n--- SOAL 2 ---");
// 2. Hitung mundur dari 10 sampai 1, lalu tampilkan "Selesai!" setelah loop selesai.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Selesai!");

console.log("\n--- SOAL 3 ---");
// 3. Tampilkan bilangan ganjil dari 1 sampai 25
for (let i = 1; i <= 25; i += 2) {
    console.log(i);
}