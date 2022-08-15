import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ datas, onDelete }) {
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
            archived={data.archived}
            createdAt={data.createdAt}
            onDelete={onDelete}
            {...data}
          />
        ))}
    </div>
  );
}

export default NoteList;
