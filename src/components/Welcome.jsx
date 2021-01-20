import React from "react";

function Welcome() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const today = new Date();
  return (
    <div className="intro">
      <h1>Welcome to the Campaign Planner</h1>
      <h2>Today is {today.toLocaleDateString("en-US", options)}</h2>
    </div>
  );
}

export default Welcome;
