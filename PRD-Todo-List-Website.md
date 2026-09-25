# Product Requirements Document (PRD)
## Simple Todo List Website

| | |
|---|---|
| **Nama Proyek** | Todo List Sederhana |
| **Dibuat oleh** | Ruu |
| **Tujuan** | Proyek belajar HTML, CSS, dan JavaScript (vanilla) |
| **Versi Dokumen** | 1.0 |
| **Tanggal** | 25 September 2026 |

---

## 1. Latar Belakang & Tujuan

### 1.1 Latar Belakang
Todo list adalah proyek klasik untuk pemula karena mencakup hampir semua konsep dasar web development: struktur HTML, styling CSS, manipulasi DOM, event handling, dan penyimpanan data di browser (localStorage). Cocok jadi proyek latihan setelah memahami dasar HTML/CSS/JS.

### 1.2 Tujuan Proyek
- Membuat aplikasi web todo list yang fungsional, bisa dipakai sehari-hari.
- Melatih pemahaman DOM manipulation dan event handling di JavaScript murni (tanpa framework).
- Melatih penyimpanan data persisten menggunakan `localStorage` agar data tidak hilang saat refresh.
- Melatih layout CSS modern (Flexbox) dan membuat tampilan yang rapi & responsif.

### 1.3 Target Pengguna
Diri sendiri (Ruu) sebagai pengguna utama — aplikasi personal untuk mencatat tugas kuliah/harian, sekaligus sebagai portofolio belajar.

---

## 2. Ruang Lingkup (Scope)

### 2.1 Termasuk dalam Scope (In-Scope)
- Menambah, menghapus, menandai selesai/belum selesai tugas.
- Filter tugas (semua / aktif / selesai).
- Penyimpanan data lokal (localStorage) — data tetap ada setelah refresh/tutup browser.
- Tampilan responsif (bisa dipakai di desktop maupun mobile).
- Validasi input sederhana (tidak bisa menambah tugas kosong).

### 2.2 Tidak Termasuk Scope (Out-of-Scope) — untuk versi ini
- Login/akun pengguna & sinkronisasi data ke server/cloud.
- Kategori/label tugas, sub-tugas, atau reminder/notifikasi.
- Drag-and-drop reorder tugas.
- Dark mode (bisa jadi fitur tambahan di versi berikutnya, lihat bagian 8).

---

## 3. User Stories

| # | Sebagai pengguna, saya ingin... | Agar... |
|---|---|---|
| US-1 | menambahkan tugas baru dengan mengetik teks lalu klik tombol/tekan Enter | saya bisa mencatat hal yang perlu dikerjakan |
| US-2 | menandai tugas sebagai selesai (centang) | saya tahu tugas mana yang sudah beres |
| US-3 | membatalkan tanda selesai pada tugas | jika ternyata belum benar-benar selesai |
| US-4 | menghapus tugas dari daftar | daftar tidak penuh dengan tugas yang tidak relevan |
| US-5 | melihat jumlah tugas yang masih aktif | tahu berapa banyak pekerjaan yang tersisa |
| US-6 | memfilter tampilan (semua/aktif/selesai) | fokus melihat kategori tertentu saja |
| US-7 | menghapus semua tugas yang sudah selesai sekaligus | membersihkan daftar dengan cepat |
| US-8 | data tugas saya tetap tersimpan walau browser ditutup | tidak perlu input ulang setiap saat |

---

## 4. Functional Requirements (Kebutuhan Fungsional)

### FR-1: Menambah Tugas
- Ada input teks (`<input type="text">`) dan tombol "Tambah" (atau tekan `Enter`).
- Input kosong atau hanya spasi **tidak boleh** ditambahkan (tampilkan pesan/peringatan singkat).
- Setelah tugas ditambahkan, input dikosongkan kembali otomatis.
- Tugas baru masuk ke bagian paling atas atau paling bawah daftar (bebas dipilih, tapi konsisten).

### FR-2: Menampilkan Daftar Tugas
- Setiap item tugas menampilkan: teks tugas, checkbox status selesai, tombol hapus.
- Tugas yang sudah selesai ditampilkan dengan gaya berbeda (misal: teks *strikethrough* / warna pudar).

### FR-3: Menandai Selesai / Belum Selesai
- Klik checkbox mengubah status tugas antara selesai ⇄ belum selesai.
- Perubahan status langsung terlihat di tampilan tanpa reload halaman.

### FR-4: Menghapus Tugas
- Setiap item punya tombol hapus (ikon 🗑️ atau teks "Hapus").
- Klik tombol langsung menghapus item dari daftar dan dari localStorage.
- (Opsional tapi disarankan) Ada konfirmasi sebelum menghapus untuk menghindari salah klik.

### FR-5: Filter Tugas
- Tiga pilihan filter: **Semua**, **Aktif** (belum selesai), **Selesai**.
- Filter aktif ditandai secara visual (misal tombol jadi highlight).
- Filter tidak menghapus data, hanya menyembunyikan tampilan.

### FR-6: Penghitung Tugas (Task Counter)
- Menampilkan jumlah tugas yang masih aktif, contoh: "3 tugas tersisa".
- Update otomatis setiap ada perubahan (tambah/hapus/selesai).

### FR-7: Hapus Semua Tugas Selesai
- Tombol "Clear Completed" yang menghapus semua tugas berstatus selesai sekaligus.

### FR-8: Penyimpanan Data (Persistence)
- Semua data tugas disimpan di `localStorage` browser dalam format JSON.
- Setiap ada perubahan (tambah/hapus/edit status), data di localStorage diperbarui.
- Saat halaman dibuka/refresh, data dari localStorage dimuat ulang ke tampilan.

