import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ datas, onDelete, onArchived, label }) {
  return (
    <div className="notes-list">
      {datas
        .filter((data) => data.archived === false)
        .map((data) => (
          <NoteItem
            key={data.id}
            id={data.id}
            body={data.body}
            title={data.title}
            createdAt={data.createdAt}
            onDelete={onDelete}
            onArchived={onArchived}
            label={label}
            {...data}
          />
        ))}
    </div>
  );
}

export default NoteList;
