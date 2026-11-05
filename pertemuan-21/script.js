// // PRAKTIK 2
// const judul = document.getElementById("judul");
// judul.textContent = "Halo Widhi!";

// const paragrafPertama = document.querySelectorAll(".deskripsi");
// paragrafPertama[1].textContent = "Paragraf kedua sudah diganti.";

// const list = document.querySelector("#daftar");
// list.innerHTML = "<li>Apel</li><li>Pisang</li><li>Jeruk</li>";

// PRAKTIK 3
// const kotak = document.getElementById("kotak");
// kotak.style.backgroundColor = "tomato";
// kotak.style.color = "white";
// kotak.style.fontSize = "24px";
// kotak.style.borderRadius = "20px";

// PRAKTIK 4
// const tautan = document.getElementById("tautan");
// console.log(tautan.getAttribute("href"));
// tautan.setAttribute("href", "https://travel-indo.my.id");
// tautan.textContent = "Ke Travel Indo";

// const input = document.querySelector("#nama");
// input.setAttribute("placeholder", "Nama Lengkap...");
// input.removeAttribute("placeholder");

// PRAKTIK 5
// const daftar = document.getElementById("daftar");

// const itemBaru = document.createElement("li");
// const itemBaru2 = document.createElement("li");

// itemBaru2.textContent = "Nol";
// itemBaru.textContent = "Lima";

// daftar.prepend(itemBaru2);
// daftar.append(itemBaru);

// PRAKTIK 6
const tombol = document.querySelector("#tombol1");

tombol.addEventListener("mouseover", function () {
    alert("Tombol diklik!");
});