import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ key, id, body, title, archived, createdAt, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemContent
        key={key}
        id={id}
        body={body}
        title={title}
        archived={archived}
        createdAt={createdAt}
      />
      <NoteItemAction
        key={key}
        id={id}
        archived={archived}
        onDelete={onDelete}
      />
    </div>
  );
}

export default NoteItem;
