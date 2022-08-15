import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state = {
      judul: "",
      catatan: "",
    };

    this.onJudulHandler = this.onJudulHandler.bind(this);
    this.onCatatanHandler = this.onCatatanHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onJudulHandler(event) {
    this.setState(() => {
      return {
        judul: event.target.value,
      };
    });
  }

  onCatatanHandler(event) {
    this.setState(() => {
      return {
        catatan: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <h2>Buat Catatan</h2>
          <p className="note-input__title__char-limit">Sisa karakter : 50</p>
          <input
            type="text"
            name="judul"
            className="note-input__title"
            value={this.state.judul}
            onChange={this.onJudulHandler}
            placeholder="Ini adalah judul..."
            required
          />

          <textarea
            type="text"
            name="catatan"
            className="note-input__body"
            value={this.state.catatan}
            onChange={this.onCatatanHandler}
            placeholder="Tuliskan catatanmu disini..."
            required
          ></textarea>

          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
