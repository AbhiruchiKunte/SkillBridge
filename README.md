# 🌉 SkillBridge

**SkillBridge** is a web-based platform designed to connect **skilled volunteers** with **NGOs** for both short-term and long-term volunteer opportunities.  
The platform promotes **social impact** by enabling NGOs to post skill-based opportunities while allowing volunteers to discover, apply for, and collaborate on meaningful initiatives.

This project was developed as part of my **Infosys Springboard Virtual Internship 6.0 (Batch 4)** in the **Angular Full Stack domain** 🚀✨

---

<img width="1410" alt="SkillBridge Preview" src="https://github.com/user-attachments/assets/2b068c00-e86d-47ee-84b5-e1a66d06db1b" />

---
## 🛠️ Tech Stack

| Category | Technologies Used |
|--------|------------------|
| **Frontend** | ReactJS, React Router, Socket.io-client, Axios, React-Hot-Toast |
| **Backend** | Node.js, ExpressJS |
| **Database** | MongoDB (Mongoose) |
| **Communication & Utilities** | Socket.io (Real-time Chat), Nodemailer (Email Notifications) |
| **Authentication & Security** | JSON Web Tokens (JWT), Cookie-parser, Environment variables (`.env`) |

---

## 🚀 Key Features

- **Personalized User Experience**  
  Separate registration, onboarding, and dashboard workflows for **Volunteers** and **NGOs**.

- **Opportunity Management**  
  NGOs can create and manage skill-based opportunities, while volunteers can explore and apply directly through the platform.

- **Real-time Chat System**  
  Seamless real-time communication between NGOs and volunteers powered by **Socket.io**.

- **Profile Customization**  
  Users can update personal information, change avatars, and reset passwords.

- **Live Notifications**  
  Instant feedback and alerts using **React-Hot-Toast** for an improved user experience.

- **Secure Authentication**  
  Robust session handling with JWT and protected routes.

---
## 📁 Project Structure

```txt
📁 SkillBridge
├── 📁 frontend                  # React Frontend
│   ├── 📁 node_modules           # Node.js dependencies
│   ├── 📁 public
│   │   └── index.html            # Browser entry point
│   ├── 📁 src
│   │   ├── 📁 components         # Reusable UI components (Navbar, Footer)
│   │   ├── 📁 contexts
│   │   │   └── AuthContext.jsx   # Manages user session & utilities
│   │   ├── 📁 pages
│   │   │   ├── 📁 Chats          # Real-time chat interface
│   │   │   ├── 📁 Assets         # Public images
│   │   │   ├── 📁 Auth           # Login, registration & onboarding
│   │   │   ├── 📁 Dashboard      # Volunteer & NGO dashboards
│   │   │   ├── 📁 Profiles       # User profile management
│   │   │   └── 📁 Utils          # Toast notifications & helpers
│   │   │
│   │   ├── App.jsx               # Main app wrapped in layout
│   │   └── index.js              # React entry point
│   │
│   ├── .env                      # Frontend environment variables
│   └── package.json
│
├── 📁 backend                   # ExpressJS Backend
│   ├── 📁 node_modules           # Node.js dependencies
│   ├── 📁 src
│   │   ├── 📁 config             # Database & storage configuration
│   │   ├── 📁 controllers        # Business logic (auth, users, opportunities)
│   │   ├── 📁 middleware         # Authentication & route protection
│   │   ├── 📁 models             # MongoDB schemas
│   │   ├── 📁 routes             # API endpoints
│   │   ├── 📁 utils              # Utility functions (JWT, helpers)
│   │   ├── 📁 uploads            # Uploaded files
│   │   └── server.js             # Express & Socket.io server entry
│   │
│   ├── .env                      # Backend environment variables
│   └── package.json
│
└── README.md                     # Project documentation
```
---

## 🧪 Usage

- Register as a **Volunteer** or an **NGO**

### NGOs can:
- Create and manage skill-based opportunities  
- Communicate with volunteers in real time  

### Volunteers can:
- Browse available opportunities  
- Apply directly through the platform  
- Chat with NGOs  

- Receive **live notifications** and **email alerts**

---

## 🌟 Internship Acknowledgment

This project was developed during the **Infosys Springboard Virtual Internship 6.0 (Batch 4)**.  
It helped strengthen my understanding of:

- Full Stack Development  
- REST APIs  
- Real-time communication using Socket.io  
- Secure authentication using JWT  
- MongoDB data modeling  
