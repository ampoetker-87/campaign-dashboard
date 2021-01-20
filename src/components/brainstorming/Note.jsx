import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const today = new Date();

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <footer className="note-footer">
        {today.toLocaleDateString("en-US", options)}
      </footer>
      <button
        className="delete-button"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
