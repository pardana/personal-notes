import React from "react";
import NoteItem from "./NoteItem";
import { getInitialData } from "../utils/index";

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state = {
      datas: getInitialData(),
    };
  }

  render() {
    return (
      <div className="notes-list">
        <NoteItem datas={this.state.datas} />
      </div>
    );
  }
}

export default NoteList;
