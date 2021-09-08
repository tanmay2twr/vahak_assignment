import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import EditIcon from "@material-ui/icons/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
function OTPVerify(props) {
  const [otp, setOtp] = useState("");

  const handleClick = () => {
    let num = 2;
    props.changeScreen(num);
  };

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    setOtp(otp + value);
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 4) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };
  const handleSubmit = (e) => {
    console.log(otp);
    e.preventDefault();
    if (otp === "1234") {
      let num = props.num;
      num = props.num + 1;
      console.log(num);
      props.changeScreen(num);
    }
  };
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Form className="p-4" style={{ width: "500px" }} onSubmit={handleSubmit}>
        <div class="col-12">
          <Card style={{ width: "450px", border: "0" }}>
            <Card.Text>
              We've sent an OTP to your mobile number, Please enter it below to
              submit your bid request {props.bidDetails.mobileNum}{" "}
              <EditIcon
                onClick={() => {
                  handleClick();
                }}
              />
              Edit
            </Card.Text>
            <Card.Body>
              <div className="userInput">
                <input
                  type="text"
                  onChange={handleChange}
                  name="field-1"
                  maxLength="1"
                  className="border-0 border-bottom m-2 otpInput"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  maxLength="1"
                  name="field-2"
                  className="border-0 border-bottom m-2 otpInput"
                />
                <input
                  type="text"
                  name="field-3"
                  maxLength="1"
                  onChange={handleChange}
                  className="border-0 border-bottom m-2 otpInput"
                />
                <input
                  type="text"
                  name="field-4"
                  maxLength="1"
                  onChange={handleChange}
                  className="border-0 border-bottom m-2 otpInput"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
        <Button
          type="submit"
          className=" btn btn-primary col-12 mt-3"
          variant="primary"
        >
          Verify via OTP
        </Button>
      </Form>
    </div>
  );

  <div></div>;
}

export default OTPVerify;
