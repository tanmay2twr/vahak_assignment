import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Header(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "100px" }}>
        <h1 className="text-white">{props.text}</h1>
      </Navbar>
    </div>
  );
}
export default Header;
