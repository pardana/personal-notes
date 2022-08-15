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
        {/* <NoteItem datas={this.state.datas} /> */}
        {this.state.datas.map((data) => (
          <NoteItem 
            key={data.id} 
            id={data.id} 
            body={data.body}
            title={data.title} 
            createdAt={data.createdAt}
            {...data} />
        ))}
      </div>
    );
  }
}

export default NoteList;
