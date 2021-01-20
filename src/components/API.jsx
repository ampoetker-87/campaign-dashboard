import React from "react";

class MyComponent extends React.Component {
  componentDidMount() {
    const apiUrl = "https://api.github.com/users/hacktivist123/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }
  render() {
    return (
      <div>
        <h1>my Component has Mounted, Check the browser 'console' </h1>;
      </div>
    );
  }
}
export default MyComponent;
