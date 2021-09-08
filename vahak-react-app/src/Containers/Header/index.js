import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <div>
      <Navbar className="navbar navbar-light bg-light">
        <div className="container-fluid" style={{ padding: "1rem 7%" }}>
          <a className="navbar-brand" href="#">
            <img
              src="/docs/5.1/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Vahak
          </a>
        </div>
      </Navbar>
      <Navbar className="navbar navbar-light bg-dark ">
        <div className="container-fluid" style={{ justifyContent: "center" }}>
          <p
            className="navbar-brand mb-0 h1 text-white mt-5 mb-5"
            style={{ fontSize: "36px" }}
          >
            {props.text}
          </p>
        </div>
      </Navbar>
    </div>
  );
}
export default Header;
