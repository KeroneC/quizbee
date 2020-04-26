import React from "react";
import Clock from "./Clock";

const Title = (props) => {
  if (props.status === 0) {
    return (
      <div className="title">
        <center>Cyber Security HELL</center>
      </div>
    );
  } else {
    return (
      <div className="title">
        <Clock />
      </div>
    );
  }
};

export default Title;
