# Notes App 📝

A beautiful, modern notes application built with React and Tailwind CSS. Create, view, and manage your notes with an elegant, responsive interface.

## Screenshot

![Notes App Screenshot](src\assets\notesAppSS.png)

## Features

✨ **Key Features:**

- ➕ Create notes with a title and detailed content
- 🎨 Beautiful card-based UI with gradient backgrounds
- 🖼️ Background images on note cards for visual appeal
- 📱 Fully responsive design (mobile-first, optimized for desktop)
- 🗑️ Delete notes with a single click
- ⚡ Fast and smooth interactions
- 🌗 Modern dark theme with light panels

## Tech Stack

- **Frontend Framework:** React 19.2.6
- **Build Tool:** Vite 8.0.12
- **Styling:** Tailwind CSS 4.3.1
- **Icons:** Lucide React 1.18.0
- **Component Architecture:** Modular React components

## Project Structure

```
src/
├── App.jsx              # Main app component
├── main.jsx             # Entry point
├── index.css            # Tailwind CSS import
├── App.css              # App styles
├── components/
│   ├── NotesForm.jsx    # Form for creating notes
│   ├── NoteCard.jsx     # Individual note card component
│   └── NotesList.jsx    # Notes grid container
└── assets/              # Images and static files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd notes-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Usage

1. **Add a Note:** Enter a title and content in the form on the left
2. **Submit:** Click "Add Notes" button
3. **View:** Your note appears in the grid on the right
4. **Delete:** Click the delete button (❌) on any note to remove it

## Component Details

### NotesForm

Handles user input for creating new notes with title and content fields.

### NoteCard

Displays individual notes with styling, delete button, and hover effects.

### NotesList

Manages the grid layout and renders all note cards.

## Styling Highlights

- Dark modern background (`bg-blue-950`)
- Light panel containers with subtle shadows
- Gradient note cards with background images
- Smooth hover animations and transitions
- Responsive grid layout (1 column on mobile, 2 columns on desktop)
- Premium card design with gradient overlays

## Future Enhancements

- 📌 Pin favorite notes
- 🔍 Search functionality
- 🏷️ Note categories/tags
- 💾 Local storage persistence
- 🌙 Dark/light theme toggle
- 📤 Export notes feature

## License

This project is open source and available under the MIT License.

## Credits

Built as a learning project using modern React and Tailwind CSS best practices.
