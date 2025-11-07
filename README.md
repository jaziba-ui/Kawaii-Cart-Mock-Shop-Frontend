<img width="1901" height="876" alt="products" src="https://github.com/user-attachments/assets/9e9fd304-cf05-44ed-9020-42f670d3e007" /># Mock E-Commerce Cart — Vibe Commerce Screening Project

A minimal full-stack shopping cart application demonstrating product listing, cart management, and a mock checkout flow.  
Designed to show **clean API integration**, **state management**, and a **soft pastel UI theme** using Tailwind.

---

## Preview

**Products**
<img width="1901" height="876" alt="products" src="https://github.com/user-attachments/assets/1bcfba1a-a3ad-4dec-b001-c3b9715aeaba" />

**Cart**


<img width="557" height="797" alt="cart" src="https://github.com/user-attachments/assets/3c3caad1-a575-4196-bd5d-0f703c98a601" />

**Receipt**


<img width="737" height="557" alt="receipt" src="https://github.com/user-attachments/assets/91905532-8629-4b76-b846-c82b4c049e7e" />



## Demo (Video Walkthrough)

[![Watch Demo](https://cdn.loom.com/sessions/thumbnails/b8a88377f7544797aab1c3a944f7116d-with-play.gif)](https://www.loom.com/share/b8a88377f7544797aab1c3a944f7116d)

> The demo showcases:
> - Product grid UI with soft pastel theme
> - Cart add/remove logic synced with backend
> - Checkout modal and generated receipt



## Tech Stack

**Frontend**
- React (Hooks)
- Tailwind CSS (v3.4)  
- Fetch API (no Redux or external state libs)

**Backend**
- Node.js + Express.js
- In-memory cart + product catalog
- Stateless, no database required

---

## Features

### Product Catalog
- Pulls product list from backend API
- Quantity selector + **Add to Cart**

### Shopping Cart
- Real-time cart updates
- Remove items
- Total cost always synchronized with backend

### Checkout & Receipt
- Modal collects name + email
- Sends order to backend
- Backend returns a generated receipt:
  - Items purchased
  - Total price
  - Timestamp
  - Receipt ID
- Cart clears automatically after checkout

---

## API Endpoints

| Method | Endpoint | Description |
|-------|----------|-------------|
| GET | `/api/products` | Fetch product list |
| GET | `/api/cart` | Fetch current cart |
| POST | `/api/cart` | Add / update item |
| DELETE | `/api/cart/:id` | Remove item |
| POST | `/api/checkout` | Generate receipt |

---

## **Setup & Run**

### Backend
cd backend
npm install
npm start

Server URL:
http://localhost:4000

### Frontend
cd frontend
npm install
npm start

---

## Custom Brand Theme

`tailwind.config.js`
extend: {
colors: {
vibe1: "#F5EEE6",
vibe2: "#FFF8E3",
vibe3: "#F3D7CA",
vibe4: "#E6A4B4",
},
}
Used across UI for a unified soft pastel aesthetic.

---

## Purpose

This project demonstrates:
- Clean React component state flow
- API integration with meaningful sync logic
- UI consistency driven by design tokens (custom Tailwind palette)
- Working checkout flow with receipt output

Not meant for production e-commerce, but optimized for **clarity, readability, and evaluation**.

---

## Author
Made with by **Hafsa Jaziba**

