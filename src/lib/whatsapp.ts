/* =============================================================================
   omoda-semarang · WHATSAPP
   Semua konversi bermuara ke sini (tidak ada backend). Pesan ditulis tanpa
   emoji, mengikuti gaya komunikasi merek.
   ============================================================================ */
import { site } from './site';

/** URL wa.me dengan pesan ter-encode. */
export function waLink(pesan?: string): string {
  const nomor = site.whatsapp.replace(/[^0-9]/g, '');
  return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan || site.waDefault)}`;
}

export const pesanPenawaran = (model?: string) =>
  `Halo ${site.salesName}, saya tertarik dengan OMODA${model ? ' ' + model : ''}. ` +
  `Boleh minta informasi harga dan ketersediaannya untuk wilayah ${site.address.locality}?`;

export const pesanTestDrive = (model: string) =>
  `Halo ${site.salesName}, saya ingin menjadwalkan test drive OMODA ${model} di ${site.address.locality}.`;

export const pesanPreOrder = (model: string) =>
  `Halo ${site.salesName}, saya mau pre-order OMODA ${model}. ` +
  `Boleh dibantu info benefit, cara pemesanan, dan perkiraan waktu pengirimannya?`;
