import React, { useState, useRef } from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import '../styles/NotesPage.css';

const NotesPage = () => {
  const [note, setNote] = useState('');
  const [noteList, setNoteList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const editorRefs = useRef({}); // Stores references to editable divs

  const handleAddNote = () => {
    if (note.trim() !== '') {
      setNoteList([note, ...noteList]);
      setNote('');
    }
  };

  const handleSaveEdit = (index) => {
    const updatedText = editorRefs.current[index]?.innerText || '';
    if (updatedText.trim() !== '') {
      const updatedNotes = [...noteList];
      updatedNotes[index] = updatedText;
      setNoteList(updatedNotes);
    }
    setEditIndex(null);
  };

  return (
    <div className="notes-page">
      <div className="containerBox">
        <h3>Your Notes</h3>
        <textarea
          className="notes-input"
          placeholder="Enter your notes here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="submit-button" onClick={handleAddNote}>
          Add Note
        </button>
      </div>

      <div className="notes-header">
        <h2>Notes</h2>
      </div>

      <div className="cards-container">
        {noteList.map((item, index) => (
          <div key={index} className="note-card">
            <div
              className="note-content"
              contentEditable={editIndex === index}
              suppressContentEditableWarning={true}
              ref={(el) => (editorRefs.current[index] = el) && console.log(el)}
            >
              {item}
            </div>

            {editIndex === index ? (
              <button
                className="btn btn-sm btn-light save-button"
                onClick={() => handleSaveEdit(index)}
              >
                <FaSave style={{ color: 'blue', marginRight: '5px' }} />
                Save
              </button>
            ) : (
              <button
                className="btn btn-sm btn-light edit-button"
                onClick={() => setEditIndex(index)}
              >
                <FaEdit size={20} style={{ color: 'green', marginRight: '5px' }} />
                Edit
              </button>
            )}

            <button
              className="btn btn-sm btn-light delete-button"
              onClick={() => setNoteList(noteList.filter((_, i) => i !== index))}
            >
              <FaTrash size={20} style={{ color: 'red', marginRight: '5px' }} />
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
