import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";

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

export default function Logins() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Logins" />

      <CardContent>
        <div className="logins">
          <button>
            <a
              href="https://www.hubspot.com/"
              className="login-link"
              target="blank"
            >
              CRM
            </a>
          </button>
          <button>
            <a
              href="https://analytics.google.com/"
              className="login-link"
              target="blank"
            >
              Google Analytics
            </a>
          </button>
          <button>
            <a
              href="https://adwords.google.com/"
              className="login-link"
              target="blank"
            >
              Adwords
            </a>
          </button>
          <button>
            <a
              href="https://trends.google.com/"
              className="login-link"
              target="blank"
            >
              Google Trends
            </a>
          </button>
          <button>
            <a
              href="https://www.twitter.com/"
              className="login-link"
              target="blank"
            >
              Twitter
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/"
              className="login-link"
              target="blank"
            >
              LinkedIn
            </a>
          </button>
          <button>
            <a
              href="https://www.facebook.com/"
              className="login-link"
              target="blank"
            >
              Facebook
            </a>
          </button>
          <button>
            <a
              href="https://www.canva.com/"
              className="login-link"
              target="blank"
            >
              Canva
            </a>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
