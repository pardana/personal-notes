import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ key, id, body, title, onArchived, createdAt, onDelete, label }) {
  return (
    <div className="note-item">
      <NoteItemContent
        key={key}
        id={id}
        body={body}
        title={title}
        createdAt={createdAt}
      />
      <NoteItemAction
        key={key}
        id={id}
        onArchived={onArchived}
        onDelete={onDelete}
        label={label}
      />
    </div>
  );
}

export default NoteItem;
