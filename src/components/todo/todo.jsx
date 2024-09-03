import { useState } from 'react';
import { Button } from '../button';
import { deleteBTN } from '../../assets';
import styles from "./styles.module.css"

export const NoteSpace = () => {
  const [notes, setNotes] = useState(['']); 

  const handleAddNote = (index, newNote) => {
    const updatedNotes = notes.map((note, i) => (i === index ? newNote : note));
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (indexToDelete) => {
    if (notes.length === 1) {
      
      setNotes(['']);
    } else {
      const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
      setNotes(updatedNotes);
    }
  };

  return (
    <div>
      <h1>Note</h1>
      {notes.map((note, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} className={styles.note}>
          <textarea
          className={styles.note}
            value={note}
            placeholder="Write or paste anything here..."
            onChange={(e) => handleAddNote(index, e.target.value)}
            rows="4"
            style={{ flexGrow: 1, marginRight: '10px', resize: 'none' }}
          />
          <Button
          className={styles.deleteBTN}
          onClick={() => handleDeleteNote(index)}
          img={deleteBTN}
          />
        </div>
      ))}
    </div>
  );
};
