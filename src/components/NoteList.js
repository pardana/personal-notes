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

  onDeleteHandler = (itemId) => {
    const datas = this.state.datas.filter((data) => data.id !== itemId);
    this.setState({ datas });
  };

  render() {
    return (
      <div className="notes-list">
        {this.state.datas.map((data) => (
          <NoteItem
            key={data.id}
            id={data.id}
            body={data.body}
            title={data.title}
            archived={data.archived}
            createdAt={data.createdAt}
            onDelete={this.onDeleteHandler}
            {...data}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;
