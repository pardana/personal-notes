import React from "react";
import NoteItem from "./NoteItem";

function NoteListArsip({ datas, onDelete, onArchived, label }) {
  return (
    <div className="notes-list">
      {datas
        .filter((data) => data.archived === true)
        .map((data) => (
          <NoteItem
            key={data.id}
            id={data.id}
            body={data.body}
            title={data.title}
            onArchived={onArchived}
            createdAt={data.createdAt}
            onDelete={onDelete}
            label={label}
            {...data}
          />
        ))}
    </div>
  );
}

export default NoteListArsip;
