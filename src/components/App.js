import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNote => {
      return [...prevNote, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
