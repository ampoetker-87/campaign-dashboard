import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import DescriptionIcon from "@material-ui/icons/Description";
import Brainstorming from "./brainstorming/Brainstorming";
import ActiveCampaigns from "./campaigns/ActiveCampaigns";
import Welcome from "./Welcome";
import Logins from "./logins/Logins";
import Drive from "./drive/Drive"

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  const [onBrainstorming, setOnBrainstorming] = useState(false);
  const [onCampaigns, setOnCampaigns] = useState(false);
  const [onLogins, setOnLogins] = useState(false);
  const [onDrive, setOnDrive] = useState(false);

  const brainstormingSwitch = () =>
    setOnBrainstorming((onBrainstorming) => !onBrainstorming);

  const campaignsSwitch = () => setOnCampaigns((onCampaigns) => !onCampaigns);

  const loginsSwitch = () => setOnLogins((onLogins) => !onLogins);

  const driveSwitch = () => setOnDrive((onDrive) => !onDrive);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className="appbar">
        <Toolbar>
          <h2>
            Campaign Planner
          </h2>
        </Toolbar>
      </div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={brainstormingSwitch}>
              <ListItemIcon className="list-icon">
                <OfflineBoltIcon />
              </ListItemIcon>
              <ListItemText>Take Notes</ListItemText>
            </ListItem>
            <ListItem button onClick={campaignsSwitch}>
              <ListItemIcon className="list-icon">
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText>Campaigns</ListItemText>
            </ListItem>
            <ListItem button onClick={loginsSwitch}>
              <ListItemIcon className="list-icon">
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText>Logins</ListItemText>
            </ListItem>
            <ListItem button onClick={driveSwitch}>
              <ListItemIcon className="list-icon">
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText>Google Drive</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Welcome />
        {onBrainstorming ? <Brainstorming /> : null}
        {onCampaigns ? <ActiveCampaigns /> : null}
        {onLogins ? <Logins /> : null}
        {onDrive ? <Drive /> : null}
        <div>
        
        </div>
      </main>
    </div>
  );
}
