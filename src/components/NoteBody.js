import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListArsip from "./NoteListArsip";

export default function Body() {
  return (
    <div className="note-app__body">
      <NoteInput />
      <h2>Catatan Aktif</h2>
      <NoteList />
      <h2>Arsip</h2>
      {/* <NoteListArsip /> */}
    </div>
  );
}
