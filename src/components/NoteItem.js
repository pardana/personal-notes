import React from "react";
import NoteItemContent from "./NoteItemContent";

export default function NoteItem({ datas }) {
  return (
    <div className="note-item">
      {datas.map((data) => (
        <NoteItemContent
          key={data.id}
          id={data.id}
          title={data.title}
          {...data}
        />
        // console.log(data)
      ))}
    </div>
  );
}
