import "./App.css";
import react, { useState } from "react";
import Header from "./Containers/Header/index";
import JourneyDetails from "./Containers/JourneyDetails/index";
import ViewJourneyDetails from "./Containers/ViewJourneyDetails/index";
import BidDetails from "./Containers/BidDetails/index";
import ViewBidDetails from "./Containers/ViewBidDetails";
import OTPVerify from "./Containers/OTPVerify";
import SubmitBid from "./Components/SubmitBid";

function App() {
  const [screenNum, setScreenNum] = useState(1);
  const [journeyDetails, setJourneyDetails] = useState({
    sourceLocation: "",
    destination: "",
    carType: "",
    numOfTravellers: 0,
  });

  const [bidDetails, setBidDetails] = useState({
    bidAmount: "",
    mobileNum: "",
    name: "",
    remarks: "",
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

  const updateBidDetails = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBidDetails({
      ...bidDetails,
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
            setJourneyDetails={setJourneyDetails}
          />
        </>
      )}
      {screenNum === 2 && (
        <>
          <Header text="Place your Bid(2/4 step)" />
          <ViewJourneyDetails
            journeyDetails={journeyDetails}
            changeScreen={changeScreen}
            num={screenNum}
          />
          <BidDetails
            setBidDetails={setBidDetails}
            bidDetails={bidDetails}
            changeScreen={changeScreen}
            num={screenNum}
            updateBidDetails={updateBidDetails}
          />
        </>
      )}
      {screenNum === 3 && (
        <>
          <Header text="Veriy OTP(3/4 step)" />
          <ViewJourneyDetails
            journeyDetails={journeyDetails}
            changeScreen={changeScreen}
            num={screenNum}
          />
          <ViewBidDetails bidDetails={bidDetails} />
          <OTPVerify
            changeScreen={changeScreen}
            num={screenNum}
            bidDetails={bidDetails}
          />
        </>
      )}
      {screenNum === 4 && (
        <>
          <Header text="Summary & Submit Bid(4/4 step)" />{" "}
          <ViewJourneyDetails
            journeyDetails={journeyDetails}
            changeScreen={changeScreen}
            num={screenNum}
          />
          <ViewBidDetails bidDetails={bidDetails} />
          <SubmitBid/>
        </>
      )}
    </div>
  );
}

export default App;
