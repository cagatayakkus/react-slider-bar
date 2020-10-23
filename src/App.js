import React, { useState } from "react";
import SliderBar from "./components/SliderBar";
import classes from "./App.module.css";

function App() {
  const [firstValue, setFirstValue] = useState(70);
  const [secondValue, setSecondValue] = useState(50);
  const [thirdValue, setThirdValue] = useState(30);
  const [fourthValue, setFourthValue] = useState(20);
  const [fifthValue, setFifthValue] = useState(10);
  return (
    <div>
      <div className={classes.Container}>
        <h3>{firstValue}</h3>
        <SliderBar
          initValue={40}
          valueHandler={(num) => setFirstValue(Math.round(num))}
        />
      </div>
      <hr></hr>
      <div className={classes.Container1}>
        <h3>{secondValue}</h3>
        <SliderBar
          initValue={30}
          backgroundColor={"blue"}
          lineBorder="1px solid red"
          valueHandler={(num) => setSecondValue(Math.round(num))}
        />
      </div>
      <div className={classes.Container2}>
        <h3>{thirdValue}</h3>
        <SliderBar
          border="1px solid green"
          ellipseBorder="1px solid green"
          lineColor="green"
          ellipseColor="purple"
          valueHandler={(num) => setThirdValue(Math.round(num))}
        />
      </div>
      <div className={classes.Container3}>
        <h3>{fourthValue}</h3>
        <SliderBar
          border="1px solid green"
          ellipseBorder="1px solid green"
          lineColor="green"
          ellipseColor="purple"
          valueHandler={(num) => setFourthValue(Math.round(num))}
        />
      </div>
      <div className={classes.Container4}>
        <h3>{fifthValue}</h3>
        <SliderBar
          border="1px solid green"
          ellipseBorder="1px solid green"
          lineColor="green"
          ellipseColor="purple"
          valueHandler={(num) => setFifthValue(Math.round(num))}
        />
      </div>
    </div>
  );
}

export default App;
