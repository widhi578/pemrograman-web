// PRAKTIK 1: Array Dasar
console.log("--- PRAKTIK 1 ---");

// 1. Buat array hobi berisi 4 hobi
let hobi = ["Membaca", "Bermain Gitar", "Ngoding", "gaming"];

// Tampilkan seluruh array, hobi pertama, dan hobi terakhir
console.log("Seluruh hobi:", hobi);
console.log("Hobi pertama:", hobi[0]);
console.log("Hobi terakhir:", hobi[hobi.length - 1]);

// 2. Tampilkan jumlah hobi
console.log("Jumlah hobi:", hobi.length);

// 3. Tampilkan hobi[10]
console.log("Hobi ke-10:", hobi[10]); 


// PRAKTIK 3: Array of Object
console.log("\n--- PRAKTIK 3 ---");
console.log(hobi.includes("gaming")); //False
console.log(hobi.includes("Membaca")); //True
console.log(hobi.indexOf("gaming")); //2
console.log(hobi.join(" | ")); //0

// PRAKTIK 2: Manipulasi Array
console.log("\n--- PRAKTIK 2 ---");

let makanan = ["Nasi Goreng", "Sate", "Rendang"];
console.log("Array awal:", makanan);

// 1. Tambah satu makanan di akhir (push)
makanan.push("Bakso");
console.log("Setelah push:", makanan);

// 2. Tambah satu makanan di awal (unshift)
makanan.unshift("Soto");
console.log("Setelah unshift:", makanan);

// 3. Hapus elemen terakhir (pop)
makanan.pop();
console.log("Setelah pop:", makanan);

// 4. Hapus elemen pertama (shift)
makanan.shift();
console.log("Setelah shift (Array akhir):", makanan);


// PRAKTIK 4: Object Dasar
console.log("\n--- PRAKTIK 4 ---");

// 1. Buat object profil
let profil = {
  nama: "Ahmad Widhi Praditya",
  kelas: "XI RPL",
  umur: 16,
  hobi: "Programming"
};

// 2. Tampilkan semua property dengan dot notation
console.log("Nama:", profil.nama);
console.log("Kelas:", profil.kelas);
console.log("Umur:", profil.umur);
console.log("Hobi:", profil.hobi);

// Tampilkan kelas dengan bracket notation
console.log("Kelas (Bracket):", profil["kelas"]);

// 3. Kalimat perkenalan memakai template literal
let perkenalan = `Halo, nama saya ${profil.nama}. Saya berada di kelas ${profil.kelas}, umur saya ${profil.umur} tahun, dan hobi saya adalah ${profil.hobi}.`;
console.log(perkenalan);

// 4. Tampilkan profil.alamat
console.log("Alamat:", profil.alamat);


// PRAKTIK 5: Manipulasi Object
console.log("\n--- PRAKTIK 5 ---");

// 1. Ubah umur menjadi lebih 1 tahun
profil.umur = profil.umur + 1; // atau profil.umur += 1;

// 2. Tambahkan property alamat
profil.alamat = "Jakarta Timur";

// 3. Hapus property kelas
delete profil.kelas;

console.log("Object profil setelah diubah:", profil);


// PRAKTIK 6: Array of Object
console.log("\n--- PRAKTIK 6 ---");

let daftarSiswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 85 },
  { nama: "Citra", nilai: 90 }
];

// 1. Tampilkan nama siswa pertama
console.log("Nama siswa pertama:", daftarSiswa[0].nama);

// 2. Tampilkan nilai siswa ketiga
console.log("Nilai siswa ketiga:", daftarSiswa[2].nilai);

// 3. Tampilkan jumlah siswa
console.log("Jumlah siswa awal:", daftarSiswa.length);

// 4. Tambahkan satu siswa baru dengan push
daftarSiswa.push({ nama: "Dina", nilai: 95 });

// 5. Tampilkan jumlah barunya
console.log("Jumlah siswa baru setelah di-push:", daftarSiswa.length);
console.log("Data terbaru:", daftarSiswa);