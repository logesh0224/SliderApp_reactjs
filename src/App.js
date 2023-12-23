


import { useState } from "react";
import "./App.css";
 const bikes=["https://images.pexels.com/photos/10881298/pexels-photo-10881298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/9286086/pexels-photo-9286086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 "https://images.pexels.com/photos/7551567/pexels-photo-7551567.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/9475868/pexels-photo-9475868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/17189026/pexels-photo-17189026/free-photo-of-motorcycle-duke-390-standing-on-road.jpeg",
"https://images.pexels.com/photos/14553290/pexels-photo-14553290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];
 
 
export default function App(){
  const [current,setCurrent] =useState(0);
  function nextSlide(){
    setCurrent(current === bikes.length-1? 0:current+1);
  }
function prevSlide(){
  setCurrent(current===0? bikes.length-1:current-1);
}
return(

<div>
  <h2> Loki's Slider</h2>
  <div className="slider">
  
  <div className="right-arrow" onClick={nextSlide}></div>
  <div className="left-arrow" onClick={prevSlide}></div>

  {bikes.map(
    (bike,index) =>
  current===index && (
  <div key={bike} className="slide">
    <img src={bike} alt="bikes" />
</div>
)
)}
</div>
</div>

);
  }

