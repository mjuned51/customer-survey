import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const Welcome = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/1")
  }
  // console.log("navigate", navigate);
  // console.log("hi");
  return(
    <div className="App">
      <div className="popUp">
        <h3>Welcome</h3>
        <button className="startBtn" onClick={onClickHandler}>Start</button>
      </div>

    </div>
  )
}

export default Welcome;