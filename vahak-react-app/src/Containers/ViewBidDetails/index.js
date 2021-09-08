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
          style={{ width: "350px", border: "0" }}
        >
          <Card.Body className="">
            <Card.Subtitle className="mb-2 text-muted">
              <div className="col-6" style={{ fontSize: "15px"}}>BID DETAILS </div>
            </Card.Subtitle>
            <div className="row">
              <div className="col-8">
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
                className="col-4"
                style={{ position: "absolute", right: "0" }}
              >
                <span
                  className=" border-0"
                  style={{ fontSize: "25px", position: "absolute", right: "0" }}
                >
                  <b>₹</b>{" "}
                  <span style={{ fontSize: "25px" }}>
                    {props.bidDetails.bidAmount}
                  </span><br/>
                  <span style={{ fontSize: "15px",}}>Fixed Price</span>
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
