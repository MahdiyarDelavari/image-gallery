# 🐾✨ MeowGallery

![MeowGallery Banner](https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=800)

> **A stunning, modern image gallery built with Next.js, TypeScript, and Tailwind CSS.**

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the gallery!

---

## 🌟 Features

- 🔍 **Search images** by topic (powered by Pexels API)
- 🖼️ **Responsive gallery** with dynamic grid and blurred placeholders
- 📄 **Pagination** for browsing thousands of images
- 🪟 **Modal view** for full-size preview & download
- 🚫 **Custom 404 page** with playful design
- 🧭 **Navbar** with search bar and branding
- 🟦 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for beautiful UI
- ⚡ **Next.js App Router** for fast navigation

---

## 🧩 Components

| Component      | Description                              |
| -------------- | ---------------------------------------- |
| Navbar         | Top navigation bar with search           |
| Searchbar      | Input for searching images               |
| Gallery        | Main image grid, API calls, pagination   |
| ImageContainer | Optimized image display with blur effect |
| PhotoModal     | Modal for viewing & downloading images   |
| Footer         | Stylish pagination controls              |
| 404 Page       | Custom not-found page                    |

---

## 🔑 Environment Variables

Create a `.env.local` file:

```
PEXELS_API_KEY=your_api_key_here
```

---

## 🏗️ Project Structure

```text
app/
  layout.tsx
  page.tsx
  not-found.tsx
  results/[...myParams]/page.tsx
components/
  Navbar.tsx
  Searchbar.tsx
  Gallery.tsx
  ImageContainer.tsx
  PhotoModal.tsx
  Footer.tsx
lib/
  fetchImages.ts
  getBase64.ts
  pagination.ts
models/
  Images.ts

```

---

## 💬 Contact

Questions, feedback, or want to collaborate? [Open an issue](https://github.com/) or reach out!

---

## 🐱 Made with love by MeowGallery

---
