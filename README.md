# Reiji Kurose — Minecraft Server Developer Portfolio

Portfolio website one-page berbasis React, TypeScript, Vite, Tailwind CSS, dan Express static server.

## Menjalankan lokal

```bash
pnpm install
pnpm dev
```

## Build production

```bash
pnpm build
pnpm start
```

Server production membaca `PORT` dari environment Railway dan fallback ke port `3000` saat dijalankan lokal.

## Deploy ke Railway

1. Buat project baru di Railway.
2. Pilih **Deploy from GitHub repo** dan pilih `seannyx9089/Portofolio-`.
3. Railway akan membaca `railway.json` secara otomatis.
4. Build command: `pnpm build`.
5. Start command: `pnpm start`.
6. Tidak perlu menambahkan secret atau environment variable khusus; Railway menyediakan `PORT` otomatis.

## Kontak

- Email: [reijikurose3@gmail.com](mailto:reijikurose3@gmail.com)
- WhatsApp: [083892113214](https://wa.me/6283892113214)
