import React from "react";

function NoteItemContent({ id, title }) {
  return (
    <div className="note-item__content">
      <h3>{title}</h3>
    </div>
  );
}

export default NoteItemContent