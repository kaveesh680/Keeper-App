import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import CreateArea from './CreateArea.jsx';



function App() {

    const [notes, setNotes] = useState([]);

    function handleClick(note) {
        setNotes((prevValue) => [...prevValue, note])
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={handleClick} />
            {notes.map((note, index) => (<Note
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onChecked={deleteNote}
            />))}


            <Footer />
        </div>
    );
}

export default App;
