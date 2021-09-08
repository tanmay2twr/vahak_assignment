import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import { Formik,Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form.scss";
import BootstrapForm from "react-bootstrap/Form";
function JourneyDetails(props) {
  const validate = Yup.object({
    sourceLocation: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    destination: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    carType: Yup.string().required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={props.journeyDetails}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
          props.setJourneyDetails(values);
          console.log(props.journeyDetails);
          let num = props.num;
          if (props.num < 4) {
            num = props.num + 1;
          }
          props.changeScreen(num);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form className="p-4" style={{ width: "500px" }}>
                <Row className="mb-3">
                  <BootstrapForm.Group
                    className="col-md-6"
                    controlId="formGridLocation"
                  >
                    <BootstrapForm.Label>Source Location *</BootstrapForm.Label>
                    <Field
                      type="text"
                      name="sourceLocation"
                      style={{ height: "50px" }}
                      className={
                        errors.sourceLocation && touched.sourceLocation
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="sourceLocation"
                      component="span"
                      className="error"
                    />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group
                    className="col-md-6"
                    controlId="formGridDestination"
                  >
                    <BootstrapForm.Label>Destination *</BootstrapForm.Label>
                    <Field
                      type="text"
                      name="destination"
                      placeholder="Destination"
                      style={{ height: "50px" }}
                      className={
                        errors.destination && touched.destination
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="destination"
                      component="span"
                      className="error"
                    />
                  </BootstrapForm.Group>
                </Row>

                <BootstrapForm.Group className="mb-3" controlId="formGridCar">
                  <BootstrapForm.Label>Enter Car type *</BootstrapForm.Label>
                  <Field
                    as="select"
                    name="carType"
                    style={{ height: "50px" }}
                    className={
                      errors.carType && touched.carType ? "input-error" : null
                    }
                  >
                    <option>None</option>
                    <option value="Hatchback">HatchBack</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                  </Field>
                  <ErrorMessage
                    name="carType"
                    component="span"
                    className="error"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group
                  className="mb-3"
                  controlId="formGridTraveller"
                >
                  <BootstrapForm.Label>
                    Number of Travellers
                  </BootstrapForm.Label>
                  <Field name="numOfTravellers" style={{ height: "50px" }} />
                </BootstrapForm.Group>

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
        }}
      </Formik>
    </>
  );
}

export default JourneyDetails;
