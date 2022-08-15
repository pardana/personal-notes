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
  }

  onDeleteHandler = (itemId) => {
    const datas = this.state.datas.filter((data) => data.id !== itemId);
    this.setState({ datas });
  };

  render() {
    const { datas } = this.state;
    const notesAktif = datas.filter((data) => data.archived === false);
    const notesArsip = datas.filter((data) => data.archived === true);

    return (
      <div className="note-app__body">
        <NoteInput />
        <h2>Catatan Aktif</h2>
        {notesAktif.length !== 0 && notesAktif ? (
          <NoteList datas={datas} onDelete={this.onDeleteHandler} />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}

        <h2>Arsip</h2>

        {notesArsip.length !== 0 ? (
          <NoteListArsip datas={datas} onDelete={this.onDeleteHandler} />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    );
  }
}

export default NoteBody;
