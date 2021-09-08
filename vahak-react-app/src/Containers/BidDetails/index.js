import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./style.css";
import Form from "react-bootstrap/Form";

function BidDetails(props) {
  const [next, setNext] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let num = props.num;
    if (props.num < 4) {
      num = props.num + 1;
    }
    props.changeScreen(num);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card className="card border-0 p-4" style={{ width: "500px" }}>
          <Card.Body className="">
            <Card.Text style={{ display: "flex", justifyContent: "center" }}>
              <h1 style={{ fontSize: "60px" }}>₹ </h1>
              <input
                type="text"
                style={{ fontSize: "60px", width: "500" }}
                className="border-0"
                value={props.bidAmount}
                onChange={(event) => props.changeBidAmount(event.target.value)}
              />
            </Card.Text>
            {next === 0 && (
              <Button
                className=" btn btn-primary col-12"
                variant="primary"
                type="submit"
                disabled={props.bidAmount === 0}
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
                <Form
                  className="p-4"
                  style={{ width: "500px" }}
                  onSubmit={handleSubmit}
                >
                  <Form.Group
                    className="col-md-6"
                    controlId="formGridDestination"
                  >
                    <Form.Label>Mobile Number *</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobileNum"
                      value={props.details.mobileNum}
                      onChange={(event) => props.updateDetails(event)}
                      placeholder="Mobile Number"
                    />
                  </Form.Group>
                  <Form.Group
                    className="col-md-6"
                    controlId="formGridDestination"
                  >
                    <Form.Label>Enter your Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={props.details.name}
                      onChange={(event) => props.updateDetails(event)}
                      placeholder="Enter your Name "
                    />
                  </Form.Group>
                  <Form.Group
                    className="col-md-6"
                    controlId="formGridDestination"
                  >
                    <Form.Label>Enter Remarks (optional)</Form.Label>
                    <Form.Control
                      type="text"
                      name="remarks"
                      value={props.details.remarks}
                      onChange={(event) => props.updateDetails(event)}
                      placeholder="Remarks"
                    />
                  </Form.Group>
                  <Button
                    className=" btn btn-primary col-12"
                    variant="primary"
                    type="submit"
                  >
                    Verify via OTP
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default BidDetails;
