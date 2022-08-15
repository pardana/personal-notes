import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListArsip from "./NoteListArsip";
import { getInitialData } from "../utils/index";

class NoteBody extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state = {
      datas: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler = (itemId) => {
    const datas = this.state.datas.filter((data) => data.id !== itemId);
    this.setState({ datas });
  };

  onArchivedHandler = (itemId) => {
    const newNotes = [...this.state.datas];
    const noteIndex = this.state.datas.findIndex((data) => data.id === itemId);

    newNotes[noteIndex].archived = !newNotes[noteIndex].archived;
    this.setState({ datas: newNotes });
  };

  onAddNoteHandler({ judul, catatan }) {
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: +new Date(),
            title: judul,
            body: catatan,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const { datas } = this.state;
    const notesAktif = datas.filter((data) => data.archived === false);
    const notesArsip = datas.filter((data) => data.archived === true);

    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        {notesAktif.length !== 0 && notesAktif ? (
          <NoteList
            datas={datas}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
            label="Arsipkan"
          />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}

        <h2>Arsip</h2>

        {notesArsip.length !== 0 ? (
          <NoteListArsip
            datas={datas}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
            label="Pindahkan"
          />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    );
  }
}

export default NoteBody;
