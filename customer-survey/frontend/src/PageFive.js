import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Loader from "react-js-loader";

const PageFive = () => {
  const [questionData, setQuestionData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(list);
  useEffect(() => {
    getData()
  },[])

  const getData = () => {
    fetch("http://localhost:4000/questions/5")
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
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/Home')
    }, 5000)
  }

  const onPrevClickHandler = () => {
    navigate('/4')
  }
  return (
    <div className="App">
        {loading && 
        <div className="loader">
        <Loader type="spinner-cub" bgColor={"#FFFFFF"} color={'#3440eb'} size={50} /> </div> }
      
      <div className='popUp'>
        <h3>Customer Survey</h3>
        <div className='questionNo'>
          <h5 className='innerNo'>5/5</h5>
        </div>
        <h5 className="question">5.{questionData?.value}</h5>
        <textarea />

        <div className='btn'>
          <button className='prev' onClick={onPrevClickHandler}>Prev</button>
          <button className='next' onClick={onNextClickHandler}>Next</button>
        </div>
    </div>
    </div>
  );
}

export default PageFive;