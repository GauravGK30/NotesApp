# 📝 Notes App

A simple Notes App built using **HTML**, **CSS**, and **JavaScript** that stores your notes in the browser using **LocalStorage**. 
You can **add** and **delete** notes, and your data stays saved even after refreshing or closing the browser.

## 🚀 Features

- ➕ Add new notes
- 🗑️ Delete individual notes
- 💾 Stores notes using `localStorage` (no backend required)
- 📱 Responsive design for mobile and desktop

- ## 🛠️ Built With

- HTML
- CSS
- JavaScript
- LocalStorage API

  
## 🧠 How It Works

1. **Adding Notes:**
   - User types in a note and clicks "Add Note".
   - Note gets stored in `localStorage` and rendered on the screen.

2. **Deleting Notes:**
   - Each note has a "Delete" button.
   - On clicking it, the note is removed from both the screen and `localStorage`.

3. **Persistence:**
   - On page reload, the app loads all notes from `localStorage`.
