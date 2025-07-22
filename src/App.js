import React, { useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BlogPage from './components/BlogPage';
import NotesPage from './components/NotesPage';

function App() {
  const blogRef = useRef(null);
  const notesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <NavBar
        onHomeClick={() => scrollToSection(blogRef)}
        onNotesClick={() => scrollToSection(notesRef)}
      />

      <div ref={blogRef}>
        <BlogPage />
      </div>

      <div ref={notesRef}>
        <NotesPage />
      </div>
    </div>
  );
}

export default App;
