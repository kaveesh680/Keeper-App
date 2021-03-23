import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';

function CreateArea(props) {

    const [note, setNote] = useState({ title: "", content: "" });
    const [show, setShow] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevValue => ({ ...prevValue, [name]: value }))
    }

    function handleClick() {
        setShow(true);
    }



    return (<div className="create-note form">

        {show ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title} /> : null}
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={show ? "3" : "1"} value={note.content} />
        <Zoom in={show}>
            <Fab onClick={() => { props.onAdd(note); setNote({ title: "", content: "" }) }}>
                <AddIcon />
            </Fab>
        </Zoom>


    </div>);
}

export default CreateArea;