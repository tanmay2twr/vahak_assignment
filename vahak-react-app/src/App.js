import "./App.css";
import react, { useState } from "react";
import Header from "./Containers/Header/index";
import JourneyDetails from "./Containers/JourneyDetails/index";
import ViewJourneyDetails from "./Containers/ViewJourneyDetails/index";

function App() {
  const [screenNum, setScreenNum] = useState(1);
  const [journeyDetails, setJourneyDetails] = useState({
    sourceLocation: "",
    destination: "",
    carType: "",
    numOfTravellers: 0,
  });

  const changeScreen = (num) => {
    setScreenNum(num);
  };

  const updateJourneyDetails = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setJourneyDetails({
      ...journeyDetails,
      [name]: value,
    });
  };

  return (
    <div>
      {screenNum === 1 && (
        <>
          <Header text="Place your Bid(1/4 step)" />{" "}
          <JourneyDetails
            changeScreen={changeScreen}
            num={screenNum}
            journeyDetails={journeyDetails}
            updateJourneyDetails={updateJourneyDetails}
          />
        </>
      )}
      {screenNum === 2 && (
        <>
          <Header text="Place your Bid(2/4 step)" />
         
        </>
      )}
      {screenNum === 3 && <Header text="Veriy OTP(3/4 step)" />}
      {screenNum === 4 && <Header text="Summary & Submit Bid(4/4 step)" />}

      {/* <Child1 parentCallback={this.callbackFunction} /> */}
    </div>
  );
}

export default App;
