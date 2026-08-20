/* =============================================================================
   omoda-semarang · PERILAKU ANTARMUKA (client)
   Menu, header solid saat digulir, kartu promo, dan pop-up.
   Semua bertahan diam bila elemennya tidak ada di halaman itu.
   ============================================================================ */

/* ---- Menu ---------------------------------------------------------------- */
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  document.querySelectorAll('#nav a').forEach((a) => {
    a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      document.body.style.overflow = '';
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- Header jadi solid setelah digulir -----------------------------------
   Hanya untuk halaman berhero transparan; halaman lain sudah solid sejak awal. */
const header = document.getElementById('header');
if (header && header.dataset.transparan !== undefined) {
  addEventListener('scroll', () => {
    header.classList.toggle('is-solid', scrollY > 40);
  }, { passive: true });
}

/* ---- Kartu promo mengambang ---------------------------------------------- */
document.getElementById('promoClose')?.addEventListener('click', () => {
  const promo = document.getElementById('promo');
  if (promo) promo.hidden = true;
});

/* ---- Pop-up promo --------------------------------------------------------
   Sengaja TANPA localStorage: muncul lagi tiap halaman dibuka. Menutupnya
   hanya berlaku untuk kunjungan itu. Konsekuensinya pengunjung yang bolak-balik
   melihatnya berulang — ini memang yang diinginkan untuk kampanye berjalan. */
const pop = document.getElementById('pop');
if (pop) {
  pop.hidden = false;
  requestAnimationFrame(() => pop.classList.add('is-open'));

  const tutup = () => {
    pop.classList.remove('is-open');
    setTimeout(() => { pop.hidden = true; }, 260);
  };

  pop.querySelectorAll('[data-pop-close]').forEach((b) => b.addEventListener('click', tutup));
  pop.querySelector('.pop__cta')?.addEventListener('click', tutup);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !pop.hidden) tutup();
  });
}
