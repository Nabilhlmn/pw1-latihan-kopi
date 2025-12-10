// pop up
alert("Selamat datang di Website UMKM Street Cup!");
alert("Halo pengunjung! Kami senang kamu mampir ke Street Cup — Ngopi Gak Harus Ribet ☕");

// Info
const namaUMKM = "Street Cup";
const slogan = "Ngopi Gak Harus Ribet";
console.log("=== Informasi UMKM ===");
console.log("Nama UMKM:", namaUMKM);
console.log("Slogan:", slogan);

// stok produk
let jumlahProduk = 5;
console.log("Jumlah produk awal:", jumlahProduk);
jumlahProduk += 3; // tambah stok
console.log("Setelah penambahan stok:", jumlahProduk);
jumlahProduk -= 1; // produk terjual
console.log("Setelah ada penjualan:", jumlahProduk);

// rincian produk
let arabika = 4;
let robusta = 3;
let nonKopi = 1;

console.log("=== Rincian jumlah Produk ===");
console.log("Kopi Arabika:", arabika);
console.log("Kopi Robusta:", robusta);
console.log("Non-Kopi:", nonKopi);

let totalProduk = arabika + robusta + nonKopi;
console.log("Total Semua Produk:", totalProduk);

// rekomendasi stok
if (totalProduk > 10) {
  console.log("<< Stok sangat banyak, siap melayani banyak pelanggan >>!");
} else if (totalProduk >= 5) {
  console.log("<< Stok cukup untuk kebutuhan harian >>");
} else {
  console.log("<< Stok menipis, segera lakukan restock! >>");
}

// daftar menu
const daftarMenu = ["Latte", "Americano", "Cappuccino", "Matcha", "Long Black"];
console.log("=== Daftar Menu Hari Ini ===");
for (let i = 0; i < daftarMenu.length; i++) {
  console.log(i + 1 + ".", daftarMenu[i]);
}


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  const feedback = document.getElementById("feedback");

  if (!/^\d+$/.test(phone)) {
    feedback.textContent = "Nomor HP harus berupa angka!";
    feedback.className = "error";
    return;
  }

  feedback.textContent = "Data berhasil dikirim!";
  feedback.className = "success";
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("contactForm").reset();
  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
  feedback.className = "hidden";
});