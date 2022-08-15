import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

export default function NoteItem({ key, id, body, title, archived, createdAt }) {
  return (
    <div className="note-item">
      <NoteItemContent key={key} id={id} body={body} title={title} archived={archived} createdAt={createdAt}
       />
      <NoteItemAction />
    </div>
  );
}
