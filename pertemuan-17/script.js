// PRAKTIK 1
// let umur = 17;
// let punyaKtp = true;

// console.log(umur >= 17 && punyaKtp);
// console.log(umur < 17 || punyaKtp);
// console.log(!punyaKtp);

// let umurAdik = 16;
// let punyaKtpAdik = false;

// console.log("Adik sudah cukup umur dan punya KTP:", umurAdik >= 17 && punyaKtpAdik);
// console.log("Adik belum cukup umur atau belum punya KTP:", umurAdik < 17 || !punyaKtpAdik);
// console.log("Adik belum punya KTP:", !punyaKtpAdik);


// PRAKTIK 2
// let nilai = 80;
// let hadir = 90;

// console.log("Lulus       :", nilai >= 75 && hadir >= 80);
// console.log("Penghargaan :", nilai >= 90 || hadir >= 95);
// console.log("Tidak Lulus :", nilai < 75 || hadir < 80);


// PRAKTIK 3
// let inputNilai = "88";
// let inputAktif = "";

// console.log(Number(inputNilai) + 10);
// console.log(typeof Number(inputNilai));
// console.log(Boolean(inputNilai));
// console.log(Boolean(inputAktif));


// LATIHAN 
// input data
let inputTugas = "85";
let inputUts = "78";
let inputUas = "90";
let inputKehadiran = "92";

// konversi input data ke tipe number
let nilaiTugas = Number(inputTugas);
let nilaiUts = Number(inputUts);
let nilaiUas = Number(inputUas);
let kehadiran = Number(inputKehadiran); 

// hitung nilai akhir
let nilaiAkhir = (nilaiTugas * 0.3) + (nilaiUts * 0.3) + (nilaiUas * 0.4);

// tentukan status kehadiran dan kelulusan
let statusKehadiran = kehadiran >= 80 ? "Memenuhi Syarat" : "Tidak Memenuhi Syarat";
let statusLulus = nilaiAkhir >= 75 && kehadiran >= 80 ? "Lulus" : "Tidak Lulus";

// tampilkan hasil
console.log("===== INPUT DATA =====");
console.log(`Nilai Tugas     : ${nilaiTugas}`);
console.log(`Nilai UTS       : ${nilaiUts}`);
console.log(`Nilai UAS       : ${nilaiUas}`);
console.log(`Kehadiran       : ${kehadiran}`);

console.log("\n===== HASIL AKHIR =====");
console.log(`Nilai Akhir     : ${nilaiAkhir}`);
console.log(`Status Kehadiran: ${statusKehadiran}`);
console.log(`Status Kelulusan: ${statusLulus}`);