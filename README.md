# SkillBridge_Team3
This project aims to create a web-based platform where skilled volunteers can connect with NGOs for short-term or long-term volunteer opportunities. The application allows users to register as volunteers or NGOs, enabling them to post or apply for skill-based opportunities. 

<img width="1410" height="452" alt="image" src="https://github.com/user-attachments/assets/2b068c00-e86d-47ee-84b5-e1a66d06db1b" styles />

# How to run
1. Go to ```frontend/``` and type
```bash
npm i
npm run dev
```
2. Go to ```backend/``` and type
```bash
npm i
npm run dev
```

# Frontend (ReactJS)

```js
📁 node_modules //node.js files
📁 public
   └── index.html // browser entry point
📁 src
   └── 📁 components // footer and navbar
   └── 📁 contexts
          └── AuthContext.jsx // handles compelete user session as well as utility functions.
   └── 📁 pages
          └── 📁 Chats 
          └── 📁 Assets // public images
          └── 📁 Auth // login/register and personalization
          └── 📁 Dashboard
          └── 📁 Profiles
          └── 📁 Utils // toast
   └── App.jsx //homepage wrapped inside layout
   └── Index.js // react layout
.env // for secure variable
package.json
```

## Key Feature:

- ReactToast for event updates
- Profile page for customization, avatar and password change
- Authentication and user session for personalized experience
- Interactive Chat feature for connection between volunteer and ngo

# Backend (ExpressJS)

```js
📁 node_modules //node.js files
📁 src 
   └── 📁 config // root settings for database, file storages etc. (like connection)
   └── 📁 controllers // main logic of auth, users, etc.
   └── 📁 middleware // comes between api routes for adding more logic (like auth, redrecting, ip blocking)
   └── 📁 models // mongodb models
   └── 📁 routes // api routes
   └── 📁 utils // utility like jwt token generation
   └── 📁 uploads // uploaded blobs
   └── server.js //main server
.env // for secure variable
package.json
```

## Key Features

- 
