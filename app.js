// ganti dua nama di bawah ini sesuai nama dua temanmu
// lalu kirim link dengan tambahan ?ke=nama-di-bawah
// contoh: index.html?ke=putri  atau  index.html?ke=dinda
var TEMAN = {
  "putri": "Putri",
  "dinda": "Dinda"
};

// nama yang muncul kalau link dibuka tanpa ?ke= sama sekali
var NAMA_DEFAULT = "kamu";

function ambilNamaDariUrl() {
  var params = new URLSearchParams(window.location.search);
  var kode = params.get("ke");
  if (kode && TEMAN[kode.toLowerCase()]) {
    return TEMAN[kode.toLowerCase()];
  }
  return NAMA_DEFAULT;
}

document.addEventListener("DOMContentLoaded", function () {
  var nama = ambilNamaDariUrl();
  document.getElementById("namaPenerima").textContent = nama;
  document.getElementById("namaSuratPenerima").textContent = nama;

  var amplop = document.getElementById("amplop");
  var tombolBuka = document.getElementById("tombolBuka");
  var tombolLipat = document.getElementById("tombolLipat");
  var tampilanAmplop = document.getElementById("tampilan-amplop");
  var tampilanSurat = document.getElementById("tampilan-surat");

  function bukaSurat() {
    amplop.classList.add("terbuka");
    setTimeout(function () {
      tampilanAmplop.style.display = "none";
      tampilanSurat.style.display = "flex";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 550);
  }

  function lipatSurat() {
    tampilanSurat.style.display = "none";
    tampilanAmplop.style.display = "flex";
    amplop.classList.remove("terbuka");
  }

  amplop.addEventListener("click", bukaSurat);
  tombolBuka.addEventListener("click", bukaSurat);
  tombolLipat.addEventListener("click", lipatSurat);
});
