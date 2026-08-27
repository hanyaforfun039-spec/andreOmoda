/* =============================================================================
   omoda-semarang · TIPE DATA
   Satu sumber kebenaran bentuk data untuk cars.json dan site.json.
   ============================================================================ */

export type Powertrain = 'ev' | 'phev' | 'ice';
export type StatusModel = 'pre-order' | 'tersedia' | 'segera';

export interface SpecGroup {
  kategori: string;
  items: { label: string; value: string }[];
}

export interface Faq {
  tanya: string;
  jawab: string;
}

export interface Car {
  slug: string;
  nama: string;
  namaPendek: string;
  kategori: string;
  powertrain: Powertrain;
  status: StatusModel;
  tagline: string;
  /** null selama harga resmi belum keluar; tampilan otomatis memakai
      hargaCatatan sebagai gantinya, bukan menampilkan angka kosong. */
  hargaOtr: number | null;
  hargaCatatan?: string;
  gambar: {
    thumbnail: string;
    heroDesktop?: string;
    heroMobile?: string;
    /* Dipakai halaman model situs dealer. Ada di data agar bentuknya seragam
       di semua situs, walau situs sales tidak merendernya. */
    galeri?: { src: string; alt: string; judul: string }[];
  };
  warna?: { nama: string; kode: string }[];
  highlight: string[];
  /** Angka kunci yang dipamerkan sebagai deretan statistik di halaman model.
      Opsional — mobil tanpa data ini cukup melewatkannya, deretannya tidak
      dirender sama sekali. */
  angka?: { nilai: string; satuan?: string; label: string }[];
  specs: SpecGroup[];
  faq?: Faq[];
}

export interface SiteConfig {
  brand: string;
  dealerName: string;
  salesName: string;
  whatsapp: string;
  phoneDisplay: string;
  waDefault: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  openingHours: { hari: string; buka: string; tutup: string }[];
  mapEmbed: string;
  social: { instagram?: string; tiktok?: string; facebook?: string };
  /** Kota yang dilayani. Tiap entri WAJIB punya catatan yang berbeda — daftar
      nama kota tanpa isi terbaca sebagai penjejalan kata kunci oleh mesin
      pencari dan justru merugikan peringkat. */
  areaLayanan: { kota: string; catatan: string }[];
  faqUmum: Faq[];
  /* Teks SEO sengaja disimpan per situs, bukan di kode, supaya tiap sales
     punya judul dan deskripsi sendiri. Dua situs dgn teks identik akan
     dibaca Google sebagai duplikat: salah satunya disembunyikan. */
  seo: {
    titleSuffix: string;
    defaultDescription: string;
    locale: string;
    judulBeranda: string;
    deskripsiBeranda: string;
    deskripsiTentang: string;
    /* Potongan kalimat khas situs ini utk deskripsi halaman model, supaya
       dua situs tidak menghasilkan deskripsi yang nyaris sama. */
    modelPembuka: string;
    modelPenutup: string;
  };
  promoPopup: {
    aktif: boolean;
    gambar: string;
    lebar: number;
    tinggi: number;
    alt: string;
    ctaLabel: string;
    ctaPesan: string;
  };
  floatingPromo: {
    aktif: boolean;
    gambar: string;
    alt: string;
    ctaLabel: string;
    ctaPesan: string;
  };
}