### FR-9 (Opsional/Stretch): Edit Tugas
- Klik dua kali (double-click) pada teks tugas mengubahnya jadi mode edit (input teks).
- Tekan Enter atau klik di luar area untuk menyimpan perubahan.

---

## 5. Non-Functional Requirements (Kebutuhan Non-Fungsional)

| Aspek | Kebutuhan |
|---|---|
| **Kompatibilitas Browser** | Berjalan baik di Chrome, Firefox, Edge terbaru |
| **Responsivitas** | Tampilan menyesuaikan baik di layar desktop maupun mobile (min. lebar 320px) |
| **Performa** | Tidak ada lag terasa untuk daftar hingga ~100 tugas |
| **Aksesibilitas dasar** | Elemen interaktif (tombol, checkbox) bisa dijangkau dengan keyboard (Tab) |
| **Kode** | Terstruktur rapi: HTML semantik, CSS terorganisir, JS modular (fungsi-fungsi kecil, bukan satu blok besar) |
| **Tanpa dependency eksternal** | Tidak wajib pakai framework/library — vanilla HTML/CSS/JS (boleh pakai Google Fonts/ikon jika mau) |

---

## 6. Struktur Data (Data Model)

Setiap tugas direpresentasikan sebagai objek JavaScript, disimpan dalam array, lalu di-`JSON.stringify()` ke localStorage:

```js
{
  id: 1695600000000,     // gunakan Date.now() sebagai id unik
  text: "Belajar JavaScript DOM",
  completed: false
}
```

Contoh key localStorage: `"todos"` → berisi array JSON dari objek-objek tugas di atas.

---

## 7. Struktur Halaman & Komponen UI

### 7.1 Wireframe (deskripsi)
```
------------------------------------------
|              📝 Todo List               |
------------------------------------------
|  [ Input tugas baru...      ] [Tambah]  |
------------------------------------------
|  [Semua] [Aktif] [Selesai]              |
------------------------------------------
|  ☐ Beli buku catatan            🗑️      |
|  ☑ ~~Kerjakan tugas HCI~~       🗑️      |
|  ☐ Review materi CSS            🗑️      |
------------------------------------------
|  3 tugas tersisa      [Clear Completed] |
------------------------------------------
```

### 7.2 Komponen Utama
1. **Header** — judul aplikasi.
2. **Form Input** — input teks + tombol tambah.
3. **Filter Bar** — 3 tombol filter.
4. **Todo List** — daftar item tugas (`<ul>`/`<li>` atau `<div>`).
5. **Footer/Status Bar** — counter tugas aktif + tombol clear completed.

### 7.3 Saran Struktur File
```
todo-list/
├── index.html
├── style.css
└── script.js
```
(Cukup 3 file dasar — tidak perlu folder/build tools untuk level ini.)

---

## 8. Fitur Tambahan (Stretch Goals — opsional, dikerjakan setelah MVP selesai)
- 🌙 Dark mode toggle.
- 🎨 Animasi transisi saat tugas ditambah/dihapus.
- 📅 Tanggal deadline per tugas.
- 🔍 Search/cari tugas.
- ↕️ Drag-and-drop untuk mengurutkan ulang.

---

## 9. Kriteria Penerimaan (Acceptance Criteria)

Proyek dianggap **selesai (MVP)** jika semua poin berikut terpenuhi:

- [ ] Bisa menambah tugas baru lewat input + tombol atau tekan Enter.
- [ ] Tugas kosong/spasi tidak bisa ditambahkan.
- [ ] Bisa menandai tugas selesai/belum selesai dan tampilannya berubah sesuai status.
- [ ] Bisa menghapus tugas individual.
- [ ] Filter (Semua/Aktif/Selesai) berfungsi dengan benar.
- [ ] Counter jumlah tugas aktif selalu akurat.
- [ ] Tombol "Clear Completed" menghapus semua tugas selesai sekaligus.
- [ ] Data tetap ada setelah halaman di-refresh (localStorage bekerja).
- [ ] Tampilan rapi dan tidak berantakan di layar HP (responsif).

---

## 10. Rencana Pengerjaan (Development Milestones)

| Tahap | Fokus | Target |
|---|---|---|
| **1. Struktur** | Buat `index.html` — layout dasar semua elemen (tanpa styling) | Struktur HTML lengkap & semantik |
| **2. Styling** | Buat `style.css` — layout Flexbox, warna, spacing, responsif | Tampilan sudah enak dilihat |
| **3. Logika Inti** | Fungsi tambah, render list, tandai selesai, hapus tugas | FR-1 s/d FR-4 berfungsi |
| **4. Filter & Counter** | Fungsi filter tampilan + hitung tugas aktif | FR-5, FR-6 berfungsi |
| **5. Persistence** | Simpan & load data dari localStorage | FR-8 berfungsi, data tidak hilang saat refresh |
| **6. Polish** | Clear completed, validasi input, testing manual semua fitur | Semua Acceptance Criteria ✅ |
| **7. (Opsional)** | Stretch goals di bagian 8 | Sesuai minat |

---

## 11. Teknologi yang Digunakan
- **HTML5** — struktur & semantik halaman
- **CSS3** — styling, Flexbox untuk layout
- **JavaScript (Vanilla, ES6+)** — logika aplikasi, DOM manipulation, `localStorage` API
- Tanpa framework, tanpa build tool — cukup dibuka langsung di browser

---

*Dokumen ini adalah panduan pengembangan — boleh disesuaikan seiring proses belajar jika ada penyesuaian kebutuhan.*
