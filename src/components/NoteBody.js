import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListArsip from "./NoteListArsip";

function NoteBody({
  datas,
  addNote,
  onDelete,
  onArchived,
  notesAktif,
  notesArsip,
}) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      {notesAktif.length !== 0 && notesAktif ? (
        <NoteList
          datas={datas}
          onDelete={onDelete}
          onArchived={onArchived}
          label="Arsipkan"
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      <h2>Arsip</h2>

      {notesArsip.length !== 0 ? (
        <NoteListArsip
          datas={datas}
          onDelete={onDelete}
          onArchived={onArchived}
          label="Pindahkan"
        />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteBody;
