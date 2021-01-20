import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import CreateArea from "./CreateArea";
import Note from "./Note";

import firebase from "firebase/app";
import "firebase/database";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function createNewNote(noteId, title, content) {
  firebase.database().ref('notes/' + noteId).set({
    title: title,
    content: content
  });
}

export default function Brainstorming() {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);


  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
      createNewNote();
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Take Notes" />

      <CardContent>
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </CardContent>
    </Card>
  );
}
