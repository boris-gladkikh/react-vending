import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Chili.css"

function Chili(){
  const [hideChili, setHideChili] = useState("");
  const [showGordon, setShowGordon] = useState("Hidden");
  let chiliImg = "https://s3-media0.fl.yelpcdn.com/bphoto/vDzdm5bcCxpiJ4jhyV8zVQ/348s.jpg";

  function handleRefund(){
    setHideChili("Hidden");
    setShowGordon("");
  }


  return(
    <div className="chiliBox">
      <h3>What Did you think was going to happen? Gastric Distress.</h3>
      <h4> Roach Meat and Onion Chili. NON-GMO!</h4>
      <img className={`chiliImg ${hideChili}`} src={chiliImg} alt="chili, dawg"></img>
      <img className={showGordon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtubCXlzYgMYDR74kGSHCAyuDXfadDXbnu79S_CIK9huaOaZZG&usqp=CAU" alt="angry british man yells at food"></img>

      <h5 className={hideChili}>May God have mercy on us all.</h5>
      <h5 className={showGordon}>This is your fault to begin with. Why would you get chili from a vending machine?</h5>

      <button onClick={handleRefund}>Get a Refund</button><br/>
      <Link to="/">Go Back</Link>

    </div>
  )
}

export default Chili