// PRAKTIK 1
const tombol1 = document.querySelector("#tombol1");
const judul = document.querySelector("#judul");

tombol1.addEventListener("click", (event) => {
    judul.textContent = "Tombol 1 telah diklik!";
});

// PRAKTIK 2
const tombol2 = document.querySelector("#tombol2");
let hitung = 0;

tombol2.addEventListener("click", function() {
    hitung++;
    tombol2.textContent = `Diklik ${hitung} kali!`;
});

// PRAKTIK 3
const kotak = document.querySelector("#kotak");

kotak.addEventListener("mouseover", function() {
    kotak.classList.add("aktif");
});

kotak.addEventListener("mouseout", function() {
    kotak.classList.remove("aktif");
});

kotak.addEventListener("dblclick", function() {
    kotak.classList.toggle("besar");
});

// PRAKTIK 4
const nama = document.querySelector("#nama");
const hasil = document.querySelector("#hasil");

console.log(typeof nama.value);

nama.addEventListener("input", function() {
    hasil.textContent = `Halo, ${nama.value}!`;

    tombol1.addEventListener("click", function() {
        console.log(`Halo, ${nama.value}!`);
    })
});