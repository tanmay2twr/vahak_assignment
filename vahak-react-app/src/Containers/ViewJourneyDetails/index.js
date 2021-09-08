import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from "@material-ui/icons/Edit";
function ViewJourneyDetails(props) {
  const handleClick = () => {
    let num = 1;
    props.changeScreen(num);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          className="card border-0 border-bottom p-4"
          style={{ width: "350px", border: "0" }}
        >
          <Card.Body className="">
            <Card.Subtitle className="mb-2 text-muted">
              <div className="row">
                <div className="col-8" style={{ fontSize: "15px"}}>JOURNEY DETAILS </div>
                <div
                  className="col-4"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <EditIcon
                    onClick={() => {
                      handleClick();
                    }}
                  />
                  Edit
                </div>
              </div>
            </Card.Subtitle>

            <Card.Text>
              {props.journeyDetails.sourceLocation} -{" "}
              {props.journeyDetails.destination} <br />
              {props.journeyDetails.numOfTravellers} Persons,{" "}
              {props.journeyDetails.carType}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ViewJourneyDetails;
