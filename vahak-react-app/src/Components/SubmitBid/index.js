import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
function SubmitBid() {
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Form className="p-4" style={{ width: "350px" }}>
        <div class="col-12">
          <Card style={{ width: "350px", border: "0" }}>
            <Card.Text></Card.Text>
            <Card.Body></Card.Body>
          </Card>
        </div>
        <Button
          type="submit"
          className=" btn btn-primary col-12"
          variant="primary"
        >
          Submit Bid
        </Button>
      </Form>
    </div>
  );

  <div></div>;
}

export default SubmitBid;
