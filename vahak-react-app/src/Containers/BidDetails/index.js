import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./style.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import BidDetailsForm from "../../Components/BidDetailsForm/index";
function BidDetails(props) {
  const [next, setNext] = useState(0);

  const handleSubmit = (e) => {};
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card className="card border-0 p-4" style={{ width: "500px" }}>
          <Card.Body className="">
            <div className="row">
              <div
                class="input-group mb-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <span className=" border-0" style={{ fontSize: "50px" }}>
                  <b>₹</b>
                </span>
                <input
                  type="text"
                  style={{ fontSize: "50px", width: "200px" }}
                  className="border-0"
                  name="bidAmount"
                  placeholder="0"
                  value={props.bidDetails.bidAmount}
                  onChange={(event) => props.updateBidDetails(event)}
                />
              </div>
            </div>
            <div
              className="m-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Rate Negotiable"
              />
            </div>

            {next === 0 && (
              <Button
                className=" btn btn-primary col-12"
                variant="primary"
                type="submit"
                disabled={
                  props.bidDetails.bidAmount === 0 ||
                  props.bidDetails.bidAmount === ""
                }
                onClick={() => setNext(1)}
              >
                Next
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>{" "}
      {next === 1 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            className="card border-0 border-top p-4"
            style={{ width: "500px" }}
          >
            <Card.Body className="">
              <Card.Text style={{ display: "flex", justifyContent: "center" }}>
                <BidDetailsForm
                  bidDetails={props.bidDetails}
                  changeScreen={props.changeScreen}
                  num={props.num}
                  setBidDetails={props.setBidDetails}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default BidDetails;
