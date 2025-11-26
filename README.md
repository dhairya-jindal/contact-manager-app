# 📇 Contact Manager App (React + JSON Server + REST API)

A clean **Contact Management System** built using **ReactJS**, **React Router v6**, **Axios REST API**, and **JSON Server** as a fake backend.

This project performs real API-based **CRUD operations** while maintaining a smooth **Single Page Application (SPA)** flow and **Semantic UI styling**.

---

## 🚀 Features

✅ Add Contacts (Name + Email)  
✅ Edit Contacts (Pre-filled Update Form)  
✅ Delete Contacts (Using Trash Icon)  
✅ Search Contacts (Real-time filtering)  
✅ Client-side Routing (No page reload)  
✅ Persistent Data (Saved in browser + JSON DB)  
✅ Unique Contact IDs (Generated using UUID)  
✅ Responsive row layout using Flexbox  
✅ Semantic UI clean interface

---

## 🧠 Tech Stack

| Technology | Usage |
|---|---|
| ReactJS | Component-based UI |
| React Router v6 | SPA Routing |
| Axios | REST API Communication |
| JSON Server | Fake backend database server |
| UUID | Generates unique contact IDs |
| LocalStorage | Optional browser persistence |
| Semantic UI | UI styling and icons |

---

## 📌 API Endpoints

GET /contacts → Fetch all contacts
POST /contacts → Add a new contact
PUT /contacts/:id → Update an existing contact
DELETE /contacts/:id → Delete a contact

yaml
Copy code

---

## 🛠 Installation & Setup

### 1. Install all dependencies
```
npm install
2. Start the React app
sh
Copy code
npm start
3. Start JSON server (in a separate terminal)
sh
Copy code
npm run server
⚡ JSON Server runs on port 3006 (as configured in your project)

🔁 UI Flow
pgsql
Copy code
Contact List (/)
   │
   ├── Click "Add More Contacts" → /add
   │         └── Submit form → Redirects back to /
   │
   ├── Trash icon click → DELETE API call → Updates UI
   │
   ├── Typing in search → Filters list in real time
   │
   └── Contact name click → /contact/:id (opens detail page)
             └── Back button returns to /
🧩 React Concepts Used
✅ Covered in this project:
Functional Components

Class Components

Local Component State

Hooks (useState, useEffect)

Vue-like Controlled Forms

Props communication / function drilling

List rendering using map() with key

Search filtering using filter() + includes()

Async API calls using async/await

React Router v6 (Routes, Route, Link, Navigate, useParams, useLocation)

State immutability using spread (...) operator

✅ Folder Structure (Clean & Recommended)
pgsql
Copy code
src/
 ├── api/
 │     └── contacts.js  → Axios instance
 ├── components/
 │     ├── App.js
 │     ├── Header.js
 │     ├── AddContact.js
 │     ├── EditContact.js
 │     ├── ContactList.js
 │     ├── ContactDetail.js
 │     └── ContactCard.js
 ├── images/
 │     └── user.png  → Default avatar
 ├── App.css
 └── index.js  → Entry point
🧪 JSON Server DB (db.json)
json
Copy code
{
  "contacts": []
}
