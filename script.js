const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀️ Mode Terang';
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');   // <-- diperbaiki
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function (event) {
    event.preventDefault();
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function () {
    elemenModal.classList.remove('show');
});

// ===== TOGGLE BAHASA =====
 const btnBahasa = document.querySelector('#btnToggleBahasa');

 const text = {
    id: {
        role: 'Junior Web Developer',
        kontak: 'Kirim Pesan',
        tentangJudul: 'Tentang Saya',
        bio: 'Siswa kelas 10 Rekayasa Perangkat Lunak yang berfokus mendalami arsitektur Front-End modern, tata letak CSS Flexbox, serta prinsip Mobile-First Responsive Design standar industri.',
        skillJudul: 'Keahlian & Kompetensi'

    },
    en: {
        role: 'Junior Web Developer',
        kontak: 'Send Message',
        tentangJudul: 'About Me',
        bio: 'Grade 10 Software Engineering student focused on mastering modern Front-End architecture, CSS Flexbox layouts, and industry-standard Mobile-First Responsive Design principles.',
        skillJudul: 'Skills & Competencies'
    }
  };

  let bahasaSekarang = 'id';

  btnBahasa.addEventListener('click', function() {
    bahasaSekarang = bahasaSekarang === 'id' ? 'en' : 'id';
    const t = text[bahasaSekarang];

     document.querySelector('#txtRole').textContent = t.role;
    document.querySelector('#txtKontak').textContent = t.kontak;
    document.querySelector('#txtTentangJudul').textContent = t.tentangJudul;
    document.querySelector('#txtBio').textContent = t.bio;
    document.querySelector('#txtSkillJudul').textContent = t.skillJudul;

    btnBahasa.textContent = bahasaSekarang === 'id' ? '🇮🇩 ID / 🇬🇧 EN' : '🇬🇧 EN / 🇮🇩 ID';
});
   
