import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "white" : "black",
    background: isActive ? "#007bff" : "transparent",
    padding: "8px 12px",
    borderRadius: "5px",
    textDecoration: "none",
    marginRight: "10px"
  });

  return (
    <nav style={{ padding: "15px", background: "#eee" }}>
      <NavLink to="/" style={activeStyle}>Dashboard</NavLink>
      <NavLink to="/courses" style={activeStyle}>Courses</NavLink>
      <NavLink to="/profile" style={activeStyle}>Profile</NavLink>
    </nav>
  );
};

export default NavBar;
