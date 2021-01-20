import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import CreateCampaign from "./CreateCampaign";
import Campaign from "./Campaign";

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

export default function ActiveCampaigns() {
  const classes = useStyles();
  const [campaigns, setCampaigns] = useState([]);
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric"
  // };
  // const today = new Date();

  function addCampaign(campaign) {
    setCampaigns((prevCampaigns) => {
      return [...prevCampaigns, campaign];
    });
  }

  function deleteCampaign(id) {
    setCampaigns((prevCampaigns) => {
      return prevCampaigns.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Campaigns" />

      <CardContent>
        <CreateCampaign onAdd={addCampaign} />
        {campaigns.map((campaignItem, index) => (
          <Campaign
            key={index}
            id={index}
            name={campaignItem.name}
            summary={campaignItem.summary}
            channels={campaignItem.channels}
            due={campaignItem.due}
            onDelete={deleteCampaign}
          />
        ))}
      </CardContent>
    </Card>
  );
}
