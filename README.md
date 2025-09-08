# 🎬 Skyline Movie Catalog

A **fullstack movie catalog application** built for an airline company.  
The system allows passengers to log in, browse movies, leave comments, and rate movies, while administrators can manage the catalog and moderate reviews.

---

## 🚀 Tech Stack

### Frontend

- **Next.js 15** (React 19 + TypeScript)
- **TailwindCSS 4** (responsive styling)
- **NextAuth.js** (authentication)
- **Axios** (API calls)

### Backend

- **Node.js + Express 5**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **bcryptjs** (password hashing)
- **dotenv** (environment management)

---

## ✨ Features

- 🔑 **Authentication**: Secure login/logout with JWT
- 🎥 **Movie Catalog**: Covers, titles, synopsis, average rating
- 💬 **Comments**: Users can add, edit, delete, and view comments
- ⭐ **Ratings**: Star rating system with average ratings
- 👤 **User Panel**: Personal activity (comments & ratings)
- 🛠 **Admin Panel**: Manage movies, comments, and reviews

---

## 📂 Project Structure

```
skyline/
│── frontend/         # Next.js app (UI + NextAuth)
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── ...
│
│── backend/          # Node.js + Express API
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── scripts/
│   │    ├── seed.js          # Master seeding script (admin + genres)
│   │    ├── createAdmin.js   # (optional) create only admin user
│   │    └── createGenres.js  # (optional) insert only genres
│   └── ...
│
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Prerequisites

- Node.js (>= 18)
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Git

---

### 2️⃣ Clone Repository

```bash
git clone https://github.com/RakeshKumarHR/skyline.git
cd skyline
```

---

### 3️⃣ Backend Setup

```bash
cd skyline_backend
npm install

# Copy environment variables
cp .env.example .env
```

#### 🔐 Example `.env` (Backend)

```env
PORT=8000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

# Admin user credentials
ADMIN_EMAIL=admin@skyline.com
ADMIN_PASSWORD=Admin@123
```

#### ▶️ Start Backend

```bash
# Development mode
npm run dev

# Production mode
npm start
```

📌 Runs on → `http://localhost:8000`

---

### 4️⃣ Database Seeding

To create an **admin user** and **default genres**, run:

```bash
node scripts/seed.js
```

- Creates an admin user with email/password from `.env`
- Inserts default genres (`Action, Drama, Comedy, Thriller, Romance, Sci-Fi, Horror`)

---

### 5️⃣ Frontend Setup

```bash
cd ../skyline_frontend
npm install

# Copy environment variables
cp .env.local.example .env.local
```

#### 🔐 Example `.env.local` (Frontend)

```env
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
API_URL=http://localhost:8000
```

#### ▶️ Start Frontend

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

📌 Runs on → `http://localhost:3000`

---

## 📜 API Endpoints

### Auth

- `POST /api/auth/register` → Register user
- `POST /api/auth/login` → Login user

### Movies

- `GET /api/movies` → Get all movies
- `POST /api/movies` → Add movie (admin)
- `PUT /api/movies/:id` → Update movie (admin)
- `DELETE /api/movies/:id` → Delete movie (admin)

### Comments

- `POST /api/movies/:id/comments` → Add comment
- `GET /api/movies/:id/comments` → Fetch comments

### Ratings

- `POST /api/movies/:id/rate` → Rate movie
- `GET /api/movies/:id/ratings` → Get ratings

---

## 👨‍💻 Author

**Rakesh Kumar**  
📌 [GitHub](https://github.com/RakeshKumarHR)

---
