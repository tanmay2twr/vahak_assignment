import "./App.css";
import react, { useState } from "react";
import Header from "./Containers/Header/index";
import JourneyDetails from "./Containers/JourneyDetails/index";

function App() {
  const [screenNum, setScreenNum] = useState(1);

  const changeScreen = (num) => {
    setScreenNum(num);
  };

  return (
    <div>
      {screenNum === 1 && <Header text="Place your Bid(1/4 step)" />}
      {screenNum === 2 && <Header text="Place your Bid(2/4 step)" />}
      {screenNum === 3 && <Header text="Veriy OTP(3/4 step)" />}
      {screenNum === 4 && <Header text="Summary & Submit Bid(4/4 step)" />}
<JourneyDetails/>
      {/* <Child1 parentCallback={this.callbackFunction} /> */}
    </div>
  );
}

export default App;
