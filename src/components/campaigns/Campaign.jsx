import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Campaign(props) {
  return (
    <div className="campaign">
      <h1>{props.name}</h1>
      <p>{props.summary}</p>
      <p>Campaign Type: {props.channels}</p>
      <p>Campaign Kickoff: {props.due}</p>
      <p>Campaign folder: </p>
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

export default Campaign;
