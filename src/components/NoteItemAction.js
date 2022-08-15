import React from "react";

export default function NoteItemAction() {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button">Delete</button>
      <button className="note-item__archive-button">Arsipkan</button>
    </div>
  );
}
