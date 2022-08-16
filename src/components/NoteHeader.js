import React from "react";

function NoteHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    </div>
  );
}

export default NoteHeader;
