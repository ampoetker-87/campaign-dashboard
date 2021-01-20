import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import Picker from "./Picker"



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

export default function Drive() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader title="Google Drive Docs" />
      <CardContent>
      <div>
          <h1>Drive docs here</h1>
          <Picker />

      </div>

      </CardContent>
    </Card>
  );
}
