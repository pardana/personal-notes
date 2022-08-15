import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { getInitialData } from "../utils/index";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-item">
        <NoteItemContent
          key={this.props.key}
          id={this.props.id}
          body={this.props.body}
          title={this.props.title}
          archived={this.props.archived}
          createdAt={this.props.createdAt}
        />
        <NoteItemAction
          key={this.props.key}
          id={this.props.id}
          archived={this.props.archived}
          onDelete={this.props.onDelete}
        />
      </div>
    );
  }
}

export default NoteItem;
