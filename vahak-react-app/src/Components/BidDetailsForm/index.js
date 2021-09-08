import React from "react";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import BootstrapForm from "react-bootstrap/Form";
function BidDetailsForm(props) {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    mobileNum: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={props.bidDetails}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
          props.setBidDetails(values);
          console.log(props.bidDetails);
          let num = props.num;
          num = props.num + 1;
          console.log(num);
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
              <Form className="p-4" style={{ width: "500px" }}>
                <div class="col-12">
                  <Card style={{ width: "450px", border: "0" }}>
                    <BootstrapForm.Group className="col-md-12  mt-3">
                      <BootstrapForm.Label>Mobile Number *</BootstrapForm.Label>
                      <Field
                        type="text"
                        class="form-control"
                        id="mobileNum"
                        name="mobileNum"
                        placeholder="Mobile Number"
                        style={{ height: "50px" }}
                        className={
                          errors.mobileNum && touched.mobileNum
                            ? "input-error"
                            : null
                        }
                      />
                      <ErrorMessage
                        name="mobileNum"
                        component="span"
                        className="error"
                      />
                    </BootstrapForm.Group>
                    <Card.Body style={{ height: "50px" }}>
                      <BootstrapForm.Group
                        className="col-md-12"
                        controlId="formGridDestination"
                      >
                        <div className="row">
                          <div className="col-5">
                            <BootstrapForm.Check
                              name="terms"
                              label="Get updates on"
                            />
                          </div>
                          <div className="col-7">
                            <span style={{ color: "green" }}>
                              <WhatsAppIcon className="fa-whatsapp fa-2x" />{" "}
                              Whatsapp
                            </span>
                          </div>
                        </div>
                      </BootstrapForm.Group>
                    </Card.Body>
                    <BootstrapForm.Group
                      className="col-md-12  mt-3"
                      controlId="formGridDestination"
                    >
                      <BootstrapForm.Label>
                        Enter your Name *
                      </BootstrapForm.Label>
                      <Field
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="Full name"
                        style={{ height: "50px" }}
                        className={
                          errors.name && touched.name ? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="error"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group
                      className="col-md-12  mt-3"
                      controlId="formGridDestination"
                    >
                      <BootstrapForm.Label>
                        Enter remarks (optional)
                      </BootstrapForm.Label>
                      <Field
                        type="text"
                        class="form-control"
                        id="remarks"
                        name="remarks"
                        placeholder="Mobile Number"
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
                  Verify via OTP
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
