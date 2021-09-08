import React from "react";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapForm from "react-bootstrap/Form";
import "./form.scss";

function BidDetailsForm(props) {
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
            <div
              className="container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Form className="p-4" >
                <div class="col-12">
                  <Card style={{ width: "350px", border: "0" }}>
                    <BootstrapForm.Group className="col-md-12  mt-3">
                      <BootstrapForm.Label>
                        Source Location *
                      </BootstrapForm.Label>
                      <Field
                        type="text"
                        class="form-control"
                        id="sourceLocation"
                        name="sourceLocation"
                        placeholder="Source Location"
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
                    <BootstrapForm.Group className="col-md-12  mt-3">
                      <BootstrapForm.Label>Destination *</BootstrapForm.Label>
                      <Field
                        type="text"
                        class="form-control"
                        id="destination"
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

                    <BootstrapForm.Group
                      className="col-md-12  mt-3"
                      controlId="formGridDestination"
                    >
                      <BootstrapForm.Label>
                        Enter Car Type *
                      </BootstrapForm.Label>
                      <Field
                        as="select"
                        type="text"
                        class="form-control"
                        id="carType"
                        name="carType"
                        style={{ height: "50px" }}
                        className={
                          errors.carType && touched.carType
                            ? "input-error"
                            : null
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
                    <BootstrapForm.Group className="col-md-12  mt-3">
                      <BootstrapForm.Label>
                        Number of Travellers
                      </BootstrapForm.Label>
                      <Field
                        type="text"
                        class="form-control"
                        id="numOfTravellers"
                        name="numOfTravellers"
                        style={{ height: "50px" }}
                      />
                    </BootstrapForm.Group>
                  </Card>
                </div>
                <Button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                  className=" btn btn-primary col-12 mt-3"
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
      <div></div>
    </>
  );
}

export default BidDetailsForm;
