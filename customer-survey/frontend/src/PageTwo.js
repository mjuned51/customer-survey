import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const PageTwo = () => {
  const [questionData, setQuestionData] = useState();
  const navigate = useNavigate();
  // console.log(list);
  useEffect(() => {
    getData()
  },[])

  const getData = () => {
    fetch("http://localhost:4000/questions/2")
      .then(res => res.json())
      .then(response => {
        if(response.status == 200){
          console.log(response)
          setQuestionData(response?.result[0])
        }
      })
      .catch(err => console.log(err))
  }

  const onNextClickHandler = () => {
    navigate('/3')
  }
  const onPrevClickHandler = () => {
    navigate('/1')
  }
  return (
    <div className="App">
      <div className='popUp'>
        <h3>Customer Survey</h3>
        <div className='questionNo'>
          <h5 className='innerNo'>2/5</h5>
        </div>
        <h5 className="question">2. {questionData?.value}</h5>
        <div>
          <button className='circleBtn'>1</button>
          <button className='circleBtn'>2</button>
          <button className='circleBtn'>3</button>
          <button className='circleBtn'>4</button>
          <button className='circleBtn'>5</button>
        </div>

        <div className='btn'>
          <button className='prev' onClick={onPrevClickHandler}>Prev</button>
          <button className='next' onClick={onNextClickHandler}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;