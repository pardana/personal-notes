import React from "react";

class NoteItemAction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="note-item__action">
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="note-item__delete-button"
        >
          Delete
        </button>
        <button
          onClick={() => this.props.onArchived(this.props.id)}
          className="note-item__archive-button"
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default NoteItemAction;
