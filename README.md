```md
# 🍽️ Rull Food - Aplikasi Kasir Makanan dan Minuman

Rull Food adalah aplikasi kasir sederhana berbasis web yang dikembangkan menggunakan **ReactJS**. Aplikasi ini dirancang untuk membantu proses pemesanan makanan dan minuman dengan tampilan yang modern, ringan, dan mudah digunakan.

## 🚀 Fitur Utama

- Menampilkan daftar **menu makanan dan minuman** berdasarkan kategori.
- Fitur **tambah ke keranjang** untuk mempermudah transaksi.
- Perhitungan otomatis **total pembayaran**.
- Halaman **konfirmasi pemesanan** dengan desain ilustratif.
- Antarmuka bersih, responsif, dan mudah dioperasikan.

## 🧱 Struktur Direktori

```

src/
├── components/        # Komponen UI seperti menu, navbar, keranjang, dll.
├── pages/             # Halaman utama (Home, Sukses)
├── utils/             # Konstanta dan utilitas (mis. URL API)
├── App.js             # Root aplikasi
├── index.js           # Entry point React

````

## 🌐 Teknologi yang Digunakan

- **ReactJS** – Library frontend utama
- **Axios** – Untuk HTTP request
- **JSON Server** – Mock API untuk data menu, kategori, dll.
- **Bootstrap / CSS** – Untuk styling antarmuka

## 🔧 Instalasi dan Menjalankan Aplikasi

1. **Clone repository**:
   ```bash
   git clone https://github.com/username/rull-food.git
   cd rull-food
````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Jalankan JSON Server** (buat file `db.json` terlebih dahulu atau sesuaikan sesuai struktur data):

   ```bash
   npx json-server --watch db.json --port 3004
   ```

4. **Jalankan React app**:

   ```bash
   npm start
   ```

## ⚙️ Konfigurasi API

Pastikan file `src/utils/constants.js` berisi:

```js
export const API_URL = "http://localhost:3004/";
```