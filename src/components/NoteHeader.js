import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state = {
      cari: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        cari: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            name="cari"
            value={this.state.cari}
            onChange={this.onSearchHandler}
            placeholder="Cari catatan..."
          />
        </div>
      </div>
    );
  }
}

export default Header;
