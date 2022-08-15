import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

export default function NoteItem({ key, id, body, title, createdAt }) {
  return (
    <div className="note-item">
      <NoteItemContent key={key} id={id} body={body} title={title} createdAt={createdAt} />
      <NoteItemAction />
    </div>
  );
}
