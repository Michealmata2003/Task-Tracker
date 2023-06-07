import React from "react";
import "./Hero.css";
// import PropTypes from "prop-types";
import { AddButton } from "../../Button";

const Hero = ({ title, onAdd, showAdd }) => {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      <AddButton onAdd={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? "close" : "Add"} />
    </div>
  );
};

// css in js

// const headingStyle = {
//   color:'red',
// }

Hero.defaultProps = {
  title: "Task Tracker",
};

// Hero.Propstype = {
//   title: PropTypes.string

// }
export default Hero;
