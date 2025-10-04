# ConnecFriend - Social Networking UI

This project is a **front-end user interface** for a fictional social networking site called **ConnecFriend**, developed using **HTML, CSS, and JavaScript**.  
It demonstrates the core UI features of a social platform, including login, profile viewing, news feed interactions, friend management, and private messaging.

---
##  Features Implemented

### Login Page
- Users can sign in with their username and password.  
- Demo assumes all users already have accounts (no registration page).  

### Profile Page
- Displays personal information, profile picture, bio, and location.  
- Shows a list of all friends.

### Home Page
- Displays **news feed** from all friends.  
- Friends are listed in order of their **last login time** (latest first).  
- Each feed post includes:
  - Friend name & profile picture  
  - News text  
  - Time since last login  
  - Like 👍 and Dislike 👎 buttons  
  - Rating options (🤪 Stupid, 😎 Cool, 🤝 Trustworthy)  
  - Share button to share posts with all or selected friends  

###  Friend Management
- Users can **send friend requests** to others.  
- If a person has added the sender to their **ignore list**, requests are blocked.  

###  Private Messaging
- Users can **send private messages** to any site member.  
- Messages appear instantly in the chat modal window.  
- Chat history is saved in `localStorage`.

---

## Data Storage

- The project uses **browser `localStorage`** for demo data.  
- It stores:
  - Logged-in user info  
  - Friends and posts  
  - Likes, dislikes, shares, ratings, and messages  
- Data resets when localStorage is cleared.

---

## Technologies Used

- **HTML5** – Page structure  
- **CSS3** – Layout and styling  
- **JavaScript (ES6)** – Application logic  
- **LocalStorage** – Simulated backend storage

  ---
```
# Project Structure
ConnecFriend/
│
├── index.html # Login page
├── home.html # Home / News feed page
├── profile.html # User profile page
│
├── css/
│ └── style.css # Styling for the website
│
├── js/
│ └── app.js # JavaScript logic (login, friends, feed, etc.)
│
├── assets/
│ └── avatar_placeholder.svg # Default avatar image
│
└── README.md # Project documentation
```

---
