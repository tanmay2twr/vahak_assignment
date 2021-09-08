import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from "@material-ui/icons/Edit";
function ViewBidDetails(props) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          className="card border-0 border-bottom p-4"
          style={{ width: "500px" }}
        >
          <Card.Body className="">
            <Card.Subtitle className="mb-2 text-muted">
              <div className="col-6">JOURNEY DETAILS </div>
            </Card.Subtitle>
            <div className="row">
              <div className="col-6">
                {" "}
                <Card.Text>
                  {props.bidDetails.mobileNum}
                  <br />
                  {props.bidDetails.name}
                  <br />
                  {props.bidDetails.remarks}
                </Card.Text>
              </div>
              <div
                className="col-6 "
                style={{ position: "absolute", right: "0" }}
              >
                <span
                  className=" border-0"
                  style={{ fontSize: "30px", position: "absolute", right: "0" }}
                >
                  <b>₹</b>{" "}
                  <span style={{ fontSize: "30px" }}>
                    {props.bidDetails.bidAmount}
                  </span>
                  <span style={{ fontSize: "20px",}}>Fixed Price</span>
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ViewBidDetails;
