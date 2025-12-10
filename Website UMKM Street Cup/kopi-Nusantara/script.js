// Memberi tahu mahasiswa bahwa script berhasil di-load 
alert('Selamat datang di Website Profil UMKM Anda!'); 
// Menampilkan informasi variabel di console 
const namaUMKM = 'Kopi Nusantara'; 
console.log('Nama UMKM:', namaUMKM); 
// Demonstrasi variabel dan operator 
let produk = 3; 
console.log('Jumlah produk saat ini:', produk); 
produk += 2; 
console.log('Setelah penambahan:', produk); 

// ====== Percabangan (if...else) ======
function cekKategoriUsia() {
  const usia = document.getElementById("usiaInput").value;
  const hasil = document.getElementById("hasilUsia");

  if (usia < 13) {
    hasil.textContent = "Kategori: Anak-anak ☕";
  } else if (usia < 20) {
    hasil.textContent = "Kategori: Remaja ☕";
  } else if (usia < 60) {
    hasil.textContent = "Kategori: Dewasa ☕";
  } else {
    hasil.textContent = "Kategori: Lansia ☕";
  }
}

// ====== Perulangan (for loop) ======
const testimoni = [
  "Kopi mantap dan harum banget!",
  "Pelayanan cepat dan ramah!",
  "Rasa kopinya khas banget, bikin nagih!"
];

let tampilTestimoni = "";
for (let i = 0; i < testimoni.length; i++) {
  tampilTestimoni += `<p>${i + 1}. ${testimoni[i]}</p>`;
}
document.getElementById("daftarTestimoni").innerHTML = tampilTestimoni;

// ====== Fungsi dengan parameter ======
function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

// Event handler untuk form belanja
document.getElementById("formBelanja").addEventListener("submit", function (e) {
  e.preventDefault();
  const harga = parseInt(document.getElementById("harga").value);
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const total = hitungTotal(harga, jumlah);
  document.getElementById("hasilTotal").textContent = `Total Belanja: Rp ${total.toLocaleString("id-ID")}`;
});

document.addEventListener("DOMContentLoaded", function(){
  const from = document.getElementById("fromkontak");
  const nama = document.getElementById("nama");
  const email = Document.getElementById("pesan");
  const errorMsg = dokument.getElementById("errorMsg");

  from.addEventListener("submit",function (e) {
    e.preventDefault();
    if (nama.value === "" || email.value === " " || pesan.value ==="" ){
      errorMsg.textContent = "semua field harus diisi terlebih dahulu" ; }
    else {
      errorMsg.textContent = "";
      alert("pesan berhasil dikirim");
      from.reset();
    }  
  });
});
