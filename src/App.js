import React from "react";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";
import { getInitialData } from "../src/utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state = {
      datas: getInitialData(),
      search: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
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
    alert("Data Tersimpan");
  }

  onSearchHandler(title) {
    let notes;
    if (title !== "" && title.length > 0) {
      notes = this.state.datas.filter((note) => {
        return note.title.toLowerCase().includes(title.toLowerCase());
      });
    } else {
      notes = getInitialData();
    }
    this.setState({ datas: notes });
    notes.preventDefault();
  }

  render() {
    const { datas } = this.state;
    const notesAktif = datas.filter((data) => data.archived === false);
    const notesArsip = datas.filter((data) => data.archived === true);
    const searchNotes = !this.state.search
      ? this.state.notes
      : this.state.notes.filter((note) =>
          note.title.toLowerCase().match(this.state.search)
        );

    return (
      <>
        <NoteHeader onSearch={this.onSearchHandler} />
        <NoteBody
          datas={datas}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchivedHandler}
          notesAktif={notesAktif}
          notesArsip={notesArsip}
        />
      </>
    );
  }
}

export default App;
