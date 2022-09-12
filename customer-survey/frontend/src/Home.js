import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  
  const onClickHandler = () => {
     navigate("/1")
  }
  return(
    <div className="App">
      <div className="popUp">
        <h3>Welcome</h3>
        <button className="startBtn" onClick={onClickHandler}>start</button> 
      </div>

    </div>
  )
}

export default Home;