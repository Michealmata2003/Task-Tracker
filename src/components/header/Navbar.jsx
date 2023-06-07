import React from "react";
import {Wrapper, Background} from '../styles/style'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <Background>
      <Wrapper>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/request">Service Request</Link>
            </li>
            <li>
              <Link to="/reservation">Make a Reservation</Link>
            </li>
            <li>
              <Link to="/login">Login </Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </Background>
  );
};

export default Navbar;
