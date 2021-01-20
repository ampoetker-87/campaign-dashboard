import React from "react";

import Firebase from "firebase";
import config from "./config";

class CreateArea extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    this.getNoteData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getNoteData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    let uid = this.refs.uid.value;

    if (uid && title && content) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].title = title;
      developers[devIndex].content = content;
      this.setState({ developers });
    } else if (title && content) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, title, content });
      this.setState({ developers });
    }

    this.refs.title.value = "";
    this.refs.content.value = "";
    this.refs.uid.value = "";
  };

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.title.value = developer.title;
    this.refs.content.value = developer.content;
  };

  render() {
    const { developers } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Firebase Development Team</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.title}</h5>
                    <p className="card-text">{developer.content}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>Add new team member here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Role</label>
                    <input
                      type="text"
                      ref="role"
                      className="form-control"
                      placeholder="Role"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h3>
                Tutorial{" "}
                <a href="https://sebhastian.com/react-firebase-real-time-database-guide">
                  here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateArea;
