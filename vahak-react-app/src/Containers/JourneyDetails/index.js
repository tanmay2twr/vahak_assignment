import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function JourneyDetails(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let num = props.num;
    if (props.num < 4) {
      num = props.num + 1;
    }
    props.changeScreen(num);
  };
  return (
    <div className="container">
      <Form style={{ padding: "9rem 35%" }} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="col-md-6" controlId="formGridLocation">
            <Form.Label>Source Location *</Form.Label>
            <Form.Control
              type="text"
              name="sourceLocation"
              value={props.journeyDetails.sourceLocation}
              onChange={(event) => props.updateJourneyDetails(event)}
            />
          </Form.Group>

          <Form.Group className="col-md-6" controlId="formGridDestination">
            <Form.Label>Destination *</Form.Label>
            <Form.Control
              type="text"
              name="destination"
              value={props.journeyDetails.destination}
              onChange={(event) => props.updateJourneyDetails(event)}
              placeholder="Destination"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridCar">
          <Form.Label>Enter Car type *</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            value={props.journeyDetails.carType}
            onChange={(event) => props.updateJourneyDetails(event)}
            name="carType"
          >
            <option>None</option>
            <option value="HatchBonSubmit={handleSubmit}ack">HatchBack</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridTraveller">
          <Form.Label>Number of Travellers</Form.Label>
          <Form.Control
            name="numOfTravellers"
            value={props.journeyDetails.numOfTravellers}
            onChange={(event) => props.updateJourneyDetails(event)}
            placeholder=""
          />
        </Form.Group>

        <Button
          className=" btn btn-primary col-12"
          variant="primary"
          type="submit"
        >
          Enter Bid Details
        </Button>
      </Form>
    </div>
  );
}

export default JourneyDetails;
